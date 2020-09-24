import React from "react";

export default function useCounter(beginAt) {
  const [i, setI] = React.useState(beginAt);

  const increment = () => setI(i + 1);

  const decrement = () => setI(i - 1);

  return [i, increment, decrement];
}
