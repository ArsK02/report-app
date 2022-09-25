import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useFormik } from 'formik';
import moment from 'moment/min/moment-with-locales';

import { BottomSheetModalComp } from '../BottomSheetModalComp';
import AddReportButton from '../buttons/AddReportButton';
import MainButton from '../buttons/MainButton';
import StopWatchButton from '../buttons/StopWatchButton';
import { THEME } from '../../theme';
import { ReportSchema } from '../form-validation/validation';

const ReportForm = ({ }) => {
    moment.locale('en')

    // FORM
    const {
        handleChange,
        setFieldValue,
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched,
        isValid
    } = useFormik({
        validationSchema: ReportSchema,
        initialValues: { title: '', date: moment().format('DD MMMM'), hours: 0, minutes: 0, publications: 0, videos: 0, returnVisits: 0, bibleStudies: 0 },
        onSubmit: values => {
            console.log('Form values: ', values);
        }
    });

    useEffect(() => {
        console.log('values -> ', values)
    }, [values]);

    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['85%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    // Report Form Item
    const ReportFormItem = ({ text, icon, date, marginB, value, onChange, error, minutes }) => (
        <>
            {!date ?
                <View style={[styles.reportFormItem, marginB && styles.reportFormItemMargin]}>
                    <Icon name={icon || 'help-outline'} size={24} color={THEME.CONTRAST_COLOR} />
                    <Text style={[styles.reportFormItemText, styles.reportFormItemTextGrow]}>{text || ''}</Text>

                    <TouchableOpacity onPress={() => onChange(minutes ? value-5 : value-1)} activeOpacity={0.7} disabled={!value}>
                        <Icon name='remove' size={26} color={!value ? THEME.SECONDARY_TEXT_COLOR : THEME.CONTRAST_COLOR} />
                    </TouchableOpacity>
                    <Text style={[styles.reportFormItemText, styles.reportFormItemTextMarginH]}>{value || '0'}</Text>
                    <TouchableOpacity onPress={() => onChange(minutes ? value+5 : value+1)} activeOpacity={0.7} disabled={error}>
                        <Icon name='add' size={26} color={error ? THEME.SECONDARY_TEXT_COLOR : THEME.CONTRAST_COLOR} />
                    </TouchableOpacity>
                </View>
                :
                <TouchableOpacity style={[styles.reportFormItem, marginB && styles.reportFormItemMargin]} activeOpacity={0.7}>
                    <Icon name='calendar-outline' size={24} color={THEME.CONTRAST_COLOR} />
                    <Text style={[styles.reportFormItemText, styles.reportFormItemTextGrow]}>Día</Text>
                    <Text style={{ fontSize: 18, lineHeight: 22 }}>{value || ''}</Text>
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
                        onChangeText={handleChange('title')}
                        value={values.title}
                        placeholder='Añade el titulo...'
                    />
                    <ReportFormItem
                        date
                        onChange={handleChange('date')}
                        value={values.date}
                        marginB
                    />
                    <ReportFormItem
                        text='Horas'
                        icon='time-outline'
                        onChange={v => setFieldValue('hours', v)}
                        error={errors.hours}
                        value={values.hours}
                    />
                    <ReportFormItem
                        text='Minutos'
                        icon='time-outline'
                        onChange={v => setFieldValue('minutes', v)}
                        error={errors.minutes}
                        value={values.minutes}
                        marginB
                        minutes
                    />
                    <ReportFormItem
                        text='Publicaciones'
                        icon='library-outline'
                        onChange={v => setFieldValue('publications', v)}
                        error={errors.publications}
                        value={values.publications}
                    />
                    <ReportFormItem
                        text='Video'
                        icon='play-outline'
                        onChange={v => setFieldValue('videos', v)}
                        error={errors.videos}
                        value={values.videos}
                        marginB
                    />
                    <ReportFormItem
                        text='Revisitas'
                        icon='chatbubbles-outline'
                        onChange={v => setFieldValue('returnVisits', v)}
                        error={errors.returnVisits}
                        value={values.returnVisits}
                    />
                    <ReportFormItem
                        text='Cursos biblicos'
                        icon='people-outline'
                        onChange={v => setFieldValue('bibleStudies', v)}
                        error={errors.bibleStudies}
                        value={values.bibleStudies}
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