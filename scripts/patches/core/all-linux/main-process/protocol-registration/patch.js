"use strict";

const {
  mainBundlePatch,
} = require("../../../../descriptor.js");
const {
  applyLinuxProtocolClientRegistrationPatch,
} = require("../../../../impl/main-process/misc.js");

module.exports = mainBundlePatch({
  id: "linux-protocol-client-registration",
  phase: "main-bundle",
  order: 207,
  ciPolicy: "required-upstream",
  apply: applyLinuxProtocolClientRegistrationPatch,
});
