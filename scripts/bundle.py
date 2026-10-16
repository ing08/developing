"""Build once, verify, and promote the exact ZIP tested in STG."""
import hashlib, json, re, shutil, sys, zipfile
from pathlib import Path

def digest(data): return hashlib.sha256(data).hexdigest()
def build(source, output, sha):
    if not re.fullmatch(r'[0-9a-f]{40}', sha): raise ValueError('Full source SHA required')
    if any(p.is_symlink() for p in source.rglob("*")): raise ValueError("Symlink source is not allowed")
    output.mkdir(parents=True, exist_ok=True)
    site=output/'site'
    if site.exists(): shutil.rmtree(site)
    shutil.copytree(source,site)
    (site/'.nojekyll').write_text('',encoding='utf-8')
    (site/'robots.txt').write_text('User-agent: *\nDisallow: /\n',encoding='utf-8')
    (site/'version.json').write_text(json.dumps({'repository':'ing08/developing','source_sha':sha}),encoding='utf-8')
    manifest={'repository':'ing08/developing','source_sha':sha,'files':{}}
    for p in sorted(site.rglob('*')):
        if p.is_symlink(): raise ValueError('Symlink is not allowed')
        if p.is_file(): manifest['files'][p.relative_to(site).as_posix()]=digest(p.read_bytes())
    with zipfile.ZipFile(output/'site.zip','w',zipfile.ZIP_DEFLATED) as z:
        for name in manifest['files']: z.write(site/name,name)
    manifest['zip_sha256']=digest((output/'site.zip').read_bytes())
    (output/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')
    return manifest

def verify(bundle, destination):
    m=json.loads((bundle/'manifest.json').read_text(encoding='utf-8'))
    if m['repository']!='ing08/developing' or not re.fullmatch(r'[0-9a-f]{40}',m['source_sha']): raise ValueError('Invalid provenance')
    if digest((bundle/'site.zip').read_bytes())!=m['zip_sha256']: raise ValueError('ZIP hash mismatch')
    with zipfile.ZipFile(bundle/'site.zip') as z:
        names=z.namelist()
        if len(names)!=len(set(names)) or set(names)!=set(m['files']): raise ValueError('File set mismatch')
        for name in names:
            if name.startswith('/') or '\\' in name or ':' in name or '..' in name.split('/'): raise ValueError('Unsafe path')
            if digest(z.read(name))!=m['files'][name]: raise ValueError('File hash mismatch')
        if json.loads(z.read('version.json'))['source_sha']!=m['source_sha']: raise ValueError('Version mismatch')
        if destination.exists(): raise ValueError('Destination must be new')
        destination.mkdir(parents=True)
        z.extractall(destination)
    return m

if __name__=='__main__':
    if sys.argv[1]=='build': print(json.dumps(build(Path('site'),Path('build'),sys.argv[2])))
    elif sys.argv[1]=='verify': print(json.dumps(verify(Path(sys.argv[2]),Path(sys.argv[3]))))
    else: raise ValueError('Unknown command')
