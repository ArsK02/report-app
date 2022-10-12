import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ContextMenuButton } from '../buttons/ContextMenuButton';
import Icon from 'react-native-vector-icons/Ionicons';


export const MonthReportItem = ({ item }) => {
    console.log('ITEMEE ---------------------->', item);
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.title}
            >
                <Text style={styles.titleText}>{item.day}</Text>
            </View>
            {item.data.map(elem => (
                <View
                    style={styles.item}
                >
                    <Text style={styles.itemText}>{elem.title == "" ? new Date(elem.date).toISOString() : elem.title}</Text>
                    <View style={styles.actionContainer}>
                        <ContextMenuButton >
                            <TouchableOpacity >
                                <Icon name='ellipsis-horizontal-outline' size={24} />
                            </TouchableOpacity> 
                        </ContextMenuButton>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    titleText: {
        fontSize: 18,
        color: '#AAAEB2'
    },
    item: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#EBEEF2'
    },
    actionContainer: {
        marginLeft: 'auto'
    },
    itemText: {
        fontSize: 18
    }
});