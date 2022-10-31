import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BottomSheetModalComp } from '../BottomSheetModalComp';
import SelectYearButton from '../buttons/SelectYearButton';
import MainButton from '../buttons/MainButton';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";

import { doReportsGetMinYear } from '../../store/reports/reports.effects';

const MONTHS = [2022, 2021, '2020', '2019', '2018', '2017'];

const YearForm = (props) => {
    const { year, setYear } = props;

    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();

    const [ yearPicked, setYearPicked ] = useState(year);
    
    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => [440], []);
    const width = Dimensions.get('window').width;

    const reportsCreateLoaded = useSelector(state => state.reports.reportsCreateLoaded);

    const reportsGetMinYearData = useSelector(state => state.reports.reportsGetMinYearData);
    const reportsGetMinYearLoading = useSelector(state => state.reports.reportsGetMinYearLoading);
    const reportsGetMinYearLoaded = useSelector(state => state.reports.reportsGetMinYearLoaded);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleMainButtonPress = () => {
        setYear(yearPicked);
        bottomSheetModalRef.current?.close();
    }

    useEffect(() => {
        doReportsGetMinYear(dispatch);
    }, []);

    useEffect(() => {
        doReportsGetMinYear(dispatch);
    }, [reportsCreateLoaded]);

    useEffect(() => {
        if (reportsGetMinYearLoaded) {
            // console.log('reportsGetMinYearData', reportsGetMinYearData);
            // setYears(getYears(reportsGetMinYearData))
        }
    }, [reportsGetMinYearLoaded])

    return (
        <>
            <SelectYearButton year={year} onPress={handlePresentModalPress} />
            <BottomSheetModalComp
                innerRef={bottomSheetModalRef}
                snapPoints={snapPoints}
                containerStyle={styles.sheetContainer}
            >
                {!!reportsGetMinYearLoaded ?
                    <View>
                        <WheelPickerExpo
                            height={280}
                            width={width - 50}
                            initialSelectedIndex={reportsGetMinYearData.indexOf(year)}
                            items={reportsGetMinYearData.map(name => ({ label: name, value: '' }))}
                            onChange={({ item }) => setYearPicked(item.label)}
                            />
                    </View>
                : <></>}
                
                <View>
                    <MainButton onPress={handleMainButtonPress} />
                </View>
            </BottomSheetModalComp>
            
        </>
    )
}

export default YearForm

const styles = StyleSheet.create({
    sheetContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 45,
    },
})