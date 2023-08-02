import React from 'react'
import { TamaguiProvider } from '@tamagui/core'
import config from './tamagui.config'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <TamaguiProvider config={config}>
            {children}
        </TamaguiProvider>

    )
}

export { Provider };