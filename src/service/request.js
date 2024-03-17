const request = (url, method, data) => {
  return new Promise(async (resolve, reject) => {
    const options = {
      method,
      header: {
        "Content-Type": "application/json",
      },
    };

    if (data !== null) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();
    if (response.ok && result.status === 200) {
      resolve(result);
    } else {
      reject(result);
    }
  });
};

export const post = (url, data) => request(url, "POST", data);
export const get = (url) => request(url, "GET", null);
