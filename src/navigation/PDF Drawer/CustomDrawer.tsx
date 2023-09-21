
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, TouchableOpacity, Platform, FlatList, Text } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from 'theme/colors';
import { Logo } from 'assets/svgs';
import { useNavigation } from '@react-navigation/native';
import App, { selectIssueDetail } from 'src/redux/app';
import FastImage from 'react-native-fast-image'

const { height } = Dimensions.get("window")

const CustomSidebarMenu = (props: any) => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const IssueDetail = useSelector(selectIssueDetail)
    const [id, setId] = React.useState<number>()
    // const Ind = IssueDetail?.items?.findIndex((obj: any) => obj.id == id)
    // useEffect(() => {
    //     id != -1 && dispatch(App.changeArticleIndex(Ind))
    // }, [Ind])
    return (
        <DrawerContentScrollView style={{ backgroundColor: Colors().SecondColor, paddingHorizontal: 20, paddingTop: 15, }} {...props}>
            <SafeAreaView style={styles.Container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Logo />
                </View>
                <FlatList
                    style={{ marginTop: 20 }}
                    data={IssueDetail?.items ? [...IssueDetail?.items?.filter((key: any) => key?.type == 'article')]?.sort((a: any, b: any) => new Date(b?.date) - new Date(a?.date)) : []}
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <TouchableOpacity onPress={() => {
                                    dispatch(App.changePDF(true))
                                    // setId(item?.id)
                                    dispatch(App.changeArticleIndex(IssueDetail?.items?.findIndex((obj: any) => obj.id == item?.id)))
                                    props.navigation.closeDrawer()
                                }} style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    paddingLeft: 5
                                }}>
                                    <FastImage
                                        style={{
                                            height: 70,
                                            width: 60,
                                            borderRadius: 20,
                                            marginRight: 10
                                        }}
                                        source={{ uri: item?.model?.mobile_image }}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                    <View>
                                        <Text numberOfLines={1} style={{ color: Colors().FirstColor, fontSize: 14, fontWeight: '700', width: '60%' }}>{item?.model?.title}</Text>
                                        <Text numberOfLines={1} style={{ color: Colors().FirstColor, fontSize: 12, width: '60%' }}>{item?.model?.short_description}</Text>
                                    </View>

                                </TouchableOpacity>
                            </>
                        )
                    }}
                />
            </SafeAreaView>
        </DrawerContentScrollView>

    );
};

const styles = StyleSheet.create({
    Container:
    {
        height: height * .8,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: Colors().SecondColor,
    },
    Close:
    {
        alignSelf: 'flex-end',
    },
    MainMenu:
    {
        fontSize: 15,
        textAlign: 'center',
        color: '#000',
        marginTop: Platform.OS == 'ios' ? 30 : 20,
        marginBottom: 40,
        fontWeight: '700'
    },
    Seprator:
    {
        height: 1.5,
        backgroundColor: '#2E2E2E1F',
        width: '100%',
        alignSelf: 'center',
        marginVertical: 20
    },
    LogOutButton:
    {
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    LogOutText:
    {
        fontSize: 17,
        textAlign: 'right',
        color: '#2E2E2E',
        marginRight: 13,
        fontWeight: '600',
    }

});

export default CustomSidebarMenu;