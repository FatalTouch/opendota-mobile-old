import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';

const PeerCard = (props) => {
  const {
    account_id,
    last_played,
    with_win,
    with_games,
    personaname,
    avatar
  } = props.peer;

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
  const winRate = ((with_win / with_games) * 100).toFixed(2);
  return (
    <TouchableWithoutFeedback onPress={() => Actions.playerprofile({ accountId: account_id })}>
      <View style={[containerStyle, props.rowStyle]}>
        <Image style={avatarStyle} source={{ uri: avatar }} />
        <View style={[textContainerStyle, { flex: 1.5 }]}>
          <Text style={heroNameStyle}>{personaname}</Text>
          <Text style={subTextStyle}>{account_id.toString()}</Text>
        </View>
        <View style={[textContainerStyle, { flex: 1.5 }]}>
          <Text style={[mainTextStyle, centerTextStyle]}>{`${winRate}%`}</Text>
          <Text style={[subTextStyle, centerTextStyle]}>{lastPlayed}</Text>
        </View>
        <View style={[textContainerStyle, { flex: 1.5 }]}>
          <Text style={[mainTextStyle, centerTextStyle]}>{with_games.toString()}</Text>
          <Text style={[subTextStyle, centerTextStyle]}>
            <Text style={{ color: '#66bb6a' }}>{`${with_win} - `}</Text>
            <Text style={{ color: '#ff4c4c' }}>{(with_games - with_win).toString()}</Text>
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
    width: 50,
    height: 50,
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

export default PeerCard;
