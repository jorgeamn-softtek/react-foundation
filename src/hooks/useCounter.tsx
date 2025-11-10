import { useState } from "react";

interface Options {
  initValue: number;
}

export const useCounter = (options: Options) => {
  const [count, setCount] = useState(options.initValue);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };
  return { count, increaseBy };
};
