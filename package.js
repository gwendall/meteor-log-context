Package.describe({
  name: "gwendall:log-context",
  summary: "Log Blaze context with a click",
  version: "0.1.0"
});

Package.on_use(function (api, where) {

  api.use([
    "templating@1.0.11",
    "aldeed:template-extension@3.4.3"
  ], "client");

  api.add_files([
    "lib.html",
    "lib.js",
  ], "client");

});
