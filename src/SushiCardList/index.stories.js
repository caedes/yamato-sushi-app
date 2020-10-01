import React from "react";

import SushiCardList from ".";

export default {
  title: "Components/SushiCardList",
  component: SushiCardList,
};

export const Primary = () => <SushiCardList />;
export const WithSearch = () => <SushiCardList search="tem" />;
