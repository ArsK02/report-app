import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { THEME } from '../theme';

export const BottomSheetModalComp = ({ innerRef, snapPoints, containerStyle, children }) => {
    const renderBackdrop = useCallback(
        props => <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} pressBehavior='close' opacity={0.4} {...props} />,
        [],
    );

    return (
        <BottomSheetModal
            ref={innerRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{ backgroundColor: THEME.BACKGROUND_COLOR }}
            handleIndicatorStyle={{ backgroundColor: 'grey' }}
            enablePanDownToClose
            backdropComponent={renderBackdrop}
        >
            <BottomSheetScrollView contentContainerStyle={[styles.contentContainer, containerStyle]}>
                {children}
            </BottomSheetScrollView>
        </BottomSheetModal>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    },
});