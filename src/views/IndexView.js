import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ViewWrapper from '../components/ViewWrapper';
import BreadCrumbsMenu from '../components/BreadCrumbsMenu';
import { ListItem } from 'react-native-elements';
import { books } from '../books/books';
import { fontFamily } from '../styleConstants';
import styled from 'styled-components/native';
import { ViewStyle } from '../styleConstants';

const Thumbnail = styled.Image`
  width:100;
  height:130;
`;

const BookTile = styled.TouchableOpacity`
    max-width:108;
   margin-horizontal:10;
    margin-top:10;
    flex-grow:1;
    flex-basis:100;
`;

const BookList = styled.View`
    margin-top:10;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const crumbsInit = [{ title: 'Sanktaj Libroj' }];

export default class IndexView extends Component {
  handlePress = index => {
    const { navigate } = this.props.navigation;
    navigate('books', {
      breadCrumbs: crumbsInit.concat([{ title: books[index].key }]),
      indexs: [].concat(index),
    });
  };

  render() {
    return (
      <ViewWrapper style={styles.wrapper} StatusBarProps={ViewStyle}>
        <BreadCrumbsMenu breadCrumbs={crumbsInit}>
          <BookList>
            {books.map((book, index) => {
              return (
                <BookTile key={index} onPress={() => this.handlePress(index)}>
                  <Thumbnail source={book.image} />
                </BookTile>
              );
            })}
          </BookList>
        </BreadCrumbsMenu>
      </ViewWrapper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
  },
});
