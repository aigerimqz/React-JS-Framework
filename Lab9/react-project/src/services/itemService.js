const BASE_URL = "https://dummyjson.com/products";

export async function searchItems(query) {
  const res = await fetch(`${BASE_URL}/search?q=${query}`);
  return res.json();
}

export async function getItemById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}
