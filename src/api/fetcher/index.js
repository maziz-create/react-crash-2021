const apiUrl = "http://localhost:5000";

export const fetcher = async (url) => {
  const res = await fetch(`${apiUrl}/${url}`);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;

    throw error;
  }

  return res.json();
};
