import React from "react";

import Greetings from "../Greetings";
import Counter from "../Counter";

export default function App() {
  return (
    <article>
      <Greetings firstname="Paul" surname="Gérard" />
      <Greetings firstname="Jacques" />
      <Greetings firstname="Pierre" />
      <Greetings firstname="Michel" />

      <Counter />
      <Counter beginAt={4} />
    </article>
  );
}
