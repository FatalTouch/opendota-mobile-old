import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import PlayerSummary from './PlayerSummary';
import PlayerMatchList from './PlayerMatchList';

class PlayerProfile extends Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <ScrollableTabBar />}
      >
        <PlayerSummary tabLabel="Summary" accountId={this.props.accountId} />
        <PlayerMatchList tabLabel="Matches" accountId={this.props.accountId} />
        <PlayerMatchList tabLabel="Matches" accountId={this.props.accountId} />
        <PlayerMatchList tabLabel="Matches" accountId={this.props.accountId} />
        <PlayerMatchList tabLabel="Matches" accountId={this.props.accountId} />
      </ScrollableTabView>
    );
  }
}


export default connect()(PlayerProfile);
