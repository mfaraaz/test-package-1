import { GetProps, Stack, styled } from '@tamagui/core'

export const Circle = styled(Stack, {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100_000_000,
    overflow: 'hidden',
})

export type CircleProps = GetProps<typeof Circle>