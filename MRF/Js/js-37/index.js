//using factory function
function callAPI({ baseURL }) {
  return {
    get: async function (endPoint) {
      return await fetch(`${baseURL}/${endPoint}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((val) => {
        return val.json();
      });
    },

    post: async function (body, endPoint) {
      return await fetch(`${baseURL}/${endPoint}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((val) => {
        return val.json();
      });
    },
  };
}

async function testFactory() {
  const a = callAPI({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  const get = await a.get("posts/1");
  const post = await a.post(
    {
      title: "foo",
      body: "bar",
      userId: 1,
    },
    "posts"
  );

  console.log("=================");
  console.log(">>> test factory function");
  console.log(a);
  console.log(">>> get method");
  console.log(get);
  console.log(">>> post method");
  console.log(post);
  console.log("=================");
}

// using class
class callAPIclass {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endPoint) {
    return await fetch(`${this.baseURL}/${endPoint}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((val) => {
      return val.json();
    });
  }

  async post(body, endPoint) {
    return await fetch(`${this.baseURL}/${endPoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((val) => {
      return val.json();
    });
  }
}

async function testClass() {
  const b = new callAPIclass("https://jsonplaceholder.typicode.com");
  const get = await b.get("posts/1");
  const post = await b.post(
    {
      title: "foo",
      body: "bar",
      userId: 1,
    },
    "posts"
  );

  console.log("=================");
  console.log(">>> test class");
  console.log(b);
  console.log(">>> get method");
  console.log(get);
  console.log(">>> post method");
  console.log(post);
  console.log("=================");
}

// run test scripts
testFactory();
testClass();
