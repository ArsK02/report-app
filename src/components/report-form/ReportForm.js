import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState, useImperativeHandle, forwardRef } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { ReportsRealmContext } from '../../store/reports/models/index';
import { doReportsGetAppData, doReportsCreate, doReportsEdit } from '../../store/reports/reports.effects';

import { BottomSheetModalComp } from '../BottomSheetModalComp';
import AddReportButton from '../buttons/AddReportButton';
import MainButton from '../buttons/MainButton';
import StopWatchButton from '../buttons/StopWatchButton';
import { THEME } from '../../theme';
import { ReportSchema } from '../form-validation/validation';
import DatePicker from 'react-native-date-picker';
import { useTranslation } from "react-i18next";

const { useRealm } = ReportsRealmContext;

const ReportForm = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const realm = useRealm();

    const { t, i18n } = useTranslation();

    const { reportData = null, addButton = true } = props;

    const formMode = reportData == null ? 'create' : 'edit';
    const [datePicker, setDatePicker] = useState(new Date())
    const [openPicker, setOpenPicker] = useState(false)

    const reportsCreateData = useSelector(state => state.reports.reportsCreateData);
    const reportsCreateLoading = useSelector(state => state.reports.reportsCreateLoading);
    const reportsCreateLoaded = useSelector(state => state.reports.reportsCreateLoaded); 

    const reportsEditData = useSelector(state => state.reports.reportsEditData);
    const reportsEditLoading = useSelector(state => state.reports.reportsEditLoading);
    const reportsEditLoaded = useSelector(state => state.reports.reportsEditLoaded);

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
        initialValues: {
            title: '',
            date: new Date().toISOString(),
            hours: 0,
            minutes: 0,
            publications: 0,
            videos: 0,
            returnVisits: 0,
            bibleStudies: 0 },
        onSubmit: values => {
            if (formMode == 'edit') {
                doReportsEdit(dispatch, realm, {id: reportData._id, value: values});
            } else {
                const now = new Date();
                if (now.getTime() >= new Date(values.date).getTime()) {
                    doReportsCreate(dispatch, realm, values);
                }
            }
        }
    });

    useEffect(() => {
        if (formMode == 'edit') {
            setFieldValue('title', reportData.title);
            setFieldValue('date', new Date(reportData.date).toISOString());
            setFieldValue('hours', reportData.hours);
            setFieldValue('minutes', reportData.minutes);
            setFieldValue('publications', reportData.publications);
            setFieldValue('returnVisits', reportData.returnVisits);
            setFieldValue('bibleStudies', reportData.bibleStudies);
        }
    }, [formMode, reportData])


    useEffect(() => {
        if (reportsCreateLoaded || reportsEditLoaded) {
            // form restore
            bottomSheetModalRef.current.close();
        }
    }, [reportsCreateLoaded, reportsEditLoaded])

    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['85%'], []);

    const handlePresentModalPress = useCallback(() => {
        ReportSchema.fields.date.max(new Date())
        setFieldValue('date', new Date().toISOString());
        bottomSheetModalRef.current?.present();
        
    }, []);

    const open = () => {
        bottomSheetModalRef.current?.present();
    }

    const close = () => {
        bottomSheetModalRef.current.close();
    }

    useImperativeHandle(ref, () => ({
        open: open,
        close: close
    }));

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
                    <TouchableOpacity onPress={() => onChange(minutes ? value+5 : value+1)} activeOpacity={0.7} >
                        <Icon name='add' size={26} />
                    </TouchableOpacity>
                </View>
                :
                <TouchableOpacity onPress={() => setOpenPicker(true)} style={[styles.reportFormItem, marginB && styles.reportFormItemMargin]} activeOpacity={0.7}>
                    <Icon name='calendar-outline' size={24} color={THEME.CONTRAST_COLOR} />
                    <Text style={[styles.reportFormItemText, styles.reportFormItemTextGrow]}>{i18n.t('Day')}</Text>
                    <Text style={{ fontSize: 18, lineHeight: 22 }}>{value || ''}</Text>
                </TouchableOpacity>
            }
        </>
    );

    return (
        <>
            {addButton == true ?
            <AddReportButton onPress={handlePresentModalPress} />
            : <></>
            }
            
            
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
                        placeholder={`${i18n.t('Add a title')}...`}
                    />
                    <ReportFormItem
                        date
                        onChange={handleChange('date')}
                        value={moment(values.date).format("MMMM DD")}
                        marginB
                    />
                    <ReportFormItem
                        text={i18n.t('Hours')}
                        icon='time-outline'
                        onChange={v => setFieldValue('hours', v)}
                        error={errors.hours}
                        value={values.hours}
                    />
                    <ReportFormItem
                        text={i18n.t('Minutes')}
                        icon='time-outline'
                        onChange={v => setFieldValue('minutes', v)}
                        error={errors.minutes}
                        value={values.minutes}
                        marginB
                        minutes
                    />
                    <ReportFormItem
                        text={i18n.t('Publications')}
                        icon='library-outline'
                        onChange={v => setFieldValue('publications', v)}
                        error={errors.publications}
                        value={values.publications}
                    />
                    <ReportFormItem
                        text={i18n.t('Videos')}
                        icon='play-outline'
                        onChange={v => setFieldValue('videos', v)}
                        error={errors.videos}
                        value={values.videos}
                        marginB
                    />
                    <ReportFormItem
                        text={i18n.t('Return Visits')}
                        icon='chatbubbles-outline'
                        onChange={v => setFieldValue('returnVisits', v)}
                        error={errors.returnVisits}
                        value={values.returnVisits}
                    />
                    <ReportFormItem
                        text={i18n.t('Bible Studies')}
                        icon='people-outline'
                        onChange={v => setFieldValue('bibleStudies', v)}
                        error={errors.bibleStudies}
                        value={values.bibleStudies}
                        marginB
                    />
                </View>
                <View style={styles.sheetButtonsContainer}>
                    {formMode == 'create' ? <StopWatchButton buttonStyle={styles.stopWatchButton} /> : <></>}
                    <MainButton onPress={handleSubmit}/>
                </View>
            </BottomSheetModalComp>
            <DatePicker
                modal
                locale={i18n.language}
                mode={"date"}
                open={openPicker}
                date={datePicker}
                onConfirm={(date) => {
                    setOpenPicker(false)
                    setDatePicker(date)
                    setFieldValue('date', date.toISOString());
                }}
                onCancel={() => {
                    setOpenPicker(false)
                }}
                confirmText={i18n.t('Confirm')}
                cancelText={i18n.t('Cancel')}
            />
        </>
    )
})

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