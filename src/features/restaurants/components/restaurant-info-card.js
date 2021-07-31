import React from 'react';
import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {Spacer} from '../../../components/spacer/spacer';

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.ui.quaternary};
`;
// margin-bottom: ${props => props.theme.space[3]};
// margin-vertical: ${props => props.theme.space[2]};
// margin: ${props => props.theme.space[2]};

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.ui.quaternary};
`;

const Info = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const Address = styled(Text)`
  font-size: ${props => props.theme.sizes[1]};
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: ${props => props.theme.sizes[1]};
`;

const Rating = styled(View)`
  flex-direction: row;
  margin-top: ${props => props.theme.space[1]};
  margin-bottom: ${props => props.theme.space[1]};
`;
// font-family: ${props => props.theme.fonts.body};

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Something have here',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = 'Kotla Road, India',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const Section = styled.View`
    flex-direction: row;
    align-items: center;
  `;
  const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
  `;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  // console.log(ratingArray);

  return (
    <>
      {/* <View style={{ marginVertical}}></View> */}
      <RestaurantCard>
        <RestaurantCardCover source={{uri: photos[0]}} />
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`star-${placeId}-${i}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="label" style={{color: 'red', fontSize: 10}}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer variant="left.large" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer variant="left.large" />
              <Image style={{width: 15, height: 15}} source={{uri: icon}} />
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
