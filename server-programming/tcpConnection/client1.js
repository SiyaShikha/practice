const connection = await Deno.connect({ port: 8050 });

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const msgToServer = prompt("enter message : ");
await connection.write(encoder.encode(msgToServer));

const buff = new Uint8Array(1024);
const size = await connection.read(buff);
// stores in buffer and returns used buffer size

const msg = decoder.decode(buff.slice(0, size));
console.log(msg);
