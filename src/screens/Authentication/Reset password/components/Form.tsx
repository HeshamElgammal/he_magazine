import { View } from 'react-native'
import React, { useEffect } from 'react'
import CustomInput from 'components/CustomInput'
import { Formik } from 'formik'
import { reset_initial_values } from 'src/Formik/initialValues'
import { ResetSchema } from 'src/Formik/schema'
import CustomBtn from 'components/CustomBtn'
import { useAppDispatch } from 'src/redux/store'
import { useLoadingSelector } from 'src/redux/selectors'
import thunks from 'src/redux/auth/thunks'
import { resetStyles } from '../styles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectReseted } from 'src/redux/auth'


const Form = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    const [Email, setEmail] = React.useState<string>();
    const loading = useLoadingSelector(thunks.doResetPassword())
    const reseted = useSelector(selectReseted)
    useEffect(() => {
        reseted && navigation.navigate('OTP', { email: Email, type: 'verify' })
    }, [reseted])
    return (
        <View style={resetStyles.formContainer}>
            <Formik
                initialValues={reset_initial_values}
                validationSchema={ResetSchema}
                onSubmit={(values) => {
                    dispatch(thunks.doResetPassword({
                        email: values.Email
                    }))
                }}
            >
                {props => (
                    <>
                        <CustomInput
                            {...props}
                            Label='Email'
                            name='Email'
                            values={props.values}
                            keyboardType='email-address'
                        />
                        <CustomBtn
                            pending={loading}
                            title='Submit'
                            onClick={() => {
                                setEmail(props.values.Email)
                                props.handleSubmit()
                            }}
                            StylesBtn={resetStyles.button}
                            color='dark'
                        />
                    </>
                )}
            </Formik>


        </View>
    )
}

export default Form
