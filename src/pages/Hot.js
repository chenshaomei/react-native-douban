import React, {Component} from "react";
import {ActivityIndicator, FlatList, StyleSheet, Text, View, Image,TouchableOpacity, Dimensions} from "react-native";

const REQUEST_URL = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=20&page_start=';
let pageNo = 1;//当前第几页
let totalPage=5;//总的页数
let itemNo=0;//item的个数
class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
            showFoot:0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
            isRefreshing:false,//下拉控制
        }

        this.navigation = this.props.navigation;
        // 函数需要使用this时，要在这里进行绑定
        this._renderItemView = this._renderItemView.bind(this);
    }

    //网络请求——获取第pageNo页数据
    fetchData(pageNo) {
        //这个是js的访问网络的方法
        let pageStart = pageNo*20-20
        fetch(REQUEST_URL+pageStart)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.subjects;
                let foot = 0;
                if(pageNo>=totalPage){
                    foot = 1;//listView底部显示没有更多数据了
                }

                this.setState({
                    //复制数据源
                    dataArray:this.state.dataArray.concat(data),
                    isLoading: false,
                    showFoot:foot,
                    isRefreshing:false,
                });
                data = null;
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    errorInfo: error
                })
            })
            .done();
    }

    componentDidMount() {
        //请求数据
        this.fetchData( pageNo );
    }

    //加载等待页
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    color='red'
                    size="large"
                />
            </View>
        );
    }

    //加载失败view
    renderErrorView() {
        return (
            <View style={styles.container}>
                <Text>
                    数据加载失败
                </Text>
            </View>
        );
    }

    //返回itemView
    _renderItemView({item}) {
        return (
            <TouchableOpacity 
            style={styles.topicItem}
            onPress={() => {
                this.navigation.navigate('Detail', {
                    id: item.id
                })
            }}
            >
                <Image
                    source={{ uri: item.cover }}
                    style={styles.topicImg}
                />
                <View style={styles.topicContainer}>
                    <View style={styles.topicText}>
                        <Text style={styles.topicTitle}>
                            {item.title
                                ? item.title.length > 5
                                    ? item.title.substr(0, 5) + "..."
                                    : item.title
                                : ""}
                        </Text>
                        <Text style={styles.topicDesc}>
                            电影评分 {item.rate}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderData() {
        return (
            <View>
                <View style={styles.hotListWrap}>
                <FlatList
               
                data={this.state.dataArray}
                renderItem={this._renderItemView}
                ListFooterComponent={this._renderFooter.bind(this)}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={1}
                numColumns={3}
                columnWrapperStyle={{ paddingTop: 15,paddingBottom: 20, borderBottomWidth:0}}
               
            />
                </View>
            </View>
            

        );
    }

    render() {
        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView();
        }
        //加载数据
        return this.renderData();
    }
    _separator(){
        return <View style={{height:1,backgroundColor:'#999999'}}/>;
    }
    _renderFooter(){
        if (this.state.showFoot === 1) {
            return (
                <View style={{height:30,alignItems:'center',justifyContent:'flex-start',}}>
                    <Text style={{color:'#999999',fontSize:14,marginTop:5,marginBottom:5,}}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if(this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator />
                    <Text>正在加载更多数据...</Text>
                </View>
            );
        } else if(this.state.showFoot === 0){
            return (
                <View style={styles.footer}>
                    <Text></Text>
                </View>
            );
        }
    }

    _onEndReached(){
        //如果是正在加载中或没有更多数据了，则返回
        if(this.state.showFoot != 0 ){
            return ;
        }
        //如果当前页大于或等于总页数，那就是到最后一页了，返回
        if((pageNo!=1) && (pageNo>=totalPage)){
            return;
        } else {
            pageNo++;
        }
        //底部显示正在加载更多数据
        this.setState({showFoot:2});
        //获取数据
        this.fetchData( pageNo );
    }
}

var {height,width} =  Dimensions.get('window');
let widthS = (width-15)/3;
const styles = StyleSheet.create({
    hotListWrap:{
        flexDirection: 'row',
        marginLeft:15
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 15,
        color: 'blue',
    },
    footer:{
        flexDirection:'row',
        height:24,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    content: {
        fontSize: 15,
        color: 'black',
    },


    loading: {
        paddingTop: 50
    },
    loadingTxt: {
        textAlign: "center"
    },
    tilwrap: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15
    },
    tilbor: {
        width: 4,
        height: 24,
        backgroundColor: "#00b700"
    },
    tiltxt: {
        flex: 1,
        paddingLeft: 10
    },
    txt: {
        fontSize: 16,
        color: "#333"
    },
    more: {
        width: 100,
        paddingRight: 10
    },
    moreTxt: {
        textAlign: "right",
        color:"#00b700"
    },


    topicItem: {
        width: widthS-15,
        marginRight: 15,
    },
    topicImg: {
        width: widthS-15,
        height: (widthS-15) * 1.34,
    },
    topicContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    topicTitle: {
        fontSize: 16,
        color: "#333"
    },
    topicDesc: {
        fontSize: 12,
        color: "#999",
        marginTop: 3
    },
    topicPrice: {
        fontSize: 14,
        color: "#b4282d"
    }
});

export default Hot;



