import json, tempfile, unittest, zipfile
from urllib.robotparser import RobotFileParser
from pathlib import Path
from bundle import build, verify, digest

class BundleTests(unittest.TestCase):
    def fixture(self,t):
        root=Path(t);src=root/'source';src.mkdir();(src/'index.html').write_text('hello')
        out=root/'bundle';build(src,out,'a'*40);return root,out
    def test_round_trip(self):
        with tempfile.TemporaryDirectory() as t:
            root,out=self.fixture(t);m=verify(out,root/'unpacked')
            self.assertEqual((root/'unpacked/index.html').read_text(),'hello')
            self.assertEqual(m['source_sha'],'a'*40)
    def test_modified_zip_rejected(self):
        with tempfile.TemporaryDirectory() as t:
            root,out=self.fixture(t)
            with (out/'site.zip').open('ab') as f:f.write(b'changed')
            with self.assertRaises(ValueError):verify(out,root/'unpacked')
    def test_unsafe_path_rejected(self):
        with tempfile.TemporaryDirectory() as t:
            root,out=self.fixture(t);m=json.loads((out/'manifest.json').read_text())
            with zipfile.ZipFile(out/'site.zip','a') as z:z.writestr('../escape',b'bad')
            m['files']['../escape']=digest(b'bad');m['zip_sha256']=digest((out/'site.zip').read_bytes())
            (out/'manifest.json').write_text(json.dumps(m))
            with self.assertRaises(ValueError):verify(out,root/'unpacked')
    def test_incomplete_sha_rejected(self):
        with tempfile.TemporaryDirectory() as t:
            with self.assertRaises(ValueError):build(Path(t),Path(t)/'out','abc')
    def test_social_crawlers_allowed_without_opening_search_crawling(self):
        with tempfile.TemporaryDirectory() as t:
            root,out=self.fixture(t)
            robots=RobotFileParser()
            robots.parse((out/'site/robots.txt').read_text().splitlines())
            for bot in ('Twitterbot','facebookexternalhit','LinkedInBot','Slackbot-LinkExpanding','Discordbot','TelegramBot','WhatsApp'):
                self.assertTrue(robots.can_fetch(bot,'https://ing08.github.io/developing/article/story/'),bot)
                self.assertTrue(robots.can_fetch(bot,'https://ing08.github.io/developing/assets/cover.jpg'),bot)
            self.assertFalse(robots.can_fetch('Googlebot','https://ing08.github.io/developing/'))
if __name__=='__main__':unittest.main()
