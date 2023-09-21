import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomInput from 'components/CustomInput'
import { heightPixel, theme } from 'theme/sizes'
import { EYE, EYEOFF } from 'assets/svgs'
import { Formik } from 'formik'
import { login_initial_values } from 'src/Formik/initialValues'
import { LoginSchema } from 'src/Formik/schema'
import CustomBtn from 'components/CustomBtn'
import { loginStyles } from '../styles'
import { useAppDispatch } from 'src/redux/store'
import thunks from 'src/redux/auth/thunks'
import { useLoadingSelector } from 'src/redux/selectors'


const Form = () => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const dispatch = useAppDispatch()
    const loading = useLoadingSelector(thunks.doSignIn)
    const toggleSecureEntry = () => {
        setSecureTextEntry(prev => !prev)
    };

    const renderIcon = (props: any) => (
        <TouchableOpacity onPress={toggleSecureEntry}>
            {secureTextEntry ? <EYE /> : <EYEOFF />}
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <Formik
                initialValues={login_initial_values}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    const formadata = new FormData();
                    formadata.append('email', values.Email)
                    formadata.append('password', values.Password)

                    dispatch(thunks.doSignIn(formadata))
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
                        <CustomInput
                            {...props}
                            Label='Password'
                            name='Password'
                            values={props.values}
                            RenderIcon={renderIcon}
                            secureTextEntry={secureTextEntry}

                        />
                        <Text style={loginStyles.ForgotPassword}>Forgot password?</Text>
                        <CustomBtn
                            pending={loading}
                            title='Login'
                            onClick={() => { props.handleSubmit() }}
                            StylesBtn={loginStyles.button}
                            color='dark'
                        />
                    </>
                )}
            </Formik>


        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: "center",
        marginTop: heightPixel(12),
        paddingHorizontal: theme.spacing.l,

    }
})