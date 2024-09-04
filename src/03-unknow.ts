// Con any
let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.doSomething();
anyVar.touppercase();

// Con unknown
let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething(); //-> no permite

if (typeof unknownVar==='string'){
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown=>{
  return JSON.parse(str);
}

if (typeof unknownVar === 'boolean'){
  let isNewV2: boolean = unknownVar;
}
