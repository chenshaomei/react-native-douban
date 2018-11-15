
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  View,
  StyleSheet,
  Image,  
} from 'react-native';
 
import Home from '../pages/Home';
import Hot from '../pages/Hot';
import My from '../pages/My';

class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'home'
        };
    }
       
    render (){
        return (
            <View  style={styles.container} >
                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="影视"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require('../assets/img/icon/homepage.png')} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/img/icon/homepage_fill.png')} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                       <Home />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'hot'}
                        title="榜单"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require('../assets/img/icon/hot.png')} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/img/icon/hot_fill.png')} />}
                        onPress={() => this.setState({ selectedTab: 'hot' })}>
                       <Hot />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'my'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require('../assets/img/icon/mine.png')} style={styles.icon}/> }
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/img/icon/mine_fill.png')} />}
                        onPress={() => this.setState({ selectedTab: 'my' })}>
                       <My />
                    </TabNavigator.Item>
    
                </TabNavigator>
            </View>              
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tab: {  
        height: 50,  
        backgroundColor: '#ffffff',  
        alignItems: 'center'  
    },
    tabText: {
        marginTop: 1,
        color: '#888888',
        fontSize: 10
    },
    selectedTabText: {
        marginTop: 1,
        color: '#00b700',
        fontSize: 10
    },
    icon: {
        width: 26,
        height: 26,
        resizeMode: 'stretch',  
        marginTop: 5  
    }
});

export default TabBar;
