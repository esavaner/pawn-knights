type ClassObject = string | number | bigint | object | null | undefined;

export const classNames = (...args: ClassObject[]) => {
  return args
    .filter(<TValue>(el: TValue | null | undefined): el is TValue => !!el)
    .map((arg) =>
      typeof arg === 'object'
        ? Object.keys(arg).filter((key_1) => !!arg[key_1 as keyof typeof arg])
        : arg
    )
    .flat()
    .join(' ');
};
