import { Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomInput from 'components/CustomInput'
import { Formik } from 'formik'
import { OTP_initial_values } from 'src/Formik/initialValues'
import { OTPSchema } from 'src/Formik/schema'
import CustomBtn from 'components/CustomBtn'
import { useAppDispatch } from 'src/redux/store'
import { useLoadingSelector } from 'src/redux/selectors'
import thunks from 'src/redux/auth/thunks'
import { otpStyles } from '../styles'
import { useNavigation } from '@react-navigation/native'
import Auth, { selectVerified } from 'src/redux/auth'
import { useSelector } from 'react-redux'


const Form = ({ type, email }: { type: string, email?: string }) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    const loading = useLoadingSelector(thunks.doVerifyOTP())
    const verified = useSelector(selectVerified)
    useEffect(() => {
        dispatch(Auth.chnageReseted(false))
        verified && navigation.navigate('ConfirmPassword', { email })
    }, [verified])
    return (
        <View style={otpStyles.formContainer}>
            <Formik
                initialValues={OTP_initial_values}
                validationSchema={OTPSchema}
                onSubmit={(values) => {
                    dispatch(thunks.doVerifyOTP({
                        email,
                        code: values.EnterOTPcode
                    })).then(() => dispatch(Auth.chnageVerified(false)))
                }}
            >
                {props => (
                    <>
                        <CustomInput
                            {...props}
                            Label='Enter OTP code'
                            name='EnterOTPcode'
                            values={props.values}
                            keyboardType='decimal-pad'
                            maxLength={4}
                        />
                        {/* <Text style={otpStyles.LOGText}>Didn’t receive an OTP? <Text style={otpStyles.SLOGText}>Resend OTP</Text></Text> */}

                        <CustomBtn
                            pending={loading}
                            title='Submit'
                            onClick={() => { props.handleSubmit() }}
                            StylesBtn={otpStyles.button}
                            color='dark'
                        />
                    </>
                )}
            </Formik>


        </View>
    )
}

export default Form
