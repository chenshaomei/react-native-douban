/**
 * 底部tab导航路由页面
 */

import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { Header } from "react-native-elements";
import { TabNavigator, TabBarBottom } from 'react-navigation'; 
import Home from "./Home";
import Hot from "./Hot";
import My from "./My";


export default TabNavigator(
  // 底部导航数据（组件、名称）
  {
    Home: { 
      screen: Home,
      navigationOptions: () => ({
        title: `影视`
      }),
     },
    Hot: { 
      screen: Hot,
      navigationOptions: () => ({
        title: `榜单`
      }),
     },
    My: {
       screen: My ,
       navigationOptions: () => ({
        title: `我的`
      }),
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // 图标
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconImg;

        if (routeName === 'Home') {
          iconImg = focused ? require('../assets/img/icon/homepage_fill.png'): require('../assets/img/icon/homepage.png')
        } else if (routeName === 'Hot') {
          iconImg = focused ? require('../assets/img/icon/hot_fill.png'): require('../assets/img/icon/hot.png')
        } else if (routeName === 'My'){
          iconImg = focused ? require('../assets/img/icon/mine_fill.png'): require('../assets/img/icon/mine.png')
        }
        return <Image source={iconImg} style={styles.icon}/>
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#00b700',
      inactiveTintColor: '#999',
      labelStyle: {
        fontSize: 12,
      },
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const styles = StyleSheet.create({
  icon: {
        width: 26,
        height: 26,
        resizeMode: 'stretch',  
        marginTop: 5  
    }
});