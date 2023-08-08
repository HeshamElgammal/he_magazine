import { Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import CustomInput from 'components/CustomInput'

import { heightPixel } from 'theme/sizes'
import { EYE } from 'assets/svgs'
const Form = ({ values, onChangeValue, errors, handleBlur, touched }: {
    values: any,
    onChangeValue: any,
    errors: any,
    handleBlur: any,
    touched: any
}) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(prev => !prev)
    };
    const renderIcon = (props: any) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}
            style={{ position: "absolute", zIndex: 10, right: 10 }}
        >
            {secureTextEntry ? <EYE /> : <EYE />}
        </TouchableWithoutFeedback>
    );
    return (
        <View style={styles.container}>
            <CustomInput
                Label='Email'
                onChangeText={onChangeValue('email')}
                value={values?.email}
                error={touched.email ? errors?.email : null}
                handleBlur={handleBlur('email')}
                keyboardType='email-address'
            />

            <CustomInput
                RenderIcon={renderIcon}
                Label='Password'
                onChangeText={onChangeValue('password')}
                value={values?.password}
                error={touched.password ? errors?.password : null}
                secureTextEntry={secureTextEntry}
                handleBlur={handleBlur('password')}
            />

        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        // width: "100%",
        width: Platform.OS == "ios" ? "95%" : "100%",
        alignItems: "center",
        alignSelf: "center",
        marginTop: heightPixel(12)
    }
})