import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const MounthItem = (props) => {
    const { index, data, navigation } = props;
    console.log(data);
    const width = Dimensions.get('window').width;

    const onPressToShare = () => {
        console.log('presed');
    }

    const onPressToMounthNavigate = () => {
        navigation.navigate('MounthReportScreen');
    }
    return (
        <TouchableOpacity
            style={styles.mainPress}
            onPress={onPressToMounthNavigate}
        >
            <View style={styles.item}>
                <Text style={styles.title}>
                    {data.title}
                </Text>
                <View style={styles.containerLine}>
                    <View style={styles.firstLine} />
                </View>
                <View style={styles.statContainer}>
                    <Icon name='stopwatch-outline' size={24} />
                    <Text style={styles.statTitle}>Horas</Text>
                    <Text style={styles.statValue}>20</Text>
                </View>
                <View style={styles.statContainer}>
                    <Icon name='book-outline' size={24} />
                    <Text style={styles.statTitle}>Publicaciones</Text>
                    <Text style={styles.statValue}>20</Text>
                </View>
                <View style={styles.statContainer}>
                    <Icon name='videocam-outline' size={24} />
                    <Text style={styles.statTitle}>Videos</Text>
                    <Text style={styles.statValue}>1</Text>
                </View>
                <View style={styles.statContainer}>
                    <Icon name='help-outline' size={24} />
                    <Text style={styles.statTitle}>Revisitas</Text>
                    <Text style={styles.statValue}>10</Text>
                </View>
                <View style={styles.statContainer}>
                    <Icon name='people-circle-outline' size={24} />
                    <Text style={styles.statTitle}>Estudios</Text>
                    <Text style={styles.statValue}>0</Text>
                </View>
                <View style={styles.containerLine}>
                    <View style={styles.secondLine} />
                </View>
                <TouchableOpacity
                    style={styles.buttonShare}
                    onPress={onPressToShare}
                >
                    <Icon name='share-outline' size={24} />
                    <Text style={styles.buttonShareText}>Enviar informe</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainPress: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 30,
        marginLeft: '2.5%',
        marginRight: '2.5%',
        backgroundColor: 'white',
    },
    title:{
        fontSize: 49,
        paddingBottom: 20
    },
    containerLine: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstLine: {
        marginBottom: 20,
        flex: 1,
        height: 1,
        backgroundColor: '#EBEEF2'
    },
    secondLine: {
        marginTop: 20,
        marginBottom: 10,
        flex: 1,
        height: 1,
        backgroundColor: '#EBEEF2'
    },
    statContainer: {
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    statTitle: {
        flex: 1,
        paddingLeft: 15,
        fontSize: 16
    },
    statValue: {
        flex: 1,
        paddingLeft: 5,
        textAlign: 'right',
        fontSize: 16
    },
    buttonShare: {
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonShareText: {
        flex: 1,
        paddingLeft: 15,
        fontSize: 16
    }
});