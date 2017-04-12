import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import moment from 'moment';

import heroList from '../constants/heroes.json';
import gameModeList from '../constants/game_mode.json';

const MatchCard = (props) => {
  const {
    kills,
    deaths,
    assists,
    player_slot,
    hero_id,
    duration,
    radiant_win,
    game_mode,
    start_time
  } = props.match;

  const {
    containerStyle,
    avatarStyle,
    textContainerStyle,
    heroNameStyle,
    subTextStyle,
    mainTextStyle,
    centerTextStyle
  } = styles;

  const matchMinutes = Math.floor(duration / 60);
  const matchSeconds = (duration % 60);
  const heroName = heroList.heroes.find(x => x.id === hero_id).localized_name;
  const matchDuration = `${matchMinutes}:${(matchSeconds < 10 ? `0${matchSeconds}` : matchSeconds)}`;
  const playerTeam = player_slot < 128 ? 'Radiant' : 'Dire';
  const result = ((playerTeam === 'Radiant' && radiant_win) || (playerTeam === 'Dire' && !radiant_win)
    ? 'Win' : 'Loss');
  const resultColor = result === 'Win' ? '#66bb6a' : '#ff4c4c';
  const gameMode = gameModeList[game_mode].name;
  const endTime = moment.unix(start_time + duration).fromNow();

  return (
    <TouchableWithoutFeedback>
      <View style={[containerStyle, props.rowStyle]}>
        <Image style={avatarStyle} source={{ uri: `hero_${hero_id}` }} />
        <View style={[textContainerStyle, { flex: 2 }]}>
          <Text style={heroNameStyle}>{heroName}</Text>
          <Text style={subTextStyle}>{`${playerTeam} - ${gameMode}`}</Text>
        </View>
        <View style={[textContainerStyle, { flex: 1.4 }]}>
          <Text style={[mainTextStyle, centerTextStyle]}>{matchDuration}</Text>
          <Text style={[subTextStyle, centerTextStyle]}>{endTime}</Text>
        </View>
        <View style={[textContainerStyle, { flex: 1 }]}>
          <Text style={[mainTextStyle, centerTextStyle]}>{`${kills}/${deaths}/${assists}`}</Text>
          <Text style={[subTextStyle, centerTextStyle, { color: resultColor }]}>{result}</Text>
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

export default MatchCard;
