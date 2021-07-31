import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LogoTitle() {
  return <Image style={{width: 50, height: 50}} source={require('')} />;
}

export const HomePage = () => {
  return (
    <>
      <SafeArea>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: props => <LogoTitle {...props} />,
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#00cc00"
                  />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeArea>
    </>
  );
};
