import React, { Component } from 'react';
import { View, ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getHeroList from '../../../actions/HeroListAction';
import HeroCard from '../../../components/HeroCard';

class PlayerHeroList extends Component {

  static renderRow(rowData, sectionId, rowId) {
    const bgColors = [{ backgroundColor: 'hsla(0,0%,100%,.019)' }, { backgroundColor: 'rgba(0,0,0,.019)' }];
    return <HeroCard hero={rowData} rowStyle={bgColors[rowId % bgColors.length]} />;
  }

  componentWillMount() {
    this.props.actions.getHeroList(this.props.accountId.toString());
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
          dataSource={this.ds.cloneWithRows(this.props.heroList)}
          renderRow={PlayerHeroList.renderRow}
          initialListSize={15}
          enableEmptySections
        />
        {this.isFetching()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { heroList, isFetching, isHeroListEmpty } = state.heroList;
  return {
    heroList, isFetching, isHeroListEmpty
  };
};


const mapDispatchToProps = dispatch => (
  {
    actions: {
      getHeroList: bindActionCreators(getHeroList, dispatch)
    }
  }
);

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgb(46, 47, 64)'
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHeroList);
