import GlobalHeader from "components/Header";
import React from "react";
import { Linking, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "theme/colors";
import { ContactUsStyle } from "./styles";
import { Card } from "./Components/Card";
import { Email, Facebook, Instagram, Marker, Phone, Youtube, Twitter, Linkedin } from "assets/svgs";
import AppTitle from "components/App Title";
import CustomInput from "components/CustomInput";
import { Formik } from "formik";
import { contact_initial_values } from "src/Formik/initialValues";
import { ContactSchema } from "src/Formik/schema";
import CustomBtn from "components/CustomBtn";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Fonts from "theme/fonsFamily";
import { useAppDispatch } from "src/redux/store";
import AppThunks from "src/redux/app/thunks";
import { useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "src/redux/auth";
import { useLoadingSelector } from "src/redux/selectors";

const ContactUsScreen = () => {
    const USER = useSelector(selectUser)
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useAppDispatch()
    const loading = useLoadingSelector(AppThunks.dosendMassage())
    return (
        <>
            <SafeAreaView style={ContactUsStyle.SafeAreaView}>
                <View style={{ backgroundColor: Colors().FirstColor }}>
                    <GlobalHeader />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={ContactUsStyle.MainContainer}>
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${'+2 0100 5395 444'}`)}>
                        <Card Icon={Phone} text="+2 0100 5395 444" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('info@ppp-org.com')}>
                        <Card Icon={Email} text="info@ppp-org.com" />
                    </TouchableOpacity>
                    <Card Icon={Marker} text="3, Abdelhamid lotfy St., From Al Batal Ahmed Abdelaziz St., Mohandessin, Giza, Egypt" />
                    <AppTitle text='Contact us' />

                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        extraScrollHeight={Platform.OS == 'android' ? -100 : 0}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={[ContactUsStyle.containerView]}
                        showsVerticalScrollIndicator={false}>
                        <Formik
                            initialValues={contact_initial_values}
                            validationSchema={ContactSchema}
                            onSubmit={(values) => {
                                dispatch(AppThunks.dosendMassage({
                                    name: values.Name,
                                    email: values.Email,
                                    mobile:isAuth? USER?.mobile:'10101010110',
                                    message: values.Message
                                }))
                            }}
                        >
                            {props => (
                                <>
                                    <CustomInput
                                        {...props}
                                        Label='Name'
                                        name='Name'
                                        values={props.values}
                                    />
                                    <CustomInput
                                        {...props}
                                        Label='Email'
                                        name='Email'
                                        values={props.values}
                                        keyboardType='email-address'
                                    />
                                    <CustomInput
                                        {...props}
                                        Label='Message'
                                        name='Message'
                                        values={props.values}
                                        paragraph
                                    />
                                    <CustomBtn
                                        pending={loading}
                                        title='Send'
                                        onClick={() => { props.handleSubmit() }}
                                        StylesBtn={{ marginTop: 40 }}
                                        color='dark'
                                    />
                                </>
                            )}
                        </Formik>
                    </KeyboardAwareScrollView>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600',
                        fontFamily: Fonts.PoppinsMedium,
                        marginVertical: 15
                    }}>Follow Us.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '20%', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/He.magazine99')}>
                            <Facebook fill={Colors().SecondColor} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/he.magazine/')}>
                            <Instagram />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 40 }} />
                </ScrollView>


            </SafeAreaView>
        </>
    )
}

export default ContactUsScreen