import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BreadCrumbsMenu from '../components/BreadCrumbsMenu';
import ViewWrapper from '../components/ViewWrapper';
import { ListItem } from 'react-native-elements';
import { fontFamily, darkFontColor } from '../styleConstants';
import { books } from '../books/books';

export default class ChapterListView extends Component {
  render() {
    const { params, key } = this.props.navigation.state;
    const { indexs: i } = params;
    const { goBack, navigate } = this.props.navigation;
    const breadCrumbs = params.breadCrumbs.map((crumb, index) => {
      return index == params.breadCrumbs.length - 2
        ? {
            ...crumb,
            navigate() {
              goBack(key);
            },
          }
        : crumb;
    });
    return (
      <ViewWrapper
        style={styles.wrapper}
        StatusBarProps={{
          height: 0,
          barStyle: 'light-content',
        }}
      >
        <BreadCrumbsMenu breadCrumbs={breadCrumbs}>
          <FlatList
            style={styles.layout}
            data={books[i[0]].sections[i[1]].chapters}
            renderItem={({ item, index }) => (
              <ListItem
                titleStyle={{ color: darkFontColor, fontFamily }}
                onPress={() =>
                  navigate('verses', {
                    breadCrumbs: breadCrumbs.concat([{ title: item.key }]),
                    indexs: i.concat(index),
                  })}
                key={item.key}
                title={item.key}
              />
            )}
          />
        </BreadCrumbsMenu>
      </ViewWrapper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  layout: {
    paddingBottom: 140,
    marginBottom: 140,
  },
});
