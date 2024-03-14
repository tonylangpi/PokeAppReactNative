import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountNavigation from './AccountNavigation';
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation';
import { MaterialIcons } from '@expo/vector-icons';
import{ Image } from 'react-native';
const Tab = createBottomTabNavigator();

export default function Navigation(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteNavigation} options={
        {
          tabBarLabel: 'Favorito',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
          headerShown: false
        }
      
      } />
      <Tab.Screen name="Pokedex" component={PokedexNavigation} 
        options={
            {
            tabBarLabel: '',
            tabBarIcon: () => renderPokeball(),
            headerShown: false
            }
        }
      />
      <Tab.Screen name="Account" component={AccountNavigation} 
        options={
            {
            tabBarLabel: 'Cuenta',
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="person" size={size} color={color} />
            ),
            headerShown: false
            }
        }
      />
    </Tab.Navigator>
  )
}

function renderPokeball(){
  return (
    <Image
      source={require('../../assets/pokeball.png')}
      style={{
        width: 60,
        height: 60,
        top: -15
      }}
    />
  )
}