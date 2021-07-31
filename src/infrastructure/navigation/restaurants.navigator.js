import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RestaurantScreen} from '../../features/restaurants/screens/restaurant.screen';
import {RestaurantScreenDetail} from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantScreenDetail}
      />
    </RestaurantStack.Navigator>
  );
};
