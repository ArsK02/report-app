import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { MonthItem } from './MonthItem';
import moment from "moment";
import { getMonthData } from './mock/data';
import YearForm from '../year-form/YearForm';




export const MonthSlider = ({ navigation }) => {
    const width = Dimensions.get('window').width;
    const data = getMonthData();

    const [year, setYear] = useState(moment().year());
    // console.log(data);

    const getMonths = () => {
        const months = [];
        for (let i = 0; i < moment().month() + 1; i++) {
            months.push(moment().month() - i)
        }
        return months;
    }

    console.log(getMonths());
    
    return (
        <View style={{ flex: 1 }}>
            <YearForm year={year} setYear={setYear}/>
            <Carousel
                loop={false}
                width={width * 0.85}
                height={400}
                autoPlay={false}
                data={getMonths()}
                style={styles.carousel}
                defaultIndex={moment().month()}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => <MonthItem year={year} month={index} navigation={navigation}></MonthItem>}
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