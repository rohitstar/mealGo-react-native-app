import {mockImages, mocks} from './mock';
import camelize from 'camelize';

export const restaurantsRequest = location => {
  //   console.log(mocks[location]);
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('Not Found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({results = []}) => {
  const mappedResults = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map(p => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED TEMPORARILY',
    };
  });
  // console.log(mappedResults);
  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then(restaurantsResponse => {
    // console.log(restaurantsResponse);
  })
  .catch(err => {
    console.log('error');
  });
