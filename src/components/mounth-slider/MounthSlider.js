import * as React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { MounthItem } from './MounthItem';
import moment from "moment";
import { getMounthData } from './mock/data';




export const MounthSlider = (props) => {
    const width = Dimensions.get('window').width;
    const data = getMounthData();
    console.log(data);
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop={false}
                width={width * 0.85}
                height={400}
                autoPlay={false}
                data={data}
                style={styles.carousel}
                defaultIndex={moment().month()}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => <MounthItem index={index} data={data[index]}></MounthItem>}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    carousel: {
        width: '100%',
        justifyContent: 'center'
    },
});