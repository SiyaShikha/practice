const inputFile = await Deno.open("./input.txt");
const outputFile = await Deno.open("./output.txt", {
  write: true,
  create: true,
  append: true,
});
// console.log(file);
const readableFile = inputFile.readable;
const writableFile = outputFile.writable;

const transformStream = new TransformStream({
  transform(chunk, controller) {
    const decoder = new TextDecoder();
    const data = decoder.decode(chunk);
    const encoder = new TextEncoder();
    controller.enqueue(encoder.encode(data.toUpperCase()));
  },
});

try {
  await readableFile.pipeThrough(transformStream).pipeTo(writableFile);
} catch (error) {
  console.error("encountered error", error);
}
