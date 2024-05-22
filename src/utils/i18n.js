const { join } = require("path");
const i18n = require("i18n");
const { langs } = require("../config");

i18n.configure({
  locales: [
    "en",
    "vi",
  ],
  directory: join(__dirname, "..", "locales"),
  defaultLocale: "vi",
  retryInDefaultLocale: true,
  objectNotation: true,
  register: global,
})

i18n.setLocale(langs);


module.exports = i18n;