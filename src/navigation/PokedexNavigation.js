
import {createStackNavigator} from '@react-navigation/stack'

import PokedexScreen from '../screens/Pokedex'
import ScreenPokemon from '../screens/Pokemon'

const Stack = createStackNavigator()

export default function PokedexNavigation(){
  return (
    <Stack.Navigator>
        <Stack.Screen name="Pokedix" component={PokedexScreen} options={{title:"Pokedex", headerTitleAlign:"center"}} />
        <Stack.Screen name="Pokemon" component={ScreenPokemon} options={{title:"Pokemon", headerTitleAlign:"center"}} />
    </Stack.Navigator>
  )
}
