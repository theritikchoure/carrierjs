mocha.setup("bdd");
mocha.checkLeaks();
var expect = chai.expect;
let assert = chai.assert;

let getMethod = async () => {
  try {
    const response = await carrier.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return response;
  } catch (error) {
    return error;
  }
};

describe("Testing Get Method", function async() {
  it("result.response should be an array", async function () {
    let result = await getMethod();
    console.log(result);
    assert.isArray(result.response);
  });

  it("result.headers should be an object", async function () {
    let result = await getMethod();
    assert.isObject(result.headers);
  });

  it("response status code should be 200 ", async function () {
    let result = await getMethod();
    assert.strictEqual(result.status, 200);
  });

  it("response length should be 200", async function () {
    let result = await getMethod();
    assert.lengthOf(result.response, 200);
  });
});

describe("Testing Post Method", function async() {
  this.timeout(5000);
  it("should successfully send a POST request and receive a 201 status code", async function () {
    const data = { title: "Test", completed: false };
    const response = await carrier.post(
      "https://jsonplaceholder.typicode.com/todos/",
      data
    );
    assert.strictEqual(response.status, 201);
  });
});

describe("Testing Put Method", function async() {
  this.timeout(5000);
  it("should successfully send a PUT request and receive a 200 status code", async function () {
    const data = { title: "Updated", completed: true };
    const response = await carrier.put(
      "https://jsonplaceholder.typicode.com/todos/1",
      data
    );
    assert.strictEqual(response.status, 200);
  });
});

describe("Testing Patch Method", function async() {
  this.timeout(5000);

  it("should successfully send a PATCH request and receive a 200 status code", async function () {
    const data = { completed: true };
    const response = await carrier.patch(
      "https://jsonplaceholder.typicode.com/todos/1",
      data
    );
    assert.strictEqual(response.status, 200);
  });
});

describe("Testing Delete Method", function async() {
  this.timeout(5000);

  it("should successfully send a DELETE request and receive a 200 status code", async function () {
    const response = await carrier.delete(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    assert.strictEqual(response.status, 200);
  });
});

describe("Testing Error Handling", function () {
  this.timeout(5000);

  it("should handle network errors gracefully", async function () {
    try {
      const response = await carrier.get(
        "https://nonexistent-server.invalid/api/data"
      );
    } catch (error) {
      assert.strictEqual(error.code, "NETWORK_ERROR");
    }
  });

  it("should handle 404 errors", async function () {
    try {
      const response = await carrier.get(
        "https://jsonplaceholder.typicode.com/nonexistent"
      );
    } catch (error) {
      assert.strictEqual(error.response.status, 404);
    }
  });
});
