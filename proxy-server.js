const express = require("express");
const path = require("path");

const getTranslatedServer = (lang) => {
  const targetServerPath = path.join(
    process.cwd(),
    // `ourProyectNameGoesHere/server/${lang}`
    `dist/angular-11-ssr-demo/server`
  );
  const server = require(`${targetServerPath}/main.js`);
  return server.app(lang);
};

function run() {
  const port = process.env.PORT || 4800;

  // Start up the Node server
  const serverES = getTranslatedServer("es");
  console.log(`Node Express server ES is Ready`);
  const serverEN = getTranslatedServer("en");
  console.log(`Node Express server EN is Ready`);

  const server = express();
  server.use("/es", serverES);
  server.use("/en", serverEN);
  server.use("", serverEN);

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();