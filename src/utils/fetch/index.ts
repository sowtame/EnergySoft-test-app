export const fetchApi = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
};
