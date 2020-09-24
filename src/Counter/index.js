import { number } from "prop-types";
import React from "react";

import Button from "../Button";
import useCounter from "../useCounter";
import { CounterValue } from "./styles";

export default function Counter({ beginAt }) {
  const [i, increment, decrement] = useCounter(beginAt);

  return (
    <div>
      <Button onClick={decrement} secondary>
        -
      </Button>
      <CounterValue>{i}</CounterValue>
      <Button onClick={increment}>+</Button>
    </div>
  );
}

Counter.propTypes = {
  beginAt: number,
};

Counter.defaultProps = {
  beginAt: 0,
};
