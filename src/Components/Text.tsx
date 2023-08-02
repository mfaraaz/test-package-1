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
                fontWeight: '800',
            },
            false: {
                fontWeight: '500',
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
                fontWeight: '500',
            },
            subheader: {
                fontSize: '$6',
                fontWeight: '500',
            },
            paragraph: {
                fontSize: '$4',
                fontWeight: '500',
            },
        },
    },

}) as React.FC<TextProps>

export type AppTextProps = GetProps<typeof AppText>;