import { Worker } from 'worker_threads';
import path from 'path';
import { performance } from 'perf_hooks';
import os from 'os';

export async function runWorkerVersion() {
  const workerCount = os.cpus().length;
  const taskCount = 100;
  const tasksPerWorker = Math.ceil(taskCount / workerCount);

  console.log("Running version with worker nodes:");
  console.log(`Starting ${workerCount} workers to process ${taskCount} tasks`);

  const start = performance.now();

  await Promise.all(
    Array.from({ length: workerCount }, (_, i) =>
      createWorker(i, tasksPerWorker)
    )
  ).catch(console.error);

  const duration = performance.now() - start;
  console.log(`All tasks completed in ${duration.toFixed(2)} ms\n`);
}

function createWorker(id, taskCount) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve('./src/worker.js'), {
      workerData: { id, taskCount },
    });

    worker.on('message', ({ workerId, tasksCompleted, duration }) => {
      console.log(
        `Worker ${workerId + 1} completed ${tasksCompleted} tasks in ${duration.toFixed(2)} ms`
      );
      resolve();
    });

    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker ${id} stopped with exit code ${code}`));
    });
  });
}
