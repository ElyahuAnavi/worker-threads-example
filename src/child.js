// child.js
import { performHeavyTask } from './task.js';

function runChildProcess() {
  const taskCount = parseInt(process.argv[2], 10);
  let tasksCompleted = 0;

  for (let i = 0; i < taskCount; i++) {
    performHeavyTask();
    tasksCompleted++;
  }

  process.send({ tasksCompleted });
  process.exit(0);
}

runChildProcess();
