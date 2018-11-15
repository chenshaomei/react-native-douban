import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Button,
    ScrollView
} from "react-native";
import { StackNavigator,createStackNavigator } from "react-navigation";
import { Header } from "react-native-elements";
import MoviesList from "../components/MoviesList";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <ScrollView contentContainerStyle={styles.contentContainer}>

                <MoviesList 
                    title="近期上映"
                    url="https://api.douban.com/v2/movie/in_theaters"
                    navigation={this.props.navigation}
                    onPressFn={(id) => {
                        this.props.navigation.navigate('Detail', {
                            id: id
                        })
                    }}
                />

                <View style={styles.listWrap}>
                    <MoviesList 
                        title="即将上映"
                        url="http://api.douban.com/v2/movie/coming_soon"
                        navigation={this.props.navigation}
                        onPressFn={(id)=>{
                            this.props.navigation.navigate('Detail', {
                                id: id
                            })
                        }}
                    />
                </View>

                 <View style={styles.listWrap}>
                    <MoviesList 
                        title="豆瓣电影Top250"
                        url="http://api.douban.com/v2/movie/top250"
                        navigation={this.props.navigation}
                        onPressFn={(id) => {
                            this.props.navigation.navigate('Detail', {
                                id: id
                            })
                        }}
                    />
                </View>
                </ScrollView>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    contentContainer:{
        paddingBottom: 50
    },
    listWrap: {
        paddingTop: 30
    }
});

export default Home;

