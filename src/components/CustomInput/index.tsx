import { StyleSheet, Text, TextInput, View, TextInputProps, KeyboardTypeOptions, StyleProp, TextStyle, ViewStyle, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { heightPixel, pixelSizeHorizontal, theme, widthPixel } from 'theme/sizes'
import PhoneInput from 'react-native-phone-number-input'
// import { useAppSelector } from 'store/store'
// import { selectCurrentUser } from 'store/users'
import CountryPicker from 'react-native-country-picker-modal';
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';
import { DA, DownArrow } from 'assets/svgs';
// import { GlobalStyle } from 'src/styles/global'

const CustomInput = ({
    name,
    Label,
    values,
    handleBlur,
    RenderIcon,
    placeholder,
    touched,
    errors,
    handleChange,
    style,
    ContainerStyle,
    paragraph = false,
    country_cc2,
    setFieldValue,
    optional = false,
    setData,
    ...props
}: {
    name: string;
    Label?: string,
    values: any,
    handleChange: any;
    handleBlur?: any;
    touched?: any;
    errors?: any;
    placeholder?: string | undefined,
    RenderIcon?: any,
    style?: StyleProp<TextStyle> | undefined;
    ContainerStyle?: StyleProp<ViewStyle>;
    paragraph?: boolean;
    country_cc2?: any;
    setData?: any;
    setFieldValue?: any;
    optional?: boolean
} & TextInputProps) => {
    const [showCode, setShowCode] = useState(false)

    return (
        <View style={[styles.container,]}>
            {paragraph ?
                <>
                    <Text style={styles.label}>{Label}</Text>
                    <View style={[styles.inputContainer, ContainerStyle, { height: heightPixel(100), }]}>
                        <TextInput
                            {...props}
                            style={[styles.input, style ? style : null, { height: heightPixel(90), textAlignVertical: "top" }]}
                            value={values[name.replace(/\s/g, '')]}
                            onChangeText={handleChange(name.replace(/\s/g, ''))}
                            onBlur={handleBlur(name.replace(/\s/g, ''))}
                            blurOnSubmit={true}
                            multiline
                            numberOfLines={5}
                        />
                        {name == "Password" || name == "New password" || name == "Confirm password" ? <RenderIcon /> : null}
                    </View>
                    {(errors[name.replace(/\s/g, '')] && touched[name.replace(/\s/g, '')]) && <Text style={[styles.error]}>{errors[name.replace(/\s/g, '')]}</Text>}
                </>
                :
                <>
                    {name !== "Mobile number" ?
                        <>
                            <Text style={[styles.label,]}>{Label} <Text style={{ opacity: .7 }}>{optional ? "(Optional)" : null}</Text></Text>
                            <View style={[styles.inputContainer, ContainerStyle,]}>
                                <TextInput
                                    {...props}
                                    style={[styles.input, style ? style : null, { width: name == "password" || name == "Confirm password" ? '90%' : "90%", }]}
                                    value={values[name.replace(/\s/g, '')]}
                                    onChangeText={handleChange(name.replace(/\s/g, ''))}
                                    blurOnSubmit={true}
                                    onBlur={handleBlur}
                                />
                                {(name == "Password" || name == "New password" || name == "Confirm password") && <RenderIcon />}
                            </View>
                            {(errors[name.replace(/\s/g, '')] && touched[name.replace(/\s/g, '')]) && <Text style={[styles.error,]}>{errors[name.replace(/\s/g, '')]}</Text>}
                        </> :
                        <>
                            <Text style={styles.label}>{Label}</Text>

                            <View style={[styles.inputContainer]}>
                                <CountryPicker
                                    withFilter
                                    withFlagButton
                                    countryCode={country_cc2}
                                    onSelect={(country: any) => {
                                        setData((prev: any) => ({ ...prev, country_cc2: country.cca2, country_code: country.callingCode[0] }))
                                        handleChange('country_code', `+${country.callingCode[0]}`)
                                    }}
                                    withCallingCode={false}
                                    onClose={() => setShowCode(false)}
                                    onOpen={() => setShowCode(true)}
                                    visible={showCode}
                                />
                                <TouchableOpacity onPress={() => setShowCode(true)}>
                                    <DA style={{ marginBottom: -4 }} />
                                </TouchableOpacity>
                                <TextInput
                                    {...props}
                                    style={[styles.input, style ? style : null, {
                                        width: name == "Mobile number" || name == "Mobile number" ? '90%' : "90%",
                                        borderLeftWidth: .3,
                                        marginLeft: 10
                                    }]}
                                    value={values[name.replace(/\s/g, '')]}
                                    onChangeText={handleChange(name.replace(/\s/g, ''))}
                                    blurOnSubmit={true}
                                    onBlur={handleBlur}
                                    placeholder={placeholder}
                                />
                            </View>
                            {(errors[name.replace(/\s/g, '')] && touched[name.replace(/\s/g, '')]) && <Text style={[styles.error,]}>{errors[name.replace(/\s/g, '')]}</Text>}</>

                    }
                </>
            }
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: (20),
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
        marginTop: (5),
        textAlign: 'center',
        color: Colors().Red,
        fontFamily: Fonts.PoppinsMedium
    },
    inputContainer: {
        width: '100%',
        height: Platform.OS == "ios" ? (50) : (60),
        borderWidth: theme.border.thin,
        borderColor: 'rgba(19, 19, 19, 0.40)',
        backgroundColor: Colors().SecondGrey,
        borderRadius: widthPixel(10),
        marginTop: heightPixel(3),
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        padding: 7,
        color: Colors().SecondColor,

    },
    input: {
        width: '100%',
        height: Platform.OS == "ios" ? heightPixel(50) : heightPixel(60),
        paddingLeft: widthPixel(5),
        color: Colors().SecondColor,
        fontFamily: Fonts.PoppinsMedium


    }
})