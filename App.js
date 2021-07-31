import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurant-context';
import {LocationContextProvider} from './src/services/location/location.context';
import {AppNavigator} from './src/infrastructure/navigation/app.navigator';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <AppNavigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
