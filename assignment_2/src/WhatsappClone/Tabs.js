import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Tabs = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5} style={styles.tab}>
                <Text style={styles.tab_text}> 
                    CHATS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.tab}>
                <Text style={styles.tab_text}> 
                    STATUS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.tab}>
                <Text style={styles.tab_text}> 
                    CALLS
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            width:'100%',
            flexDirection:'row',
            height:48,
            backgroundColor:'#128C7E',
            marginBottom:10,
        },
        tab:
        {
            flex:1,
            paddingTop:10
        },
        tab_text:
        {
            color:'white',
            textAlign:'center',
            fontWeight:'600'
        }
    }
)

export default Tabs;
