async function getJSON(path, params) {
  const url = params
    ? `${path}?${new URLSearchParams(params).toString()}`
    : path;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network response was not ok (status: ${response.status})`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data.data;
}
