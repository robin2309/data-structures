const compose = (...funcs: Function[]) => (initialValue: any) => {
  return funcs.reduceRight((acc, func) => func(acc), initialValue);
};

const pipe = (...funcs: Function[]) => (initialValue: any) => {
  return funcs.reduce((acc, func) => func(acc), initialValue);
};

export { compose, pipe };
