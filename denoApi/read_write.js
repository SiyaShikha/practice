import dress from "../json/dress.json" with { type: "json" };

const read = () => {
  // const path = "./text.txt";
  // const path = "../json/dress.json";
  // const path = "../exponent.js";
  const path = "./text.csv";

  console.log(Deno.readTextFileSync(path));
};

const write = () => {
  const path = "./text.txt";
  const str = "\nappend using deno write function\n";
  console.log(
    Deno.writeTextFileSync(path, str, { append: true }),
    Deno.writeTextFileSync(path, JSON.stringify(dress), { append: true }),
  );
};

read();
write();
