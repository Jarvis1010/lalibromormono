/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { createStackNavigator, createAppContainer } from "react-navigation";
import IndexView from "./src/views/IndexView";
import BookListView from "./src/views/BookListView";
import ChapterListView from "./src/views/ChapterListView";
import VerseListView from "./src/views/VerseListView";

const LaLibroMormono = createStackNavigator(
  {
    home: { screen: IndexView },
    books: { screen: BookListView },
    chapters: { screen: ChapterListView },
    verses: { screen: VerseListView },
  },
  {
    headerMode: "none",
    initialRouteName: "home",
    mode: "modal",
  }
);

export default createAppContainer(LaLibroMormono);
