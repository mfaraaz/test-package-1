import { TamaguiProvider } from "@tamagui/core";
import config from "./tamagui.config";
const Provider = ({ children }) => {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
};
export {
  Provider
};
//# sourceMappingURL=Provider.js.map
