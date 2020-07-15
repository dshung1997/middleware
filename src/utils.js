const get = (what) => {
  return fetch(
    "https://jsonplaceholder.typicode.com/" + what
  ).then((response) => response.json());
};

export { get };
