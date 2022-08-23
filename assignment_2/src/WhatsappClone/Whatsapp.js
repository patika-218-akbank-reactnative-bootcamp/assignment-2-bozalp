import React from 'react';
import { Text, View, FlatList } from 'react-native';

import Messages from './Messages';

const chatList = [
    {
        id: "00001",
        receiver: {
            id: "0",
            firstName: "Ali",
            lastName: "Veli",
            profileImage: "https://i.picsum.photos/id/775/200/200.jpg?hmac=grKwOZhdVb2YUnQWMrxmqbZG34qFi-xpX5p52cqm2io",
        },
        messages: [
            {
                text: "Nabıyon bea",
                dateTime: "16:48",
            }
        ]
    },
    {
        id: "00002",
        receiver: {
            id: "1",
            firstName: "Ahmet",
            lastName: "Mehmet",
            profileImage: "https://i.picsum.photos/id/532/200/200.jpg?hmac=PPwpqfjXOagQmhd_K7H4NXyA4B6svToDi1IbkDW2Eos",
        },
        messages: [
            {
                text: "Günaydın",
                dateTime: "08:24",
            }
        ]
    },
    {
        id: "00003",
        receiver: {
            id: "2",
            firstName: "Ayşe",
            lastName: "Fatma",
            profileImage: "https://i.picsum.photos/id/582/200/200.jpg?hmac=v2wdQGtGl4-2EY3X8qp43Afv4tHA_j5TwoDu6gYz4NE",
        },
        messages: [
            {
                text: "Naber cnm",
                dateTime: "12:14",
            }
        ]
    }
]

const Whatsapp = () => {
    return (
        <View>
            <FlatList
                data={chatList}
                renderItem={({ item }) =>
                    <Messages firstName={item.receiver.firstName} text={item.messages.map(t => t.text)}
                        profileImage={item.receiver.profileImage} />
                } />
        </View>
    );
}

export default Whatsapp;
