import React, {useContext} from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {
  StatusBar,
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import {Search} from '../components/search.component';

import {RestaurantInfoCard} from '../components/restaurant-info-card';
import {RestaurantsContext} from '../../../services/restaurants/restaurant-context';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

// const SearchContainer = styled(View)`
//   padding: ${props => props.theme.space[3]};
// `;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingConatiner = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const FlatListing = styled(FlatList)`
  margin-horizontal: ${props => props.theme.space[2]};
`;

const TouchableOpacityed = styled(TouchableOpacity)`
  margin-bottom: ${props => props.theme.space[3]};
`;

// const RestaurantListContainer = styled(View)`
//   flex: 1;
//   padding: ${props => props.theme.space[3]};
//   background-color: ${props => props.theme.colors.ui.quaternary};
// `;

export const RestaurantScreen = ({navigation}) => {
  const {restaurants, error, isLoading} = useContext(RestaurantsContext);
  console.log(navigation);
  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingConatiner>
            <Loading size={50} animating={true} color={Colors.blue300} />
          </LoadingConatiner>
        )}
        {/* <SearchContainer>
          <Searchbar />
        </SearchContainer> */}
        <Search />
        <FlatListing
          data={restaurants}
          renderItem={({item}) => {
            // console.log(item);
            return (
              <TouchableOpacityed
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: item,
                  })
                }>
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacityed>
            );
          }}
          keyExtractor={item => item.name}
          contentContainerStyle={{padding: 8}}
        />
      </SafeArea>
    </>
  );
};
