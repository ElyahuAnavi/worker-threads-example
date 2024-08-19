// main.js
import { isMainThread } from 'worker_threads';
import { runWorkerVersion } from './workerManager.js';
import { runChildProcessVersion } from './childManager.js';
import { runNonWorkerVersion } from './nonWorker.js';

if (isMainThread) {
  (async () => {
    await runWorkerVersion();
    await runChildProcessVersion();
    runNonWorkerVersion();
  })();
}
