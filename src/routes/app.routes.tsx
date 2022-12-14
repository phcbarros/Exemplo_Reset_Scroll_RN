import {createStackNavigator} from '@react-navigation/stack'

import {HomeScreen} from '../screens/Home'
import {RegistrationScreen} from '../screens/Registration'
import {RegistrationWorkingScreen} from '../screens/RegistrationWorking'
import {ReviewScreen} from '../screens/Review'
import {SuccessScreen} from '../screens/Success'

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
        <Stack.Screen
          name="RegistrationWorking"
          component={RegistrationWorkingScreen}
        />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
