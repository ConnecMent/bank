//using factory function
function callAPI({ baseURL, endPoint }) {
  return {
    get: async function () {
      return await fetch(`${baseURL}/${endPoint}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((val) => {
        return val.json();
      });
    },

    post: async function (body) {
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
    endPoint: "posts",
  });
  const get = await a.get();
  const post = await a.post({
    title: "foo",
    body: "bar",
    userId: 1,
  });

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
  constructor(baseURL, endPoint) {
    this.baseURL = baseURL;
    this.endPoint = endPoint;
  }

  async get() {
    return await fetch(`${this.baseURL}/${this.endPoint}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((val) => {
      return val.json();
    });
  }

  async post(body) {
    return await fetch(`${this.baseURL}/${this.endPoint}`, {
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
  const b = new callAPIclass("https://jsonplaceholder.typicode.com", "posts");
  const get = await b.get();
  const post = await b.post({
    title: "foo",
    body: "bar",
    userId: 1,
  });

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
