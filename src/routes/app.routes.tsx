import {createStackNavigator} from '@react-navigation/stack'

import {HomeScreen} from '../screens/Home'
import {RegistrationScreen} from '../screens/Registration'
import {ReviewScreen} from '../screens/Review'

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
        <Stack.Screen name="Review" component={ReviewScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
