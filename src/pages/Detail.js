import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            details: {}
        };

        const { params } = this.props.navigation.state;
        this.id = params ? params.id : "";
    }

    componentDidMount() {
        // 获取详情数据
        fetch("https://api.douban.com/v2/movie/subject/" + this.id)
            .then(res => res.json())
            .then(ret => {
                console.log(ret);
                this.setState({
                    details: ret,
                    loaded: true
                });
            });
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text style={styles.loadingTxt}>正在加载电影数据……</Text>
            </View>
        );
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View>
                <View style={styles.detail}>
                    <View style={styles.detailsHd}>
                        {/* 背景 */}
                        <View style={styles.detailsHdBgWrap}>
                            <Image
                                source={{
                                    uri: this.state.details.images.large
                                }}
                                style={styles.filmImgsBg}
                            />
                            <View style={styles.detailsHdBg} />
                        </View>

                        {/* 电影海报&名称 */}
                        <View style={styles.bdInn}>
                            {/* 海报 */}
                            <View style={styles.filmImgs}>
                                <Image
                                    source={{
                                        uri: this.state.details.images.small
                                    }}
                                    style={styles.filmImgs}
                                />
                            </View>
                            {/* 电影信息 */}
                            <View style={styles.filmInfo}>
                                <Text style={styles.name}>
                                    {this.state.details.title}
                                </Text>
                                <Text style={styles.average}>
                                    {this.state.details.rating.average}
                                </Text>
                                <Text style={styles.count}>
                                    {this.state.details.ratings_count}人评价
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* 简介 */}
                    <View style={styles.intro}>
                        <Text style={styles.introTxt}>
                            {this.state.details.summary}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

let { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    loading: {
        paddingTop: 50
    },
    loadingTxt:{
        textAlign:'center'
    },
    detail: {},
    detailsHd: {
        width: width,
        height: 160,
        position: "relative"
    },
    detailsHdBgWrap: {
        width: width,
        height: 160,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "red"
    },
    filmImgsBg: {
        width: width,
        height: 160
    },
    detailsHdBg: {
        width: width,
        height: 160,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)"
    },
    bdInn: {
        width: width,
        position: "absolute",
        top: 50,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: "row"
    },
    filmImgs: {
        width: 100,
        height: 130
    },
    filmInfo: {
        flex: 1,
        paddingLeft: 15,
        color: "#fff"
    },
    name: {
        fontSize: 16,
        paddingTop: 15,
        color: "#fff"
    },
    average: {
        fontSize: 22,
        color: "#fff",
        paddingTop: 8
    },
    count: {
        fontSize: 12,
        color: "#999"
    },
    intro: {
        paddingTop: 40,
        paddingLeft: 10,
        paddingRight: 10
    },
    introTxt: {
        fontSize: 14,
        lineHeight: 22
    }
});

export default Detail;
