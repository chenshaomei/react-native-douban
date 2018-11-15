import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

class My extends Component {
    render() {
        return (
            <View>
                <View style={styles.avatar}>
                    <Avatar
                        large
                        rounded
                        source={{
                            uri:
                                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                        }}
                        activeOpacity={0.7}
                    />
                    <View style={styles.nameWrap}>
                        <Text style={styles.name}>琳达</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        height: 180,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3bbe51"
    },
    nameWrap: {
        paddingTop: 10
    },
    name: {
        fontSize: 20,
        color: "#fff"
    }
});

export default My;
