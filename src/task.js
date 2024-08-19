// task.js
export function performHeavyTask() {
  let sum = 0;
  for (let i = 0; i < 1e6; i++) {
    sum += Math.sqrt(i);
    sum += Math.sqrt(i);
    sum += Math.sqrt(i);
    sum += Math.sqrt(i);
    sum += Math.sqrt(i);
    sum += Math.sqrt(i);
    sum += Math.sqrt(i);
    sum += Math.sqrt(i);
    sum += Math.sqrt(i);
  }
  return sum;
}
