// worker.js
import { parentPort, workerData } from 'worker_threads';
import { performance } from 'perf_hooks';
import { performHeavyTask } from './task.js';

function runWorkerThread() {
  const { id: workerId, taskCount } = workerData;
  const start = performance.now();

  let tasksCompleted = 0;
  for (let i = 0; i < taskCount; i++) {
    performHeavyTask();
    tasksCompleted++;
  }

  const duration = performance.now() - start;
  parentPort.postMessage({ workerId, tasksCompleted, duration });
}

runWorkerThread();
