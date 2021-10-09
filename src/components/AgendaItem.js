import React, { useCallback } from 'react';
import { View, Text, Alert, TouchableOpacity, Button, StyleSheet } from 'react-native';


export const AgendaItem = ({ item }) => {
    const buttonPressed = useCallback(() => {
        Alert.alert('Show me more');
    }, []);

    const itemPressed = useCallback(() => {
        Alert.alert(item.title);
    }, []);

    if (!!item) {
        return (
            <View>
            </View>
        );
    }

    return (
        <TouchableOpacity onPress={itemPressed} style={styles.item} testID={testIDs.agenda.ITEM}>
            <View>
                <Text style={styles.itemHourText}>{item.hour}</Text>
                <Text style={styles.itemDurationText}>{item.duration}</Text>
            </View>
            <Text style={styles.itemTitleText}>{item.title}</Text>
            <View style={styles.itemButtonContainer}>
                <Button color={'grey'} title={'Info'} onPress={buttonPressed} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row'
      },
      itemHourText: {
        color: 'black'
      },
      itemDurationText: {
        color: 'grey',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4
      },
      itemTitleText: {
        color: 'black',
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 16
      },
      itemButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
      },
});