import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { BottomSheetModalComp } from '../BottomSheetModalComp';
import SelectYearButton from '../buttons/SelectYearButton';
import MainButton from '../buttons/MainButton';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import moment from "moment";

// const MONTHS = [2022, 2021, '2020', '2019', '2018', '2017'];

const YearForm = (props) => {
    const { year, setYear } = props;

    const [ yearPicked, setYearPicked ] = useState(year);
    
    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => [440], []);
    const width = Dimensions.get('window').width;

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleMainButtonPress = () => {
        setYear(yearPicked);
        bottomSheetModalRef.current?.close();
    }

    const getYears = () => {
        const years = [];
        for (let i = 0; i < 8; i++) {
            years.push(moment().year() - i)
        }
        return years;
    }

    return (
        <>
            <SelectYearButton year={year} onPress={handlePresentModalPress} />
            <BottomSheetModalComp
                innerRef={bottomSheetModalRef}
                snapPoints={snapPoints}
                containerStyle={styles.sheetContainer}
            >
                <View>
                    <WheelPickerExpo
                        height={280}
                        width={width - 50}
                        initialSelectedIndex={getYears().indexOf(year)}
                        items={getYears().map(name => ({ label: name, value: '' }))}
                        onChange={({ item }) => setYearPicked(item.label)}
                        />
                </View>
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