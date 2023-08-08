import { StyleSheet, Text, TextInput, View, TextInputProps, KeyboardTypeOptions, StyleProp, TextStyle, ViewStyle, Platform } from 'react-native'
import React, { useState } from 'react'
import { fontPixel, heightPixel, pixelSizeHorizontal, theme, widthPixel } from 'theme/sizes'
import PhoneInput from 'react-native-phone-number-input'
// import { useAppSelector } from 'store/store'
// import { selectCurrentUser } from 'store/users'
import CountryPicker from 'react-native-country-picker-modal';
import { Colors } from 'theme/colors';
// import { GlobalStyle } from 'src/styles/global'

const CustomInput = ({
    Label,
    value,
    onChangeText,
    handleBlur,
    secureTextEntry = false,
    RenderIcon,
    placeholder,
    error,
    keyboardType,
    style,
    ContainerStyle,
    props,
    paragraph = false,
    country_code = "EG",
    setFieldValue,
    optional = false
}: {
    Label?: string,
    value: string,
    onChangeText: (str: string) => void,
    props?: TextInputProps,
    error?: string | undefined | null,
    placeholder?: string | undefined,
    RenderIcon?: any,
    handleBlur?: any,
    secureTextEntry?: boolean,
    keyboardType?: KeyboardTypeOptions,
    style?: StyleProp<TextStyle> | undefined;
    ContainerStyle?: StyleProp<ViewStyle>;
    paragraph?: boolean;
    country_code?: string | null,
    setFieldValue?: any;
    optional?: boolean
}) => {
    // const user = useAppSelector(selectCurrentUser)
    const [showCode, setShowCode] = useState(false)
    return (
        <View style={[styles.container,]}>
            {paragraph ?
                <>
                    <Text style={styles.label}>{Label}</Text>
                    <View style={[styles.inputContainer, ContainerStyle,  { height: heightPixel(100), }]}>
                        <TextInput
                            style={[styles.input, style ? style : null, { height: heightPixel(90), textAlignVertical: "top" }]}
                            value={value}
                            onChangeText={onChangeText}
                            blurOnSubmit={true}
                            onBlur={handleBlur}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            keyboardType={keyboardType}
                            multiline
                            numberOfLines={5}
                            {...props}
                        />
                        {Label == "Password" || Label == "New password" || Label == "Confirm password" ? <RenderIcon /> : null}
                    </View>
                    {error && <Text style={[styles.error]}>{error}</Text>}
                </>
                :
                <>
                    {Label !== "Mobile number" ?
                        <>
                            <Text style={[styles.label,]}>{Label} <Text style={{ opacity: .7 }}>{optional ? "(Optional)" : null}</Text></Text>
                            <View style={[styles.inputContainer, ContainerStyle, ]}>
                                <TextInput
                                    style={[styles.input, style ? style : null, { width: Label == "password" || Label == "Confirm password" ? '90%' : "90%", }]}
                                    value={value}
                                    onChangeText={onChangeText}
                                    blurOnSubmit={true}
                                    onBlur={handleBlur}
                                    placeholder={placeholder}
                                    secureTextEntry={secureTextEntry}
                                    keyboardType={keyboardType}
                                    {...props}
                                />
                                {Label == "Password" || Label == "New password" || Label == "Confirm password" ? <RenderIcon /> : null}
                            </View>
                            {error && <Text style={[styles.error,]}>{error}</Text>}
                        </> :
                        <>
                            <Text style={styles.label}>{Label}</Text>
                            {/* <PhoneInput
                                defaultValue={user.mobile}
                                disableArrowIcon
                                containerStyle={styles.inputContainer}
                                onChangeFormattedText={onChangeText}
                                defaultCode={country_code || "EG"}
                                onChangeCountry={(value) => {
                                    setFieldValue("country_code", value.cca2)
                                }}
                                layout='first'
                                codeTextStyle={{
                                    color: COLORS.text1,

                                }}
                                // withShadow
                                // autoFocus
                                value={value}
                                placeholder=' '
                                // textInputStyle={[styles.input, { height: "100%", fontSize: theme.sizes.m }]}
                                textInputStyle={{ height: heightPixel(50), padding: 0, color: COLORS.text1 }}
                                textContainerStyle={{
                                    backgroundColor: COLORS.third,
                                    width: "100%",
                                    height: "100%",
                                    paddingBottom: 0,
                                    justifyContent: "center",
                                    paddingTop: 0
                                }}
                                flagButtonStyle={{ borderRightWidth: 1, borderColor: COLORS.secondly, }}
                            /> */}

                            <View style={[styles.inputContainer, ContainerStyle,]}>
                                <CountryPicker
                                    // theme={dark ? DARK_THEME : {}}
                                    withFilter
                                    withFlag

                                    countryCode={country_code ?? "EG"}
                                    onSelect={(value) => {
                                        console.log(value);
                                        setFieldValue("country_code", value.cca2)
                                    }}
                                    withCallingCode
                                    // onSelect={}
                                    onClose={() => setShowCode(false)}
                                    onOpen={() => setShowCode(true)}
                                    visible={showCode}
                                    withCallingCodeButton
                                    theme={{
                                        // onBackgroundTextColor:GlobalStyle().textColor1,
                                        // 'transparent',
                                        // primaryColor: "#ffff"
                                    }}
                                />
                                <TextInput
                                    style={[styles.input, style ? style : null, {
                                        width: Label == "Mobile number" || Label == "Mobile number" ? '90%' : "90%",
                                        // backgroundColor:COLORS.error,
                                        // borderLeftColor: COLORS.fourth,
                                        borderLeftWidth: .3,
                                        marginLeft: 10
                                    }]}
                                    value={value}
                                    onChangeText={onChangeText}
                                    blurOnSubmit={true}
                                    onBlur={handleBlur}
                                    placeholder={placeholder}
                                    secureTextEntry={secureTextEntry}
                                    keyboardType={keyboardType}
                                    {...props}
                                />

                            </View>
                            {error && <Text style={[styles.error,]}>{error}</Text>}</>

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
        paddingHorizontal: pixelSizeHorizontal(10),
        marginTop: heightPixel(15),
        // backgroundColor:"#a00"
    },
    label: {
        fontSize: fontPixel(15),

        fontWeight: "400",
        
    },
    error: {
        fontSize: fontPixel(15),
        fontWeight: "400",
        marginBottom: heightPixel(5),
        // textTransform:"lowercase"
    },
    inputContainer: {
        width: '100%',
        height: Platform.OS == "ios" ? heightPixel(50) : heightPixel(60),
        borderWidth: theme.border.thin,
        backgroundColor:Colors().SecondGrey,

        borderRadius: widthPixel(10),
        marginTop: heightPixel(3),

        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        padding: 5

    },
    input: {
        width: '100%',
        height: Platform.OS == "ios" ? heightPixel(50) : heightPixel(60),
        // paddingHorizontal: widthPixel(10),
        paddingLeft: widthPixel(5),


    }
})