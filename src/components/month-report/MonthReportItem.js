import { React, useEffect, useState, useCallback } from 'react';
import { Dimensions, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ContextMenuButton } from '../buttons/ContextMenuButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useTranslation } from "react-i18next"
import { doReportsDelete } from '../../store/reports/reports.effects';

export const MonthReportItem = (props) => {
    const { id, reportFormRef, setReportFromData } = props;

    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();

    const [item, setItem] = useState(null);

    const reportsGetByMonthData = useSelector(state => state.reports.reportsGetByMonthData);
    const reportsGetByMonthLoading = useSelector(state => state.reports.reportsGetByMonthLoading);
    const reportsGetByMonthLoaded = useSelector(state => state.reports.reportsGetByMonthLoaded);

    useEffect(() => {
        if (reportsGetByMonthLoaded) {
            reportsGetByMonthData.data.forEach(report => {
                if (report._id == id) {
                    // realmjs & react-navigation fix JSON.parse(JSON.stringify(report)
                    setItem(JSON.parse(JSON.stringify(report)));
                }
            })
        }
    }, [reportsGetByMonthLoaded])

    const onPressAction = (element) => {
        const action = element.event.split('_')[0];
        const id = element.event.split('_')[1];
        const f = item.data.filter(e => e._id == id)[0];
        if (action == 'edit') {
            setReportFromData(f);
            reportFormRef.current.open();
        } else if (action == 'delete') {
            Alert.alert(i18n.t('Delete item'), i18n.t('Are you sure you want to delete it?'),
                [
                    {
                        text: i18n.t('Cancel'),
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: i18n.t('Yes'),
                        onPress: () => doReportsDelete(dispatch, id)
                    }
                ]
            )
        }
    }
    // console.log(item);
    return (
        <>
            {!!item ?
                <View
                style={styles.container}
            >
                <View
                    style={styles.title}
                >
                    <Text style={styles.titleText}>{item.day}</Text>
                </View>
                { !!item && item?.data.length > 0 ? item.data.map(elem => (
                    <View
                        style={styles.item}
                        key={elem._id}
                    >
                        <Text style={styles.itemText}>{elem.title == "" ? new Date(elem.date).toISOString() : elem.title}</Text>
                        <View style={styles.actionContainer}>
                            <ContextMenuButton onPress={onPressAction} data={elem}>
                                <TouchableOpacity >
                                    <Icon name='ellipsis-horizontal-outline' size={24} />
                                </TouchableOpacity> 
                            </ContextMenuButton>
                        </View>
                    </View>
                )) : <></>}
            </View>
         : <></>}
        </>
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