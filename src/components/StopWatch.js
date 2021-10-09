import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

export const StopWatch = ({ }) => {
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [isStopwatchPause, setIsStopwatchPause] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);

    const startPauseStopWatch = () => {
        if (isStopwatchStart) {
            setIsStopwatchStart(false); 
            setIsStopwatchPause(true);
            setResetStopwatch(false);
        } else {
            setIsStopwatchStart(true);
            setIsStopwatchPause(false);
            setResetStopwatch(false);
        }
        
    }
    const stopStopWatch = () => {
        setIsStopwatchStart(false);
        setIsStopwatchPause(false);
        setResetStopwatch(true);
    }

    return (
        <View style={styles.container}>
            <Stopwatch
                laps
                start={isStopwatchStart}
                // To start
                reset={resetStopwatch}
                // To reset
                options={options}
            // Options for the styling
            // getTime={(time) => {
            //     console.log(time);
            // }}
            />
            <View style={styles.buttonsContainer}>
                <Button
                    title={isStopwatchStart ? 'Pause' : 'Start'}
                    onPress={() => startPauseStopWatch()}
                />
                <Button
                    title='Stop'
                    onPress={() => stopStopWatch()}
                    disabled={!isStopwatchStart && !isStopwatchPause}
                /> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 8
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});

const options = {
    container: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 15,
    },
    text: {
        fontSize: 22,
        lineHeight: 33,
    },
};