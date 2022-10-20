mocha.setup("bdd");
mocha.checkLeaks();
var expect = chai.expect;
let assert = chai.assert;

let getMethod = async () => {
    try {
        const response = await carrier.get('https://jsonplaceholder.typicode.com/todos/');
        return response;
    } catch (error) {
        return error;
    }
}

describe("Testing Get Method", function async () {
  it("result.response should be an array", async function () {
    let result = await getMethod();
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
  
  it("response length should be 6", async function () {
    let result = await getMethod();
    assert.lengthOf(result, 6);
  });
});