import { StyleSheet, Text, TextInput, View, TextInputProps, StyleProp, TextStyle, ViewStyle, Platform, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import {   heightPixel, theme, widthPixel } from 'theme/sizes'
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';
import { Calendar } from 'assets/svgs';
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Modal from 'react-native-modal'

const CustomDatePicker = ({
    name,
    values,
    handleBlur,
    touched,
    errors,
    handleChange,
    style,
    ContainerStyle,
    setFieldValue,
    optional = false,
    ...props
}: {
    name: string;
    values: any,
    handleChange: any;
    handleBlur?: any;
    touched?: any;
    errors?: any;
    style?: StyleProp<TextStyle> | undefined;
    ContainerStyle?: StyleProp<ViewStyle>;
    setFieldValue?: any;
    optional?: boolean
} & TextInputProps) => {
    const [date, setDate] = useState(new Date(Date.now()));
    const [calenderShow, setCalenderShow] = useState(false);
    const onChange = (event: any, value: any) => {
        let Format = moment(value).format(
            'YYYY/MM/DD'
        )
        setDate(value)
        if (Platform.OS === 'android') {
            setCalenderShow(false)
            setFieldValue(name.replace(/\s/g, ''), Format)
        } else {
            setFieldValue(name.replace(/\s/g, ''), Format)
        }
    };
    return (
        <View style={[styles.container,]}>
            <Text style={[styles.label,]}>{name} <Text style={{ opacity: .7 }}>{optional ? "(Optional)" : null}</Text></Text>
            <TouchableOpacity onPress={() => { setCalenderShow(true) }}
                style={[styles.inputContainer, ContainerStyle,]}>
                <View style={styles.input}
                >
                    <Text>{values[name.replace(/\s/g, '')] == '' ? '' : values[name.replace(/\s/g, '')]}</Text>
                </View>
                <Calendar />
            </TouchableOpacity>
            {(errors[name.replace(/\s/g, '')]&& touched[name.replace(/\s/g, '')])  && <Text style={[styles.error,]}>{errors[name.replace(/\s/g, '')]}</Text>}

            {Platform.OS == 'ios' ?
                <Modal isVisible={calenderShow} style={styles.Modal} >
                    <View style={styles.Calendar}>
                        <DateTimePicker
                            maximumDate={(new Date())}
                            value={date}
                            mode={'date'}
                            display={'spinner'}
                            is24Hour={true}
                            onChange={onChange}
                            textColor={Colors().SecondColor}
                        />
                        <Button title="Choose" onPress={() => setCalenderShow(false)} />
                    </View>
                </Modal>
                :
                calenderShow &&
                <DateTimePicker
                    value={date}
                    maximumDate={(new Date())}
                    mode={'date'}
                    display={'default'}
                    is24Hour={true}
                    onChange={onChange}
                />
            }
        </View>
    )
}

export default CustomDatePicker

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: heightPixel(20),
    },
    label: {
        fontSize: (15),
        marginBottom: 5,
        fontWeight: "400",
        fontFamily: Fonts.PoppinsMedium,
        color: Colors().SecondColor
    },
    error: {
        fontSize: (12),
        fontWeight: "400",
        marginTop: heightPixel(5),
        textAlign: 'center',
        color: Colors().Red,
        fontFamily: Fonts.PoppinsMedium
    },
    inputContainer: {
        width: '100%',
        height: Platform.OS == "ios" ? heightPixel(50) : heightPixel(60),
        borderWidth: theme.border.thin,
        borderColor: 'rgba(19, 19, 19, 0.40)',
        backgroundColor: Colors().SecondGrey,
        borderRadius: widthPixel(10),
        marginTop: heightPixel(3),
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        padding: 7,
        color: Colors().SecondColor

    },
    input: {
        width: '90%',
        height: Platform.OS == "ios" ? heightPixel(50) : heightPixel(60),
        paddingLeft: widthPixel(5),
        color: Colors().SecondColor,
        fontFamily: Fonts.PoppinsMedium,
        justifyContent: 'center'
    },
    Modal: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    Calendar: {
        paddingVertical: 20,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 15,
    }
})