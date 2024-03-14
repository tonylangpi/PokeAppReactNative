
import {createStackNavigator} from '@react-navigation/stack'

import PokedexScreen from '../screens/Pokedex'
import ScreenPokemon from '../screens/Pokemon'

const Stack = createStackNavigator()

export default function PokedexNavigation(){
  return (
    <Stack.Navigator>
        <Stack.Screen name="Pokedix" component={PokedexScreen} options={{headerShown:false}} />
        <Stack.Screen name="Pokemon" component={ScreenPokemon} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}
