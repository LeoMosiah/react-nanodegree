import React, { Component} from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AddEntry from './components/AddEntry';
import History from './components/History';
import EntryDetail from './components/EntryDetail'
import { createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { purple, white } from './utils/colors';
import { Constants } from 'expo';

function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createBottomTabNavigator(
    {
        History: History,
        AddEntry: AddEntry,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                return routeName === 'History' ? (
                    <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
                ) : (
                    <FontAwesome name="plus-square" size={30} color={tintColor} />
                );
            },
        }),
        tabBarOptions: {
            showIcon: true,
            activeTintColor: Platform.OS === 'ios' ? purple : white,
            style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? white : purple,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
            },
        },
    }
);

const TabsContainer = createAppContainer(Tabs);

const MainNavigator = createStackNavigator({
  home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
});

export default class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducer)}>
          <View style={{flex: 1}}>
            <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
            <MainNavigator/>
          </View>
        </Provider>
    );
  }
}
