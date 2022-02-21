export interface IInput {
  setState: (value: string) => void;
  externalIsWrong?: boolean;
}

export interface IBtn {
  onClick: () => void;
  label: string;
}
