const file = await Deno.open("./file.json", { read: true });

for await (const chunk of file.readable) {
  console.log(chunk);
}