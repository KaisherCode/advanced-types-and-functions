// Kaisher => [K,a,i,s,h,e,r] => string => string[]
// [K,a,i,s,h,e,r] => Kaisher => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]

  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

export const rtsArray = parseStr('Kaisher');
rtsArray.reverse();
// if (Array.isArray(rtsArray)){
//   rtsArray.reverse();
// }
console.log('rtaArray', 'Kaisher =>', rtsArray);

const rtaStr = parseStr(['K', 'a', 'i', 's', 'h', 'e', 'r']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string'){
//   rtaStr.toLowerCase();
// }
console.log('rtaStr', "['K','a','i','s','h','e','r'] =>", rtaStr);

const rtaBoolean = parseStr(12);
