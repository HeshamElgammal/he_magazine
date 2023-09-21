import { TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomInput from 'components/CustomInput'
import { Formik } from 'formik'
import { confirmPass_initial_values } from 'src/Formik/initialValues'
import { changePasswordSchema } from 'src/Formik/schema'
import CustomBtn from 'components/CustomBtn'
import { useAppDispatch } from 'src/redux/store'
import { useLoadingSelector } from 'src/redux/selectors'
import thunks from 'src/redux/auth/thunks'
import { resetStyles } from '../styles'
import { EYE, EYEOFF } from 'assets/svgs'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectChanged } from 'src/redux/auth'


const Form = ({ email, }: { email: any }) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    const loading = useLoadingSelector(thunks.doConfirmPassword())
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [csecureTextEntry, setcSecureTextEntry] = React.useState(true);
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

    const Changed = useSelector(selectChanged)
    useEffect(() => {
        Changed && navigation.navigate('Login')
    }, [Changed])

    return (
        <View style={resetStyles.formContainer}>
            <Formik
                initialValues={confirmPass_initial_values}
                validationSchema={changePasswordSchema}
                onSubmit={(values) => {
                    dispatch(thunks.doConfirmPassword({
                        _method: 'PATCH',
                        email: email,
                        password: values.Newpassword,
                        password_confirmation: values.Confirmpassword,
                    }))
                }}
            >
                {props => (
                    <>
                        <CustomInput
                            {...props}
                            Label='New password'
                            name='New password'
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
                            title='Reset'
                            onClick={() => { props.handleSubmit() }}
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
