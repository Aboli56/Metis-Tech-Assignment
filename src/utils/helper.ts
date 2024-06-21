export const createClassName = (classNames: {[className: string]: boolean}): string =>
  Object.keys(classNames)
    .reduce((accumulator: string[], key: string) => (classNames[key] ? accumulator.concat(key) : accumulator), [])
    .join(" ");
