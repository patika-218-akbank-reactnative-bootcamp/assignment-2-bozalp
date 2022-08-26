import React, { useEffect, useState } from 'react';
import { Alert, Text, View, FlatList, StyleSheet, Image, TextInput } from 'react-native';
import TextArea from './TextArea';

const MessageArea = ({ navigation, route }) => {
    const messages = route.params;

    //gelen verinin mesaj adini alip navigation title esitliyorum.
    useEffect(() => {
        navigation.setOptions(
            {
                title: route.params[1]
            }
        )
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Image source={require("./img/bg.jpg")} style={styles.background_image} />

            <FlatList
                data={messages[0]}
                ListFooterComponent={<View style={{ marginBottom: 140 }} />}
                renderItem={({ item }) =>
                    <View style={styles.messsage_box}>
                        <Text style={styles.message_text} >
                            {item.text}
                        </Text>
                        <Text style={styles.time_text} >
                            {item.dateTime}
                        </Text>
                    </View>
                } />
            <TextArea />
            {/*<Text>
                {messages.map(t => t.text)}
            </Text>
            <Text>
                {messages.map(t => t.dateTime)}
    </Text>*/}
        </View>
    );
}

const styles = StyleSheet.create(
    {
        background_image:
        {
            flex: 1,
            position: 'absolute'
        },
        container:
        {
            flex: 1,
        },
        messsage_box:
        {
            padding: 15,
            margin: 10,
            borderRadius: 10,
            width: '80%',
            backgroundColor: '#DCF8C6',
        },
        message_text:
        {
            fontSize: 16,
            color: 'black',
        },
        time_text:
        {
            fontSize: 10,
            textAlign: 'right'
        }
    }
)

export default MessageArea;
