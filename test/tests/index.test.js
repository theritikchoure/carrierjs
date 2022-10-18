mocha.setup("bdd");
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
});