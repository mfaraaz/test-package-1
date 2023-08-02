import { Text as TamaguiText, styled, GetProps, TextProps as TamaguiTextProps } from '@tamagui/core'

export interface TextProps extends TamaguiTextProps {
    type: 'header' | 'subheader' | 'paragraph';
    bold?: boolean;
    italic?: boolean;
}

export const AppText = styled(TamaguiText, {
    color: 'black',
    variants: {
        bold: {
            true: {
                fontWeight: 'bold',
            },
            false: {
                fontWeight: 'normal',
            },
        },
        italic: {
            true: {
                fontStyle: 'italic',
            },
            false: {
                fontStyle: 'normal',
            },
        },
        type: {
            header: {
                fontSize: '$9',
                fontWeight: 'normal',
            },
            subheader: {
                fontSize: '$6',
                fontWeight: 'normal',
            },
            paragraph: {
                fontSize: '$4',
                fontWeight: 'normal',
            },
        },
    },

}) as React.FC<TextProps>

export type AppTextProps = GetProps<typeof AppText>;