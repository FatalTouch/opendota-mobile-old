import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import moment from 'moment';

import heroList from '../constants/heroes.json';

const HeroCard = (props) => {
  const {
    games,
    win,
    last_played,
  } = props.hero;

  const {
    containerStyle,
    avatarStyle,
    textContainerStyle,
    heroNameStyle,
    subTextStyle,
    mainTextStyle,
    centerTextStyle
  } = styles;

  const lastPlayed = moment.unix(last_played).fromNow();
  const winRate = ((win / (games || 1)) * 100).toFixed(2);
  const hero_id = parseInt(props.hero.hero_id, 10);
  const heroName = heroList.heroes.find(x => x.id === hero_id).localized_name;

  return (
    <TouchableWithoutFeedback>
      <View style={[containerStyle, props.rowStyle]}>
        <Image style={avatarStyle} source={{ uri: `hero_${hero_id}` }} />
        <View style={[textContainerStyle, { flex: 1.5 }]}>
          <Text style={heroNameStyle}>{heroName}</Text>
          <Text style={subTextStyle}>{lastPlayed}</Text>
        </View>
        <View style={[textContainerStyle, { flex: 1.5 }]}>
          <Text style={[mainTextStyle, centerTextStyle]}>{`${winRate}%`}</Text>
        </View>
        <View style={[textContainerStyle, { flex: 1.5 }]}>
          <Text style={[mainTextStyle, centerTextStyle]}>{games.toString()}</Text>
          <Text style={[subTextStyle, centerTextStyle]}>
            <Text style={{ color: '#66bb6a' }}>{`${win} - `}</Text>
            <Text style={{ color: '#ff4c4c' }}>{games - win}</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'hsla(0,0%,100%,.019)',
    borderTopWidth: 1,
    borderColor: 'hsla(0,0%,100%,.06)'
  },
  avatarStyle: {
    width: 52,
    height: 29,
    marginRight: 5,
    alignSelf: 'center'
  },
  textContainerStyle: {
    flexDirection: 'column',
    alignSelf: 'center'
  },
  heroNameStyle: {
    fontSize: 13,
    color: 'rgb(102,187,255)'
  },
  mainTextStyle: {
    fontSize: 12,
    color: 'rgb(245,245,245)'
  },
  subTextStyle: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  centerTextStyle: {
    alignSelf: 'center'
  }
});

export default HeroCard;
