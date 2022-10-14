const carrier = require("./carrier");

test('Get should work perfectly', async () => { 
    const data = await carrier.get('https://jsonplaceholder.typicode.com/todos/');
    const datatype = data.response;
    expect(datatype.length).toBe(200);
})