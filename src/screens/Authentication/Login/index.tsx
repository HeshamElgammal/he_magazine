import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { GlobalStyle } from 'src/styles/global'
import { heightPixel, pixelSizeVertical, width } from 'theme/sizes'
import GlobalHeader from 'components/Header'
import TextAuthRed from 'components/TextAuthRed'
import Form from './components/Form'
import { login_initial_values } from 'src/Formik/initialValues'
import { LoginSchema } from 'src/Formik/schema'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import User, { selectTheme } from 'src/redux/User'
import ForgotPassword from './components/ForgetPassword'
import CustomBtn from 'components/CustomBtn'
import { universalStyles } from 'theme'

const Login = () => {
    const dispatch = useAppDispatch()
    const theme = useAppSelector(selectTheme)
    const { values, errors, handleSubmit, handleChange, touched, setFieldValue, handleBlur } = useFormik({
        initialValues: login_initial_values,
        validationSchema: LoginSchema,
        validateOnChange: true,
        validateOnMount: false,
        validateOnBlur: false,
        onSubmit: () => {
            console.log(values);

            _handleLogin()
        },
    })
    const _handleLogin = () => {
        const formadata = new FormData();
        formadata.append('email', values.email)
        formadata.append('password', values.password)


    }
    return (
        <View style={[universalStyles.containerView]}>
            <View
                style={{
                    backgroundColor: "#131313",
                    width: "100%",
                    height: Platform.OS === 'ios' ? heightPixel(62) : 0,
                }}>
                <StatusBar
                    backgroundColor={"#131313"}
                    barStyle="light-content"
                />
            </View>
            <GlobalHeader />
            <TextAuthRed text='Login' />
            <Form
                values={values}
                errors={errors}
                onChangeValue={handleChange}
                handleBlur={handleBlur}
                touched={touched}
            />
            {/* <TouchableOpacity
        onPress={()=>{
            dispatch(User.slice.actions.chnageTheme(theme=="dark"?"light":"dark"))
        }}
        >
            <Text>presss</Text>
        </TouchableOpacity> */}
            <ForgotPassword />
            <CustomBtn
                title='Login'
                onClick={() => {

                }}
                StylesBtn={{ marginTop: pixelSizeVertical(100) }}
                color='light'
            />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})