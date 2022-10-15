import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenSafeAreaContainer = ({ children, scrollContainer, paddingHorizontal, disableSafeAreaEdges, noBounces, style, tabsIndent }) => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView
            style={[
                styles.container,
                (!scrollContainer && paddingHorizontal) && styles.containerPadding,
                (!scrollContainer && tabsIndent) && { paddingBottom: insets.bottom + 18 },
                !scrollContainer && style,]}
            edges={disableSafeAreaEdges ?
                ['top', 'bottom', 'left', 'right'].filter(item => !disableSafeAreaEdges.includes(item))
                : ['top', 'bottom', 'left', 'right']
            }
        >
            {scrollContainer ?
                <ScrollView
                    contentContainerStyle={[
                        styles.scrollContainer,
                        paddingHorizontal && styles.containerPadding,
                        tabsIndent && { paddingBottom: insets.bottom + 18 },
                        style
                    ]}
                    bounces={noBounces ? false : true}
                >
                    {children}
                </ScrollView>
                :
                <>
                    {children}
                </>
            }
        </SafeAreaView>
    );
}

export default ScreenSafeAreaContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    containerPadding: {
        paddingHorizontal: 20
    },
})