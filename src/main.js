import { isMainThread } from 'worker_threads';
import { runWorkerVersion } from './workerManager.js';
import { runNonWorkerVersion } from './nonWorker.js';

if (isMainThread) {
  (async () => {
    await runWorkerVersion();
    runNonWorkerVersion();
  })();
}
