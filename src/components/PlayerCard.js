import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

const PlayerCard = (props) => {
  const { personaname, avatarfull, account_id } = props.player;
  const { containerStyle, avatarStyle, textContainerStyle } = styles;
  return (
    <TouchableWithoutFeedback onPress={() => Actions.playerprofile({ accountId: account_id })}>
      <View style={containerStyle}>
        <Image style={avatarStyle} source={{ uri: avatarfull }} />
        <View style={textContainerStyle}>
          <Text>{personaname}</Text>
          <Text>{account_id.toString()}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    flexDirection: 'row'
  },
  avatarStyle: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  textContainerStyle: {
    flexDirection: 'column'
  }
};

export default PlayerCard;
