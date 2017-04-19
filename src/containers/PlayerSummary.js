import React, { Component } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Image, Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getPlayerSummary from '../actions/SummaryAction';

class PlayerSummary extends Component {

  componentWillMount() {
    this.props.actions.getPlayerSummary(this.props.accountId.toString());
  }

  isFetching() {
    if (this.props.isFetching) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  }

  render() {
    let content = this.isFetching();
    if (this.props.summary.profile) {
      const {
        profile,
        win,
        lose,
        solo_competitive_rank,
        competitive_rank,
        mmr_estimate
      } = this.props.summary;
      const {
        containerStyle,
        avatarStyle,
        rowStyle,
        nameStyle,
        textContainerStyle,
        columnStyle,
        textStyle,
        subTextStyle
      } = styles;

      const {
        avatarfull,
        personaname,
        steamid
      } = profile;

      const winRate = `${((win / (win + lose)) * 100).toFixed(2)}%`;

      content = (<ScrollView style={containerStyle}>
          <View style={rowStyle}>
            <Image style={avatarStyle} source={{ uri: avatarfull }} />
            <View style={columnStyle}>
              <View style={textContainerStyle}>
                <Text style={nameStyle}>{personaname}</Text>
              </View>
              <View style={rowStyle}>
                <TouchableWithoutFeedback
                  onPress={() => Linking.openURL(`https://steamcommunity.com/profiles/${steamid}`)}>
                  <Icon.Button
                    name="steam"
                    size={12}
                    style={{ padding: 5, backgroundColor: '#40402e' }}>
                    <Text style={{ color: '#fff' }}>Steam Profile</Text>
                  </Icon.Button>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <View style={{ marginLeft: 10 }}>
                    <Icon.Button name="star" size={12} style={{ padding: 5, backgroundColor: '#40402e' }}>
                      <Text style={{ color: '#fff' }}>Pin</Text>
                    </Icon.Button>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
          <View style={[rowStyle, { justifyContent: 'center' }]}>
            <View style={textContainerStyle}>
              <Text style={textStyle}>Wins</Text>
              <Text style={[subTextStyle, { color: '#66bb6a' }]}>{win}</Text>
            </View>
            <View style={[textContainerStyle, { marginLeft: 30 }]}>
              <Text style={textStyle}>Losses</Text>
              <Text style={[subTextStyle, { color: '#ff4c4c' }]}>{lose}</Text>
            </View>
            <View style={[textContainerStyle, { marginLeft: 30 }]}>
              <Text style={textStyle}>Winrate</Text>
              <Text style={subTextStyle}>{winRate}</Text>
            </View>
          </View>
          <View style={rowStyle}>
            <View style={textContainerStyle}>
              <Text style={textStyle}>Solo MMR</Text>
              <Text style={subTextStyle}>{solo_competitive_rank || 'N/A'}</Text>
            </View>
            <View style={[textContainerStyle, { marginLeft: 30 }]}>
              <Text style={textStyle}>Party MMR</Text>
              <Text style={subTextStyle}>{competitive_rank || 'N/A'}</Text>
            </View>
          </View>
          <View style={rowStyle}>
            <View style={textContainerStyle}>
              <Text style={textStyle}>Estimated MMR</Text>
              <Text style={subTextStyle}>{mmr_estimate.estimate || 'N/A'}</Text>
            </View>

          </View>
          {this.isFetching()}
        </ScrollView>
      );
    }

    return (
      content
    );
  }
}

const
  mapStateToProps = (state) => {
    const { summary, isFetching, isSummaryEmpty } = state.playerSummary;
    return {
      summary, isFetching, isSummaryEmpty
    };
  };


const
  mapDispatchToProps = dispatch => (
    {
      actions: {
        getPlayerSummary: bindActionCreators(getPlayerSummary, dispatch)
      }
    }
  );

const
  styles = StyleSheet.create({
    containerStyle: {
      padding: 10,
      flex: 1,
      backgroundColor: 'rgb(46, 47, 64)'
    },
    avatarStyle: {
      height: 100,
      width: 100,
      marginRight: 5,
      borderRadius: 50
    },
    rowStyle: {
      justifyContent: 'center',
      marginTop: 20,
      flexDirection: 'row'
    },
    columnStyle: {
      flex: 1
    },
    textContainerStyle: {
      alignItems: 'center',
    },
    nameStyle: {
      color: 'hsla(0,0%,96%,.870588)',
      fontSize: 28
    },
    textStyle: {
      color: 'hsla(0,0%,100%,.54)',
      fontSize: 22
    },
    subTextStyle: {
      color: 'hsla(0,0%,100%,.87))',
      fontSize: 18
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSummary);
