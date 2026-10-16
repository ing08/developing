import json,os,runpy,tempfile,unittest
from pathlib import Path
from unittest.mock import patch
SCRIPT=Path(__file__).with_name('release_input.py')
class ReleaseInputTests(unittest.TestCase):
    def execute(self,env,reply=None):
        with tempfile.TemporaryDirectory() as t:
            old=os.getcwd()
            try:
                os.chdir(t)
                with patch.dict(os.environ,env,clear=True),patch('subprocess.check_output',return_value=json.dumps(reply)) as cmd:
                    with self.assertRaises(ValueError):runpy.run_path(str(SCRIPT))
                    return cmd.call_count
            finally:os.chdir(old)
    def test_no_target(self):
        self.assertEqual(self.execute({'QA_NOTE':'approved'}),0)
    def test_two_targets(self):
        self.assertEqual(self.execute({'QA_NOTE':'approved','STG_RUN':'123','ROLLBACK_TAG':'deploy-1-1'}),0)
    def test_missing_qa_record(self):
        self.assertEqual(self.execute({'STG_RUN':'123'}),0)
    def test_failed_stg(self):
        self.assertEqual(self.execute({'STG_RUN':'123','QA_NOTE':'approved'},{'conclusion':'failure'}),1)
    def test_untrusted_workflow(self):
        self.assertEqual(self.execute({'STG_RUN':'123','QA_NOTE':'approved'},{'conclusion':'success','event':'workflow_dispatch','head_branch':'main','path':'.github/workflows/other.yml'}),1)
    def test_invalid_run(self):
        self.assertEqual(self.execute({'STG_RUN':'123;echo bad','QA_NOTE':'approved'}),0)
if __name__=='__main__':unittest.main()
