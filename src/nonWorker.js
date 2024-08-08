import { performance } from 'perf_hooks';
import { performHeavyTask } from './task.js';

export function runNonWorkerVersion() {
  console.log("Running version without worker nodes:");
  const taskCount = 100;
  const start = performance.now();

  for (let i = 0; i < taskCount; i++) {
    performHeavyTask();
  }

  const duration = performance.now() - start;
  console.log(`Completed ${taskCount} tasks in ${duration.toFixed(2)} ms`);
}
