export type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

export type sizeType = "xs" | "sm" | "md" | "lg" | null;
