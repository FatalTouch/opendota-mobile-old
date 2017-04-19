import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import PlayerSummary from './Tabs/PlayerSummary';
import PlayerMatchList from './Tabs/PlayerMatchList';
import PlayerHeroList from './Tabs/PlayerHeroList';
import PlayerPeerList from './Tabs/PlayerPeerList';


class PlayerProfile extends Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <ScrollableTabBar />}
      >
        <PlayerSummary tabLabel="Overview" accountId={this.props.accountId} />
        <PlayerMatchList tabLabel="Matches" accountId={this.props.accountId} />
        <PlayerHeroList tabLabel="Heroes" accountId={this.props.accountId} />
        <PlayerPeerList tabLabel="Peers" accountId={this.props.accountId} />
      </ScrollableTabView>
    );
  }
}


export default connect()(PlayerProfile);
