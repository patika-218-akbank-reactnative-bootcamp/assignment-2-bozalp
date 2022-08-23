import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Main = ({ firstName, text, profileImage, }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <TouchableOpacity>
                <Image source={{ uri:  profileImage  }} style={styles.profile_image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.text_area}>
                <Text style={styles.name_text}>
                    {firstName}
                </Text>
                <Text>
                   {text}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            // flex:1,
            height: 84,
            flexDirection: 'row'
        },
        profile_image:
        {
            width: 64,
            height: 64,
            borderRadius: 32,
            margin: 10,
        },
        text_area:
        {
            width: '100%',
            padding: 12,
            paddingLeft:3
            // backgroundColor:'red',
        },
        name_text:
        {
            fontWeight: '700',
            color: 'black',
            fontSize: 16
        }
    }
);

export default Main;
