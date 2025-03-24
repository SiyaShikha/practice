const handleTime = () => {
  return new Response(new Date().toTimeString());
};

const handleNotFound = () => {
  return new Response("NOT FOUND", {
    status: 404,
  });
};

const handleHello = async () => {
  const file = await Deno.readFile("hello.html");
  return new Response(file, {
    headers: {
      "content-type": "text/html",
    },
  });
};

const handler = (request) => {
  const url = new URL(request.url);
  console.log(url);
  console.log(`URL >> ${url}`);
  // console.log(`searchParams >> ${url.searchParams}`);
  // console.log(`pathname >> ${url.pathname}`);
  console.log(request);

  if (url.pathname === "/time") {
    return handleTime();
  }

  // if (url.pathname === "/hello") {
  //   return handleHello();
  // }

  return handleNotFound();
};

Deno.serve({ port: 8050 }, handler);
