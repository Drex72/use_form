export type FormError<T extends object> = {
  [Prop in keyof T]: string | null;
};

export type Validator<T extends object> = {
  [Prop in keyof T]?: (arg: T[Prop]) => string | null;
};
