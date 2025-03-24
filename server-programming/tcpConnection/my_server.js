const listener = await Deno.listen({ port: 8050 });
let connectionId = 0;

const handleConnection = async (connection, clientId) => {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  while (true) {
    const buf = new Uint8Array(1024);
    const bytesCount = await connection.read(buf);

    if (bytesCount === null) {
      console.log(`Client ${clientId} disconnected`);
      connection.close();
      break;
    }

    const msg = decoder.decode(buf.slice(0, bytesCount)).trim();

    if (msg === "exit") {
      await connection.write(encoder.encode("Bye\n"));
      console.log(`Client ${clientId} exited`);
      connection.close();
      break;
    }

    console.log(`Client ${clientId}: ${msg}`);
    await connection.write(
      encoder.encode(`Server > Client ${clientId}: ${msg}\n`),
    );
  }
};

console.log("Server is running on port 8050...");

for await (const connection of listener) {
  await handleConnection(connection, connectionId++);
}
