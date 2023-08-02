import { Text as TamaguiText, styled } from "@tamagui/core";
const AppText = styled(TamaguiText, {
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
export {
  AppText
};
//# sourceMappingURL=Text.js.map
