import React, { Component } from 'react';
import { View, TextInput, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import search from '../actions/SearchActions';

class PlayerSearch extends Component {

  componentWillMount() {
    this.state = {
      searchInput: ''
    };

    this.searchPlayer = this.searchPlayer.bind(this);
  }

  searchPlayer() {
    this.props.actions.search(this.state.searchInput);
  }

  isLoading() {
    if (this.props.isSearching) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  }

  isEmpty() {
    if (this.props.isSearchEmpty) {
      return <Text>No results found.</Text>;
    }
    return null;
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder={'Search for a Player'}
          returnKeyType={'search'}
          autoCorrect={false}
          value={this.state.searchInput}
          onChange={e => (this.setState({ searchInput: e.nativeEvent.text }))}
          onSubmitEditing={this.searchPlayer}
        />
        {this.isLoading()}
        {this.isEmpty()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { isSearching, isSearchEmpty, searchResults } = state.search;
  return { isSearching, isSearchEmpty, searchResults };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(search, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSearch);
