// src/childManager.js
import { fork } from 'child_process';
import path from 'path';
import { performance } from 'perf_hooks';
import os from 'os';

export async function runChildProcessVersion() {
  const processCount = os.cpus().length;
  const taskCount = 100;
  const tasksPerProcess = Math.ceil(taskCount / processCount);

  console.log("Running version with child processes:");
  console.log(`Starting ${processCount} child processes to process ${taskCount} tasks`);

  const start = performance.now();

  await Promise.all(
    Array.from({ length: processCount }, (_, i) =>
      createChildProcess(i, tasksPerProcess)
    )
  ).catch(console.error);

  const duration = performance.now() - start;
  console.log(`All tasks completed in ${duration.toFixed(2)} ms\n`);
}

function createChildProcess(id, taskCount) {
  return new Promise((resolve, reject) => {
    const start = performance.now();

    const child = fork(path.resolve('./src/child.js'), [taskCount]);

    child.on('message', ({ tasksCompleted }) => {
      const childDuration = performance.now() - start;
      console.log(
        `Child process ${id + 1} completed ${tasksCompleted} tasks in ${childDuration.toFixed(2)} ms`
      );
      resolve();
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Child process ${id} stopped with exit code ${code}`));
    });
  });
}

