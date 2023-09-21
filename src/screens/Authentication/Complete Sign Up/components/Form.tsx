import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomInput from 'components/CustomInput'
import { heightPixel, theme, widthPixel } from 'theme/sizes'
import { EYE, EYEOFF, ActiveMale, DeactiveMale } from 'assets/svgs'
import { Formik } from 'formik'
import { CompleteSignup_initial_values } from 'src/Formik/initialValues'
import { CompleteSignupSchema } from 'src/Formik/schema'
import CustomBtn from 'components/CustomBtn'
import { signupStyles } from '../styles'
import { useAppDispatch } from 'src/redux/store'
import thunks from 'src/redux/auth/thunks'
import { useLoadingSelector } from 'src/redux/selectors'
import Fonts from 'theme/fonsFamily'
import { Colors } from 'theme/colors'
import CustomGender from 'components/CustomGenderSelect'
import CustomDatePicker from 'components/CustomDatePicker'
import CustomModalPicker from 'components/CustomModalPicker'
import { City, Country } from './Dummy'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCities, selectCountries, selectIsAuth } from 'src/redux/auth'


const Form = ({ data }: { data: any }) => {
    const dispatch = useAppDispatch()
    const { navigate } = useNavigation<any>()
    const loading = useLoadingSelector(thunks.doSignIn)
    const [index, setIndex] = React.useState(0);
    const [disabled, setdisabled] = React.useState(true);
    const countries = useSelector(selectCountries)
    const cities = useSelector(selectCities)
    const isAuth = useSelector(selectIsAuth)

    useEffect(() => {
        dispatch(thunks.getCountries())
    }, [])
    useEffect(() => {
        isAuth && navigate('App')
    }, [isAuth])
    return (
        <View style={styles.container}>
            <Formik
                initialValues={CompleteSignup_initial_values}
                validationSchema={CompleteSignupSchema}
                onSubmit={(values) => {
                    dispatch(thunks.doSignUp({
                        email: data.email,
                        mobile: data.mobile,
                        password: data.password,
                        password_confirmation: data.password_confirmation,
                        name: values.Fullname,
                        gender: values.Gender,
                        dob: values.Dateofbirth,
                        country_id: values.Country?.id,
                        city_id: values.City?.id
                    }))
                }}
            >
                {props => (
                    <>
                        {
                            useEffect(() => {
                                dispatch(thunks.getCities(props.values.Country.id))
                                props.values.Country.id != 0 && setdisabled(false)
                            }, [props.values.Country])
                        }
                        <CustomInput
                            {...props}
                            Label='Full name'
                            name='Full name'
                            values={props.values}
                        />
                        <CustomGender
                            {...props}
                            index={index}
                            setIndex={setIndex}
                        />
                        <CustomDatePicker
                            {...props}
                            name='Date of birth'
                            values={props.values}
                        />
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between'
                        }}>
                            <CustomModalPicker
                                {...props}
                                Label='Country'
                                name='Country'
                                values={props.values}
                                data={countries}
                            />
                            <CustomModalPicker
                                {...props}
                                Label='City'
                                name='City'
                                values={props.values}
                                data={cities}
                                disabled={disabled}
                            />
                        </View>
                        <CustomBtn
                            pending={loading}
                            title='Submit'
                            onClick={() => {
                                props.handleSubmit()
                            }}
                            StylesBtn={signupStyles.button}
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
    },
    label: {
        fontSize: (15),
        marginBottom: 5,
        fontWeight: "400",
        fontFamily: Fonts.PoppinsMedium,
        color: Colors().SecondColor
    },
})