import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { BottomSheetModalComp } from '../BottomSheetModalComp';
import AddReportButton from '../buttons/AddReportButton';
import MainButton from '../buttons/MainButton';
import StopWatchButton from '../buttons/StopWatchButton';

const ReportForm = ({ }) => {

    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['75%'], []);

    const handlePresentModalPress = useCallback(() => {
        console.log('123');
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <>
            <AddReportButton onPress={handlePresentModalPress} />
            <BottomSheetModalComp
                innerRef={bottomSheetModalRef}
                snapPoints={snapPoints}
                containerStyle={styles.sheetContainer}
            >
                <View>
                    <Text>Bottom Sheet</Text>
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
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 45,
    },
    sheetButtonsContainer: {
        flexDirection: 'row',
    },
    stopWatchButton: {
        marginRight: 15,
    },
})