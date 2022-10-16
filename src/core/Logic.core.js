import React, { useEffect, useState, useRef } from "react";
import { AppState } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { doAppStateChange } from '../store/reports/reports.effects';

export const LogicCore = () => {
    const dispatch = useDispatch();

    const appState_ = useRef(AppState.currentState);

    useEffect(() => {
        const subscription = AppState.addEventListener("change", _handleAppStateChange);
        return () => {
            subscription.remove()
        };
    }, [])


    const _handleAppStateChange = (state) => {
        if (appState_.current.match(/inactive|background/) && state === "active") {
            doAppStateChange(dispatch, 'foreground');
        }
        appState_.current = state;
        doAppStateChange(dispatch, state);
    };

    return (
        <></>
    )
}