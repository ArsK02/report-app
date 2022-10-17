import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

export const MonthItem = (props) => {
    const { year, month, navigation } = props;
    const width = Dimensions.get('window').width;

    const { t, i18n } = useTranslation();
    const [stats, setStats] = useState(null);

    const reportsGetStatsByYearData = useSelector(state => state.reports.reportsGetStatsByYearData);
    const reportsGetStatsByYearLoaded = useSelector(state => state.reports.reportsGetStatsByYearLoaded);

    const onPressToShare = () => {
        console.log('presed');
    }

    const onPressToMounthNavigate = () => {
        navigation.navigate('MonthReportScreen', { year: year, month: month });
    }

    // useEffect(() => {
    //     i18n.on('languageChanged', (lang) => {console.log('123', lang)})
    // }, [])

    useEffect(() => {
        if (reportsGetStatsByYearLoaded) {
            if (reportsGetStatsByYearData.year == year) {
                setStats(null)
                reportsGetStatsByYearData.data.forEach(elem => {
                    if (elem.month == month) {
                        setStats(JSON.parse(JSON.stringify(elem)));
                    } else {
                        setStats(null)
                    }
                });
            } else {
                setStats(null)
            }
        }
    }, [reportsGetStatsByYearLoaded])
    
    return (
        <>
        {!!reportsGetStatsByYearLoaded ?
            <TouchableOpacity
            style={styles.mainPress}
            onPress={onPressToMounthNavigate}
        >
            <View style={styles.item}>
                <Text style={styles.title}>
                    {moment.months(month)}
                </Text>
                <View style={styles.containerLine}>
                    <View style={styles.firstLine} />
                </View>
                <View style={styles.statContainer}>
                    <Icon name='stopwatch-outline' size={24} />
                    <Text style={styles.statTitle}>{t('Hours')}</Text>
                    <Text style={styles.statValue}>{!!stats ? stats.stats.hours : 0}</Text>
                </View>
                <View style={styles.statContainer}>
                    <Icon name='library-outline' size={24} />
                    <Text style={styles.statTitle}>{t('Publications')}</Text>
                    <Text style={styles.statValue}>{!!stats ? stats.stats.publications : 0}</Text>
                </View>
                <View style={styles.statContainer}>
                    <Icon name='play-outline' size={24} />
                    <Text style={styles.statTitle}>{t('Videos')}</Text>
                    <Text style={styles.statValue}>{!!stats ? stats.stats.videos : 0}</Text>
                </View>
                <View style={styles.statContainer}>
                    <Icon name='chatbubbles-outline' size={24} />
                    <Text style={styles.statTitle}>{t('Return Visits')}</Text>
                    <Text style={styles.statValue}>{!!stats ? stats.stats.returnVisits: 0}</Text>
                </View>
                <View style={styles.statContainer}>
                    <Icon name='people-outline' size={24} />
                    <Text style={styles.statTitle}>{t('Bible Studies')}</Text>
                    <Text style={styles.statValue}>{!!stats ? stats.stats.bibleStudies: 0}</Text>
                </View>
                <View style={styles.containerLine}>
                    <View style={styles.secondLine} />
                </View>
                <TouchableOpacity
                    style={styles.buttonShare}
                    onPress={onPressToShare}
                >
                    <Icon name='share-outline' size={24} />
                    <Text style={styles.buttonShareText}>{t('Send Report')}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
        : <></>}
        </>
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