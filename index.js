const Client = require("./classes/Client");
const Worker = require("./classes/Worker");

const client = new Client("Juan", 30, "12345678", 100);
console.log(client.greet());
console.log('\n');
const worker = new Worker("Pedro", 19, "87645223", 30);
console.log(worker.greet());