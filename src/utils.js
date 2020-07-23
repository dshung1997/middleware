const get = (what) => {
  return fetch("https://jsonplaceholder.typicode.com/" + what)
    .then((response) => response.json())
    .then((data) => {
      return { status: "SUCCESS", data };
    })
    .catch((e) => ({ status: "FAILURE", data: e }));
};

export { get };
