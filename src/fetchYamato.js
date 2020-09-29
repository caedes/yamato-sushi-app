import config from "react-global-configuration";

const responseToJson = (response) => response.json();

export default function fetchYamato(route) {
  const baseUri = config.get("baseUri");

  return fetch(`${baseUri}${route}`).then(responseToJson);
}
