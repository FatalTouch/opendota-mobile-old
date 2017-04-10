import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, ListView } from 'react-native';
import PlayerCard from '../components/PlayerCard';

class SearchResults extends Component {

  static renderRow(rowData) {
    return <PlayerCard player={rowData} />;
  }

  componentWillMount() {
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }


  render() {
    return (
      <ScrollView>
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.searchResults)}
          renderRow={SearchResults.renderRow}
          initialListSize={15}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { searchResults } = state.search;
  return { searchResults };
};

export default connect(mapStateToProps)(SearchResults);
