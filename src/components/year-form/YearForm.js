import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { BottomSheetModalComp } from '../BottomSheetModalComp';
import SelectYearButton from '../buttons/SelectYearButton';
import MainButton from '../buttons/MainButton';
import WheelPickerExpo from 'react-native-wheel-picker-expo';

const CITIES = ['2022', '2021', '2020', '2019', '2018', '2017'];

const YearForm = ({ }) => {

    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => [440], []);
    const width = Dimensions.get('window').width;

    const handlePresentModalPress = useCallback(() => {
        console.log('123');
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <>
            <SelectYearButton onPress={handlePresentModalPress} />
            <BottomSheetModalComp
                innerRef={bottomSheetModalRef}
                snapPoints={snapPoints}
                containerStyle={styles.sheetContainer}
            >
                <View>
                    <WheelPickerExpo
                        height={280}
                        width={width - 50}
                        initialSelectedIndex={3}
                        items={CITIES.map(name => ({ label: name, value: '' }))}
                        onChange={({ item }) => console.log(item.label)} />
                </View>
                <View>
                    <MainButton />
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