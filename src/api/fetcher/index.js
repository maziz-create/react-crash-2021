const apiUrl = "http://localhost:5000";

export const fetcher = (url) => fetch(`${apiUrl}/${url}`).then(res => res.json());
