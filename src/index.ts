import { mergeSort } from './lib/algorithms';
import { logMeasuredExecution } from './lib/benchmark';

console.log('Hello, TypeScript Boilerplate!\n');

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
logMeasuredExecution(mergeSort, unsortedArray);
