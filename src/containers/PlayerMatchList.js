import React, { Component } from 'react';
import { ScrollView, ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getMatchList from '../actions/MatchListActions';
import MatchCard from '../components/MatchCard';

class PlayerMatches extends Component {

  static renderRow(rowData, sectionId, rowId) {
    const bgColors = [{ backgroundColor: 'hsla(0,0%,100%,.019)' }, { backgroundColor: 'rgba(0,0,0,.019)' }];
    return <MatchCard match={rowData} rowStyle={bgColors[rowId % bgColors.length]} />;
  }

  componentWillMount() {
    this.props.actions.getMatchList(this.props.accountId.toString());
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
      <ScrollView style={styles.containerStyle}>
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.matchList)}
          renderRow={PlayerMatches.renderRow}
          initialListSize={15}
          enableEmptySections
        />
        {this.isFetching()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { matchList, isFetching, isMatchListEmpty } = state.matchList;
  return {
    matchList, isFetching, isMatchListEmpty
  };
};


const mapDispatchToProps = dispatch => (
  {
    actions: {
      getMatchList: bindActionCreators(getMatchList, dispatch)
    }
  }
);

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgb(46, 47, 64)'
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerMatches);