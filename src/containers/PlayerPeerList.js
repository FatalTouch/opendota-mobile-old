import React, { Component } from 'react';
import { View, ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getPeerList from '../actions/PeerListAction';
import PeerCard from '../components/PeerCard';

class PlayerPeerList extends Component {

  static renderRow(rowData, sectionId, rowId) {
    const bgColors = [{ backgroundColor: 'hsla(0,0%,100%,.019)' }, { backgroundColor: 'rgba(0,0,0,.019)' }];
    return <PeerCard peer={rowData} rowStyle={bgColors[rowId % bgColors.length]} />;
  }

  componentWillMount() {
    this.props.actions.getPeerList(this.props.accountId.toString());
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  isFetching() {
    if (this.props.isFetching) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.peerList)}
          renderRow={PlayerPeerList.renderRow}
          initialListSize={15}
          enableEmptySections
        />
        {this.isFetching()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { peerList, isFetching, isPeerListEmpty } = state.peerList;
  return {
    peerList, isFetching, isPeerListEmpty
  };
};


const mapDispatchToProps = dispatch => (
  {
    actions: {
      getPeerList: bindActionCreators(getPeerList, dispatch)
    }
  }
);

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgb(46, 47, 64)'
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPeerList);
