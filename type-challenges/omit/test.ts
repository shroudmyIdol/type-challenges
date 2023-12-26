import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyOmit<ToDo, "description">>>,
  Expect<Equal<Expected2, MyOmit<ToDo, "description" | "completed">>>
];

type ToDo = {
  title: string;
  description: string;
  completed: boolean;
};

type Expected1 = {
  title: string;
  completed: boolean;
};

type Expected2 = {
  title: string;
};
