import { createHtml } from "./greet.js";

const handleTime = () => {
  return new Response(new Date().toTimeString());
};

const handleNotFound = () => {
  return new Response("NOT FOUND", {
    status: 404,
  });
};

const handleGreet = async (request) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  const html = createHtml(name);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const handleStyle = async () => {
  const file = await Deno.readFile("style.css");
  return new Response(file, {
    headers: {
      "content-type": "text/css",
    },
  });
};

const paths = {
  "/time": handleTime,
  "/greet": handleGreet,
  "/style.css": handleStyle,
};

const handler = (request) => {
  const url = new URL(request.url);

  if (url.pathname in paths) {
    return paths[url.pathname](request);
  }

  return handleNotFound();
};

Deno.serve({ port: 8050 }, handler);
