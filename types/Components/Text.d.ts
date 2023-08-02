/// <reference types="react" />
import { GetProps, TextProps as TamaguiTextProps } from '@tamagui/core';
export interface TextProps extends TamaguiTextProps {
    type: 'header' | 'subheader' | 'paragraph';
    bold?: boolean;
    italic?: boolean;
}
export declare const AppText: import("react").FC<TextProps>;
export type AppTextProps = GetProps<typeof AppText>;
//# sourceMappingURL=Text.d.ts.map