import { Text as TamaguiText, styled } from "@tamagui/core";
const AppText = styled(TamaguiText, {
  color: "black",
  variants: {
    bold: {
      true: {
        fontWeight: "bold"
      },
      false: {
        fontWeight: "normal"
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
        fontWeight: "normal"
      },
      subheader: {
        fontSize: "$6",
        fontWeight: "normal"
      },
      paragraph: {
        fontSize: "$4",
        fontWeight: "normal"
      }
    }
  }
});
export {
  AppText
};
//# sourceMappingURL=Text.js.map
