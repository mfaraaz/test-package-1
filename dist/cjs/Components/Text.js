"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Text_exports = {};
__export(Text_exports, {
  AppText: () => AppText
});
module.exports = __toCommonJS(Text_exports);
var import_core = require("@tamagui/core");
const AppText = (0, import_core.styled)(import_core.Text, {
  color: "black",
  variants: {
    bold: {
      true: {
        fontWeight: "800"
      },
      false: {
        fontWeight: "500"
      }
    },
    italic: {
      true: {
        fontStyle: "italic"
      },
      false: {
        fontStyle: "normal"
      }
    },
    type: {
      header: {
        fontSize: "$9",
        fontWeight: "500"
      },
      subheader: {
        fontSize: "$6",
        fontWeight: "500"
      },
      paragraph: {
        fontSize: "$4",
        fontWeight: "500"
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppText
});
//# sourceMappingURL=Text.js.map
