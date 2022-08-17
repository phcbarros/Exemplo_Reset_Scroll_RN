import React, {useCallback, useEffect, useState} from 'react'
import {View} from 'react-native'
import {ThemeProvider} from 'styled-components'
import {Inter_400Regular, Inter_600SemiBold} from '@expo-google-fonts/inter'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-gesture-handler'
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from 'react-native-safe-area-context'

import theme from './src/styles/theme'
import Routes from './src/routes'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function loadFonts() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          Inter_400Regular,
          Inter_600SemiBold,
        })
      } catch (error) {
        console.warn(error)
      } finally {
        setAppIsReady(true)
      }
    }

    loadFonts()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView} style={{flex: 1}}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </View>
  )
}
