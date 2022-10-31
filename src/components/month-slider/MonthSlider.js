import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { MonthItem } from './MonthItem';
import moment from "moment";
import { getMonthData } from './mock/data';
import YearForm from '../year-form/YearForm';
import { useDispatch, useSelector } from 'react-redux';

import { doReportsGetStatsByYear } from '../../store/reports/reports.effects';


export const MonthSlider = ({ navigation }) => {
    const dispatch = useDispatch();

    const width = Dimensions.get('window').width;
    const data = getMonthData();

    const reportsCreateLoaded = useSelector(state => state.reports.reportsCreateLoaded);
    const reportsEditLoaded = useSelector(state => state.reports.reportsEditLoaded);
    const reportsDeleteLoaded = useSelector(state => state.reports.reportsDeleteLoaded);

    const getMonths = (year) => {
        const months = [];
        if (year == moment().year()) {
            for (let i = 0; i < moment().month() + 1; i++) {
                months.push(moment().month() - i)
            }
        } else {
            for (let i = 0; i < 12; i++) {
                months.push(moment().month() - i)
            }
        }
        
        return months;
    }

    const [year, setYear] = useState(moment().year());
    const [months, setMonths] = useState(getMonths(year));
    const [defaultIndex, setDefaultIndex] = useState(moment().month());

    // console.log(data);
    useEffect(() => {
        doReportsGetStatsByYear(dispatch, year);
        setMonths(getMonths(year));
        setDefaultIndex(getMonths(year).length - 1)
    }, [year]);

    useEffect(() => {
        if (reportsCreateLoaded || reportsEditLoaded || reportsDeleteLoaded) {
            doReportsGetStatsByYear(dispatch, year);
        }
    }, [reportsCreateLoaded, reportsEditLoaded, reportsDeleteLoaded])
    
    return (
        <View style={{ flex: 1 }}>
            <YearForm year={year} setYear={setYear}/>
            <Carousel
                loop={false}
                width={width * 0.85}
                height={400}
                autoPlay={false}
                data={months}
                style={styles.carousel}
                defaultIndex={defaultIndex}
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