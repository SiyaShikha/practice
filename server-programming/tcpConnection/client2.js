const connection = await Deno.connect({ port: 8050 });

const decoder = new TextDecoder();
const encoder = new TextEncoder();

const msgToServer = prompt("enter message : ");
await connection.write(encoder.encode(msgToServer));

const buff = new Uint8Array(1024);
const size = connection.read(buff);
const msg = decoder.decode(buff.slice(0, size));

console.log(msg);
