import {createStackNavigator} from '@react-navigation/stack'

import {HomeScreen} from '../screens/Home'
import {RegistrationScreen} from '../screens/Registration'

const Stack = createStackNavigator()

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{headerTitle: ''}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
