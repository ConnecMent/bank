//using factory function
function callAPI({ baseURL }) {
  return {
    baseURL: baseURL,
    get: function () {
      return "get method called";
    },

    post: function () {
      return "post method called";
    },
  };
}

const a = callAPI({ baseURL: "https://api.com" });

console.log(a);
console.log(a.baseURL);
console.log(a.get());
console.log(a.post());

// using class
class callAPIclass {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get() {
    return "get method called";
  }

  post() {
    return "get method called";
  }
}

const b = new callAPIclass("https://api2.com");

console.log(b);
console.log(b.baseURL);
console.log(b.get());
console.log(b.post());
