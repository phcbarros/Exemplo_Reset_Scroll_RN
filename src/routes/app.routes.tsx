import {createStackNavigator} from '@react-navigation/stack'

import {HomeScreen} from '../screens/Home'

export type AppParamsList = {
  Home: undefined
}

const Stack = createStackNavigator<AppParamsList>()

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
