const compose = (...funcs: Function[]) => (initialValue: any) => {
  return funcs.reduce((acc, func) => func(acc), initialValue);
};

export { compose };
