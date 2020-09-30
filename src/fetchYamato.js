export default async function fetchYamato(route) {
  const baseUri = process.env.REACT_APP_BASE_URI || "//localhost:3001";
  const response = await fetch(`${baseUri}${route}`);
  if (!response.ok) throw new Error(response.statusText);

  return await response.json();
}
