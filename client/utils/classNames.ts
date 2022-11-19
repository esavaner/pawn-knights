type ClassObject = string | number | bigint | object;

export const classNames = (...args: ClassObject[]) => {
  return args
    .map((arg) =>
      typeof arg === "object"
        ? Object.entries(arg).filter(([key, val]) => !!val[key])
        : arg
    )
    .flat()
    .join(" ");
};
