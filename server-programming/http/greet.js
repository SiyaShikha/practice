export const createHtml = (name) => {
  return `
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Welcome ${name || "buddy"}!!!</h1>
  </body>
</html>`;
};
