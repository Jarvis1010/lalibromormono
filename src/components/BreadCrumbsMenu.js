import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  NativeModules,
  LayoutAnimation,
  Animated,
  Platform,
} from 'react-native';
import { fontFamily } from '../styleConstants';
import { ListItem } from 'react-native-elements';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class BreadCrumbsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      fadeAnim: new Animated.Value(1),
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen(e) {
    if (this.props.breadCrumbs.length > 1) {
      LayoutAnimation.easeInEaseOut();
      Animated.timing(this.state.fadeAnim, {
        toValue: this.state.isOpen ? 1 : 0.5,
        duration: 400,
      }).start();
      this.setState(state => ({ isOpen: !state.isOpen }));
    }
  }

  render() {
    const { children, style = {}, breadCrumbs = [] } = this.props;
    const { isOpen } = this.state;
    const crumbs = breadCrumbs.filter(
      (crumb, index) => (isOpen ? true : index == breadCrumbs.length - 1)
    );
    const finalIndex = crumbs.length - 1;
    return (
      <View style={style}>
        <View style={styles.BreadCrumbsMenu} />
        {crumbs.map((crumb, index) => (
          <View key={index}>
            <ListItem
              containerStyle={styles.crumb}
              hideChevron={true}
              titleStyle={[
                styles.crumbTitle,
                this.state.isOpen ? {} : styles.crumbTitleContainer,
              ]}
              onPress={index == finalIndex ? this.toggleOpen : crumb.navigate}
              underlayColor={'#22282E'}
              title={crumb.title}
            />
          </View>
        ))}

        <Animated.View
          style={{ backgroundColor: 'white', opacity: this.state.fadeAnim }}
        >
          {children}
        </Animated.View>

      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
  BreadCrumbsMenu: {
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#22282E',
  },
  crumb: {
    backgroundColor: '#22282E',
    borderBottomColor: '#22282E',
  },
  crumbTitle: {
    fontFamily,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    borderColor: '#22282E',
    padding: 5,
  },
  crumbTitleContainer: {
    backgroundColor: '#393E43',
    borderRadius: 5,
  },
});
