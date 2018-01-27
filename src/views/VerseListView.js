import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import BreadCrumbsMenu from '../components/BreadCrumbsMenu';
import ViewWrapper from '../components/ViewWrapper';
import { ListItem, Text } from 'react-native-elements';
import { fontFamily, darkFontColor } from '../styleConstants';
import { books } from '../books/books';

export default class VerseListView extends Component {
  render() {
    const { params, key } = this.props.navigation.state;
    const { indexs } = params;
    const [book, section, chapter] = indexs;
    const chapterInfo = books[book].sections[section].chapters[chapter];
    const {
      pretitle,
      title,
      subtitle,
      chapterNum,
      summary,
      verses,
    } = chapterInfo;
    const { goBack } = this.props.navigation;
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
          <ScrollView style={styles.layout}>
            {pretitle && <Text style={styles.pretitle} h4>{pretitle}</Text>}
            {title && <Text style={styles.chapter} h4>{title}</Text>}
            {subtitle && <Text style={styles.chapter} h5>{subtitle}</Text>}
            {chapterNum &&
              <Text style={styles.chapter} h5>
                {`ĈAPITRO ${chapterNum}`}
              </Text>}
            {summary &&
              <Text h5 style={[styles.chapter, styles.summary]}>
                {summary}
              </Text>}
            {verses.map((verse, index) => (
              <Text
                style={[
                  styles.chapter,
                  { textAlign: 'left', marginLeft: 15, marginRight: 15 },
                ]}
                key={index}
              >
                {verse}
              </Text>
            ))}
          </ScrollView>
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
  chapter: {
    fontFamily,
    color: darkFontColor,
    textAlign: 'center',
    marginTop: 10,
    padding: 5,
  },
  pretitle: {
    fontSize: 17,
    color: darkFontColor,
    fontFamily,
    textAlign: 'center',
    marginTop: 10,
  },
  summary: {
    textDecorationLine: 'underline',
  },
});
