const handleLogin = async () => {
  const content = await Deno.readFile("login.html");
  return new Response(content, {
    headers: {
      "content-type": "text:html",
    },
  });
};

const handleCredentials = async (request) => {
  // method: GET;
  // const username = request._url.searchParams.get("username");
  // const password = request._url.searchParams.get("password");

  // method: POST;
  const userData = await request.formData();
  const username = userData.get("username");
  const password = userData.get("password");

  console.log(`username >> ${username}`);
  console.log(`password >> ${password}`);
};

const manageCredentials = async (request, allUsers) => {
  const userData = await request.formData();
  allUsers.push(userData);
  console.log(allUsers);

  return new Response("Ridirecting", {
    status: 303,
    headers: {
      "content-type": "text/html",
      location: "success.html",
    },
  });
};

const handleSuccess = async (request) => {
  const content = await Deno.readFile("success.html");
  return new Response(content, {
    headers: {
      "content-type": "text:html",
    },
  });
};

const handler = (request, allUsers) => {
  request._url = new URL(request.url);
  const path = request._url.pathname;

  if (path === "/") {
    return handleLogin();
  }

  if (path === "/credentials" && request.method === "POST") {
    return manageCredentials(request, allUsers);
  }

  if (path === "/success.html") {
    return handleSuccess(request);
  }

  return new Response("<h1>NOT FOUND</h1>", {
    status: 404,
    headers: {
      "content-type": "text:html",
    },
  });
};

const main = () => {
  const allUsers = [];
  Deno.serve({ port: 9000 }, (request) => handler(request, allUsers));
};

main();
