import React, { Component } from "react";
import { StyleSheet, View, Image} from 'react-native';
import { createStackNavigator } from "react-navigation";
import IndexHome from "./src/pages/IndexHome";
import Detail from "./src/pages/Detail";

// 头部样式
const navigationOptions = {
  headerTitle:'豆瓣评分',
  headerStyle:{
    backgroundColor:'#00b700',
    height:50
  },
  headerTitleStyle:{
    textAlign:'center',
    color:'#ffffff'
  },
  headerTintColor:'#ffffff'
}

const RootStack = createStackNavigator(
    {
        // 底部导航切换页面
        IndexHome:{
          screen:IndexHome,
          navigationOptions
        },
        // 详情
        Detail:{
          screen:Detail,
          navigationOptions
        }
    },
    {
      // 默认加载页面 
      initialRouteName: "IndexHome"
    }
);

// 可以在继承自 Component 的 App 上有更多的控制
export default class App extends Component {
    render() {
        return <RootStack style={styles.container}/>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#ffffff"
  },

});