
import {createStackNavigator} from '@react-navigation/stack'

import Cuenta from '../screens/Account'

const Stack = createStackNavigator()

export default function AccountNavigation(){
  return (
    <Stack.Navigator>
        <Stack.Screen name="Accounts" component={Cuenta} options={{title:"Cuenta", headerTitleAlign:"center"}} />
    </Stack.Navigator>
  )
}
