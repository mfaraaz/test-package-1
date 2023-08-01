import React from "react";
import { TamaguiProvider } from "@tamagui/core";
import config from "./tamagui.config";
const Provider = ({ children }) => {
  return /* @__PURE__ */ React.createElement(TamaguiProvider, { config }, children);
};
export {
  Provider
};
//# sourceMappingURL=Provider.js.map
