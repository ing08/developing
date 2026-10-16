"""Only successful STG candidates or previously published release bundles."""
import json,os,re,subprocess
from pathlib import Path

def gh(*args):return subprocess.check_output(['gh',*args],text=True)
run=os.environ.get('STG_RUN','');tag=os.environ.get('ROLLBACK_TAG','')
if bool(run)==bool(tag):raise ValueError('Specify exactly one STG run or rollback tag')
if not os.environ.get('QA_NOTE','').strip():raise ValueError('QA and approval record required')
Path('candidate').mkdir()
if run:
    if not re.fullmatch(r'[0-9]+',run):raise ValueError('Invalid run ID')
    meta=json.loads(gh('api',f'repos/ing08/developing-stg/actions/runs/{run}'))
    if meta['conclusion']!='success' or meta['event']!='workflow_dispatch' or meta['head_branch']!='main' or meta['path']!='.github/workflows/stage.yml':
        raise ValueError('Not a successful trusted STG workflow')
    gh('run','download',run,'--repo','ing08/developing-stg','--name','candidate','--dir','candidate')
else:
    if not re.fullmatch(r'deploy-[0-9]+-[0-9]+',tag):raise ValueError('Invalid release tag')
    meta=json.loads(gh('api',f'repos/ing08/developing/releases/tags/{tag}'))
    if meta['draft']:raise ValueError('Unpublished release')
    gh('release','download',tag,'--repo','ing08/developing','--pattern','site.zip','--pattern','manifest.json','--dir','candidate')
m=json.loads(Path('candidate/manifest.json').read_text())
summary=f"## 本番承認待ち\nSource: `{m['source_sha']}`\n\nZIP SHA256: `{m['zip_sha256']}`\n\nSTG run: {run or 'rollback '+tag}\n\nQA記録: {os.environ['QA_NOTE']}\n"
with open(os.environ['GITHUB_STEP_SUMMARY'],'a') as f:f.write(summary)
