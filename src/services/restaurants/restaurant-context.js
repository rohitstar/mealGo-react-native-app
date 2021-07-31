import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from 'react';

import {restaurantsRequest, restaurantsTransform} from './restaurant-service';
import {LocationContext} from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retrieveRestaurants = loc => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then(results => {
          setRestaurants(results);
          setIsLoading(false);
          // console.log(results);
        })
        .catch(err => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;

      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};