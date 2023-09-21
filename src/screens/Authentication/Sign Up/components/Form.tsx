import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomInput from 'components/CustomInput'
import { heightPixel, theme } from 'theme/sizes'
import { EYE, EYEOFF } from 'assets/svgs'
import { Formik } from 'formik'
import { signup_initial_values } from 'src/Formik/initialValues'
import { SignupSchema } from 'src/Formik/schema'
import CustomBtn from 'components/CustomBtn'
import { signupStyles } from '../styles'
import thunks from 'src/redux/auth/thunks'
import { useLoadingSelector } from 'src/redux/selectors'
import { useNavigation } from '@react-navigation/native'


const Form = () => {
    const navigation = useNavigation<any>()
    const loading = useLoadingSelector(thunks.doSignUp)
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [csecureTextEntry, setcSecureTextEntry] = React.useState(true);
    const [{ country_code, country_cc2, }, setData] = React.useState<any>({
        country_cc2: 'EG',
        country_code: '20',
    });
    const toggleSecureEntry = () => {
        setSecureTextEntry(prev => !prev)
    };
    const ctoggleSecureEntry = () => {
        setcSecureTextEntry(prev => !prev)
    };
    const renderIcon = (props: any) => (
        <TouchableOpacity onPress={toggleSecureEntry}>
            {secureTextEntry ? <EYE /> : <EYEOFF />}
        </TouchableOpacity>
    );
    const renderIconc = (props: any) => (
        <TouchableOpacity onPress={ctoggleSecureEntry}>
            {csecureTextEntry ? <EYE /> : <EYEOFF />}
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <Formik
                initialValues={signup_initial_values}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    let data = {
                        email: values.Email,
                        password: values.Password,
                        password_confirmation: values.Confirmpassword,
                        mobile: `+${country_code}${parseInt(values.Mobilenumber)}`
                    }
                    navigation.navigate('CompleteSignUp', { data: data })
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
                            Label='Mobile number'
                            name='Mobile number'
                            values={props.values}
                            country_cc2={country_cc2}
                            setData={setData}
                        />
                        <CustomInput
                            {...props}
                            Label='Password'
                            name='Password'
                            values={props.values}
                            RenderIcon={renderIcon}
                            secureTextEntry={secureTextEntry}
                        />
                        <CustomInput
                            {...props}
                            Label='Confirm password'
                            name='Confirm password'
                            values={props.values}
                            RenderIcon={renderIconc}
                            secureTextEntry={csecureTextEntry}
                        />

                        <CustomBtn
                            pending={loading}
                            title='Create new account'
                            onClick={() => { props.handleSubmit() }}
                            StylesBtn={signupStyles.button}
                            color='dark'
                        />
                        <Text style={signupStyles.LOGText}>Already have an account? <Text onPress={() => navigation.navigate('Login')} style={signupStyles.SLOGText}>Login</Text></Text>

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
        // marginTop: heightPixel(12),
        paddingHorizontal: theme.spacing.l,

    }
})