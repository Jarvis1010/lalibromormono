import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import IndexView from './src/views/IndexView';
import BookListView from './src/views/BookListView';
import ChapterListView from './src/views/ChapterListView';
import VerseListView from './src/views/VerseListView';

const LaLibroMormono = StackNavigator(
  {
    home: { screen: IndexView },
    books: { screen: BookListView },
    chapters: { screen: ChapterListView },
    verses: { screen: VerseListView },
  },
  {
    navigationOptions: {
      header: null,
    },
    initialRouteName: 'home',
    mode: 'modal',
  }
);

export default LaLibroMormono;
