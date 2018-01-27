import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BreadCrumbsMenu from '../components/BreadCrumbsMenu';
import ViewWrapper from '../components/ViewWrapper';
import { ListItem } from 'react-native-elements';
import { fontFamily, darkFontColor } from '../styleConstants';
import { books } from '../books/books';

export default class BookListView extends Component {
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
          {books[i[0]].sections.length == 0 &&
            <View>
              <Text style={{ textAlign: 'center' }}>
                La traduko ne nuntempe estas havebla en ĉi tiu apo
              </Text>
            </View>}
          <FlatList
            style={styles.layout}
            data={books[i[0]].sections}
            renderItem={({ item, index }) => (
              <ListItem
                titleStyle={{ color: darkFontColor, fontFamily }}
                onPress={() =>
                  navigate('chapters', {
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
