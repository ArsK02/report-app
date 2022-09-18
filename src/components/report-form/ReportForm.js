import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { BottomSheetModalComp } from '../BottomSheetModalComp';
import AddReportButton from '../buttons/AddReportButton';
import MainButton from '../buttons/MainButton';
import StopWatchButton from '../buttons/StopWatchButton';
import { THEME } from '../../theme';

const ReportForm = ({ }) => {

    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['85%'], []);

    const handlePresentModalPress = useCallback(() => {
        console.log('123');
        bottomSheetModalRef.current?.present();
    }, []);

    // Report Form Item
    const ReportFormItem = ({ text, icon, date, marginB }) => (
        <>
            {!date ?
                <View style={[styles.reportFormItem, marginB && styles.reportFormItemMargin]}>
                    <Icon name={icon || 'help-outline'} size={24} color={THEME.CONTRAST_COLOR} />
                    <Text style={[styles.reportFormItemText, styles.reportFormItemTextGrow]}>{text || ''}</Text>

                    <TouchableOpacity onPress={() => { }} activeOpacity={0.7}><Icon name='remove' size={26} color={THEME.CONTRAST_COLOR} /></TouchableOpacity>
                    <Text style={[styles.reportFormItemText, styles.reportFormItemTextMarginH]}>0</Text>
                    <TouchableOpacity onPress={() => { }} activeOpacity={0.7}><Icon name='add' size={26} color={THEME.CONTRAST_COLOR} /></TouchableOpacity>
                </View>
                :
                <TouchableOpacity style={[styles.reportFormItem, marginB && styles.reportFormItemMargin]} activeOpacity={0.7}>
                    <Icon name='calendar-outline' size={24} color={THEME.CONTRAST_COLOR} />
                    <Text style={[styles.reportFormItemText, styles.reportFormItemTextGrow]}>Día</Text>
                    <Text style={{ fontSize: 18, lineHeight: 22 }}>20 de niviembre</Text>
                </TouchableOpacity>
            }
        </>
    );

    return (
        <>
            <AddReportButton onPress={handlePresentModalPress} />
            <BottomSheetModalComp
                innerRef={bottomSheetModalRef}
                snapPoints={snapPoints}
                containerStyle={styles.sheetContainer}
            >
                <View>
                    <TextInput
                        style={styles.reportTitleinput}
                        onChangeText={() => { }}
                        placeholder='Añade el titulo...'
                    />
                    <ReportFormItem date marginB />
                    <ReportFormItem
                        text='Horas'
                        icon='time-outline'
                    />
                    <ReportFormItem
                        text='Minutos'
                        icon='time-outline'
                        marginB
                    />
                    <ReportFormItem
                        text='Publicaciones'
                        icon='library-outline'
                    />
                    <ReportFormItem
                        text='Video'
                        icon='play-outline'
                        marginB
                    />
                    <ReportFormItem
                        text='Revisitas'
                        icon='chatbubbles-outline'
                    />
                    <ReportFormItem
                        text='Cursos biblicos'
                        icon='people-outline'
                        marginB
                    />
                </View>
                <View style={styles.sheetButtonsContainer}>
                    <StopWatchButton buttonStyle={styles.stopWatchButton} />
                    <MainButton />
                </View>
            </BottomSheetModalComp>
        </>
    )
}

export default ReportForm

const styles = StyleSheet.create({
    sheetContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 45,
    },
    reportTitleinput: {
        marginBottom: 25,
        fontSize: 24,
        lineHeight: 30,
    },
    reportFormItem: {
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 24,
        backgroundColor: THEME.SECONDARY_BACKGROUND_COLOR,
        borderRadius: 8,
    },
    reportFormItemMargin: {
        marginBottom: 35,
    },
    reportFormItemText: {
        marginHorizontal: 15,
        fontSize: 18,
        lineHeight: 22,
    },
    reportFormItemTextGrow: {
        flexGrow: 1,
    },
    reportFormItemTextMarginH: {
        marginHorizontal: 20,
    },
    sheetButtonsContainer: {
        flexDirection: 'row',
    },
    stopWatchButton: {
        marginRight: 15,
    },
})