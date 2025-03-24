const listener = await Deno.listen({ port: 8050 });
let connectionId = 0;

for await (const connection of listener) {
  handleConnection(connection, connectionId++);
}

function handleConnection(connection, clientId) {
  try {
    const intervalId = setInterval(async () => {
      const buf = new Uint8Array(100);
      const bytesCount = await connection.read(buf);
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      const msg = decoder.decode(buf.slice(0, bytesCount));
      if (msg.trim() === "exit") {
        await connection.write(encoder.encode("Bye\n"));
        connection.close();
        clearInterval(intervalId);
        return;
      }
      console.log(`Client Id: ${clientId})`, msg);
      await connection.write(
        encoder.encode(`Server > Client ${clientId}: ${msg}`),
      );
    }, 200);
  } catch (error) {
    console.error(error);
  }
}
