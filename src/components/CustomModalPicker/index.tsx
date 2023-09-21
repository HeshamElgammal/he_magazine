import { StyleSheet, Text, View, TextInputProps, Platform, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heightPixel, theme, widthPixel } from 'theme/sizes'
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';
import Modal from 'react-native-modal';

const CustomModalPicker = ({
    data,
    name,
    Label,
    values,
    touched,
    disabled,
    errors,
    handleChange,
    setFieldValue,
    ...props
}: {
    data: any[];
    name: string;
    Label?: string,
    values: any,
    disabled?: boolean
    handleChange: any;
    touched?: any;
    errors?: any;
    setFieldValue?: any;
} & TextInputProps) => {
    const [show, setShow] = useState(false)
    const [Selected, setSelected] = useState(-1)
    const ind = data.findIndex(x => x?.id === (values[name.replace(/\s/g, '')]?.id))
    useEffect(() => {
        (values[name.replace(/\s/g, '')]?.id) > 0 && setSelected(ind)
    }, [ind])

    return (
        <View style={[styles.container,]}>
            <Text style={[styles.label,]}>{Label}</Text>
            <TouchableOpacity disabled={disabled} onPress={() => { setShow(true) }}
                style={[styles.inputContainer]}>
                <Text style={styles.Text}>{Selected > -1 ? data[Selected]?.name : null}</Text>
            </TouchableOpacity>
            {errors[name.replace(/\s/g, '')] && <Text style={[styles.error,]}>{errors[name.replace(/\s/g, '')]}</Text>}


            <Modal
                isVisible={show}
                onBackButtonPress={() => setShow(false)}
                onBackdropPress={() => setShow(false)}
                style={styles.Modal} >
                <View style={styles.ModalContainer}>
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={styles.ItemSeparatorComponent} />}
                        renderItem={({ item, index }) => (
                            <>
                                <TouchableOpacity
                                    onPress={() => {
                                        setFieldValue(name.replace(/\s/g, ''), item)
                                        setSelected(index)
                                        setShow(false)
                                    }}
                                    activeOpacity={.8}
                                    style={styles.coloum}>
                                    <Text style={styles.Text}>{item?.name}</Text>
                                    <View style={styles.circle}>
                                        {index == Selected && <View style={styles.Dot} />}
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                    />
                </View>
            </Modal>
        </View>
    )
}

export default CustomModalPicker

const styles = StyleSheet.create({
    container: {
        width: '47.5%',
        marginTop: heightPixel(20),
    },
    label: {
        fontSize: (15),
        marginBottom: 5,
        fontWeight: "400",
        fontFamily: Fonts.PoppinsMedium,
        color: Colors().SecondColor
    },
    error: {
        fontSize: (12),
        fontWeight: "400",
        marginTop: heightPixel(5),
        textAlign: 'center',
        color: Colors().Red,
        fontFamily: Fonts.PoppinsMedium
    },
    inputContainer: {
        width: '100%',
        height: Platform.OS == "ios" ? heightPixel(50) : heightPixel(60),
        borderWidth: theme.border.thin,
        borderColor: 'rgba(19, 19, 19, 0.40)',
        backgroundColor: Colors().SecondGrey,
        borderRadius: widthPixel(10),
        marginTop: heightPixel(3),
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        padding: 7,
        color: Colors().SecondColor
    },
    input: {
        width: '100%',
        height: Platform.OS == "ios" ? heightPixel(50) : heightPixel(60),
        paddingLeft: widthPixel(5),
        color: Colors().SecondColor,
        fontFamily: Fonts.PoppinsMedium
    },
    Modal: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    ModalContainer: {
        paddingVertical: 10,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 250
    },
    ItemSeparatorComponent: {
        height: .7,
        width: '92%',
        backgroundColor: Colors().textInputPlaceholderTextColor,
        alignSelf: 'center'
    },
    coloum: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Dot: {
        height: 15,
        width: 15,
        borderRadius: 15,
        backgroundColor: Colors().SecondColor
    },
    Text: {
        fontSize: (15),
        color: Colors().SecondColor,
        fontFamily: Fonts.PoppinsMedium
    }
})