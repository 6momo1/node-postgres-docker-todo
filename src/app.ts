import server from "./server";

const port = parseInt(process.env.PORT || "4000");

const starter = new server().start(port).then((port:number) => {
  console.log(`Running on port ${port}`);
});

export default starter;
