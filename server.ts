import 'common-utils/dist/nodejs/logger';
import run from '@/cli/run';
import app from '@/app';
import appCli from '@/app.cli';
import config from '@/config';

const cliInput = appCli();
const PORT = cliInput.port || config.port;

app(PORT)
  .then(async (http) => {
    if (cliInput['run-script']) {
      return run(cliInput['run-script'], cliInput);
    } else {
      await http.start();
    }
  }).catch((e) => {
    throw e;
  }
);

