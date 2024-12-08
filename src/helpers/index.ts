const compose = (...funcs: Function[]) => (initialValue: any) => {
  return funcs.reduceRight((acc, func) => func(acc), initialValue);
};

const pipe = (...funcs: Function[]) => (initialValue: any) => {
  return funcs.reduce((acc, func) => func(acc), initialValue);
};

const filterArray = (array: Array<any>, filterFunc: Function) => {
  let i = 0;
  while(i < array.length) {
    if (!filterFunc(array[i])) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
} 

export { compose, pipe, filterArray };
