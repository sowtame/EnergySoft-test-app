export const fetchApi = async (url: string) => {
  const response = await fetch(url, {
    // method: 'GET',
    // headers: {
    //   'Cache-Control': 'private',
    // },
  });
  return response.json();
};
