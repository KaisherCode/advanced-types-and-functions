// Kaisher => [K,a,i,s,h,e,r] => string => string[]
// [K,a,i,s,h,e,r] => Kaisher => string[] => string

function parseStr(input: string  | string[]): string | string[]{
  if (Array.isArray(input)){
    return input.join(''); // string
  } else{
    return input.split(''); // string[]
  }
}

const rtsArray = parseStr('Kaisher');
// rtsArray.reverse();
if (Array.isArray(rtsArray)){
  rtsArray.reverse();
}
console.log('rtaArray','Kaisher =>', rtsArray);

const rtaStr = parseStr(['K','a','i','s','h','e','r']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string'){
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['K','a','i','s','h','e','r'] =>", rtaStr);
