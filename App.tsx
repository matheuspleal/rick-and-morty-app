import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_800ExtraBold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import theme from './src/global/styles/theme'
import { Dashboard } from './src/screens/Dashboard'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_800ExtraBold,
    Inter_900Black
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

