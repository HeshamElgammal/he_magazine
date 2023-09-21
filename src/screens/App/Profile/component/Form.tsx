import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomInput from 'components/CustomInput'
import { heightPixel, theme } from 'theme/sizes'
import { EYE, EYEOFF } from 'assets/svgs'
import { Formik } from 'formik'
import { EditProfileSchema, } from 'src/Formik/schema'
import CustomBtn from 'components/CustomBtn'
import { useAppDispatch } from 'src/redux/store'
import thunks from 'src/redux/auth/thunks'
import { useLoadingSelector } from 'src/redux/selectors'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import Auth, { selectChanged, selectCities, selectCountries, selectSigned, selectUser } from 'src/redux/auth'
import { signupStyles } from 'screens/Authentication/Sign Up/styles'
import CustomGender from 'components/CustomGenderSelect'
import CustomDatePicker from 'components/CustomDatePicker'
import CustomModalPicker from 'components/CustomModalPicker'
import { City, Country } from 'screens/Authentication/Complete Sign Up/components/Dummy'


const Form = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>()
    const loading = useLoadingSelector(thunks.doChangeProfile())
    const Changed = useSelector(selectChanged)
    const User = useSelector(selectUser)
    const countries = useSelector(selectCountries)
    const cities = useSelector(selectCities)
    const [index, setIndex] = React.useState(User.gender == 'male' ? 1 : 0);
    const [{ country_code, country_cc2, }, setData] = React.useState<any>({
        country_cc2: 'EG',
        country_code: '20',
    });
    useEffect(() => {
        Changed && navigation.navigate('Profile')
    }, [Changed])
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    Name: User.name,
                    Mobilenumber: User.mobile,
                    Gender: User.gender,
                    Dateofbirth: User.date_of_birth,
                    Country: { id: User.country_id, name: User.country },
                    City: { id: User.city_id, name: User.city },
                }}
                validationSchema={EditProfileSchema}
                onSubmit={(values) => {
                    dispatch(thunks.doChangeProfile({
                        _method: 'PATCH',
                        name: values.Name,
                        mobile: User.mobile,
                        gender: values.Gender,
                        dob: values.Dateofbirth,
                        country_id: values.Country?.id,
                        city_id: values.City?.id,
                    })).then(() => {
                        dispatch(Auth.chnageChanged(false))
                    })
                }}>
                {props => (
                    <>
                        {
                            useEffect(() => {
                                dispatch(thunks.getCities(props.values.Country.id))
                            }, [props.values.Country])
                        }
                        <CustomInput
                            {...props}
                            Label='Name'
                            name='Name'
                            values={props.values}
                            keyboardType='email-address'
                        />
                        {/* <CustomInput
                            {...props}
                            Label='Mobile number'
                            name='Mobile number'
                            values={props.values}
                            country_cc2={country_cc2}
                            setData={setData}
                        /> */}
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
                            />
                        </View>

                        <CustomBtn
                            pending={loading}
                            title='Done'
                            onClick={() => { props.handleSubmit() }}
                            StylesBtn={[signupStyles.button, { marginBottom: 40 }]}
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

    }
})