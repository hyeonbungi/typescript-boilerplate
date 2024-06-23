function measureExecutionTime<T>(fn: (...args: any[]) => T, ...args: any[]) {
  const timeLabel = `${fn.name}`;

  console.time(timeLabel);
  const result = fn(...args);
  console.timeEnd(timeLabel);

  return result;
}

export function logMeasuredExecution<T>(
  fn: (...args: any[]) => T,
  ...args: any[]
) {
  const result = measureExecutionTime(fn, ...args);
  console.log(`${fn.name}(${args.join(', ')}): ${result}\n`);
}
