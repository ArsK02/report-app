import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState, useImperativeHandle, forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReportsRealmContext } from '../../store/reports/models/index';
import { BottomSheetModalComp } from '../BottomSheetModalComp';
import MainButton from '../buttons/MainButton';
import { THEME } from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from "react-i18next";


const { useRealm } = ReportsRealmContext;

const LanguageForm = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const realm = useRealm();

    const {t, i18n} = useTranslation();

    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['35%'], []);

    const handlePresentModalPress = useCallback(() => {
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

    const LanguageFormItem = ({marginB, langId}) => (
        <TouchableOpacity onPress={() => i18n.changeLanguage(langId)} style={[styles.reportFormItem, marginB && styles.reportFormItemMargin]} activeOpacity={0.7}>
            <Text style={[styles.reportFormItemText, styles.reportFormItemTextGrow]}>{t(langId)}</Text>
            {langId == i18n.language ? <Icon name='checkmark-outline' size={24} color={THEME.CONTRAST_COLOR} /> : <></>}
        </TouchableOpacity>
    );

    return (
        <>
            <BottomSheetModalComp
                innerRef={bottomSheetModalRef}
                snapPoints={snapPoints}
                containerStyle={styles.sheetContainer}
            >
                {i18n.options.fallbackLng.length > 0 ? i18n.options.fallbackLng.map(lang => (
                    <LanguageFormItem
                        langId={lang}
                        key={lang}
                    />
                )) : <></>}
                
                {/* <View style={styles.sheetButtonsContainer}>
                    <MainButton />
                </View> */}
            </BottomSheetModalComp>
        </>
    )
})

export default LanguageForm

const styles = StyleSheet.create({
    sheetContainer: {
        // justifyContent: 'space-between',
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
        // marginHorizontal: 15,
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
        marginTop: 'auto',
        flexDirection: 'row',
    },
    stopWatchButton: {
        marginRight: 15,
    },
})