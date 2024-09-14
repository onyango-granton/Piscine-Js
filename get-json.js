const getJSON = async function (path, params) {
  const url = new URL(path);
  if (params) {
    url.searchParams.set("params", JSON.stringify(params));
  }

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
