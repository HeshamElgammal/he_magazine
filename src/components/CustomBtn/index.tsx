import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle, Platform } from 'react-native'
import React from 'react'
import {  fontPixel, heightPixel, widthPixel } from 'theme/sizes'
import { SvgXml } from 'react-native-svg'
import { Colors } from 'theme/colors'

const CustomBtn = ({
    onClick,
    title,
    StylesBtn,
    StylesText,
    pending = false,
    color="dark"
}: {
    onClick: (event: any) => void,
    title: string,
    StylesBtn?: ViewStyle
    StylesText?: TextStyle,
    pending?: boolean,
    color?:"light"|"dark"
}) => {
    return (
        <TouchableOpacity style={[styles.btn, StylesBtn,{backgroundColor:color=="dark"?Colors().SecondColor:Colors().SecondGrey}]}
            onPress={onClick}
            disabled={pending}
        >
            {pending ? <Text style={[styles.title, StylesText,{color:color=="dark"?Colors().SecondGrey:Colors().SecondColor}]}>Loading...</Text> : <>
                <Text style={[styles.title, StylesText,{color:color=="dark"?Colors().SecondGrey:Colors().SecondColor}]}>{title}</Text>
                {title == "Logout" && <SvgXml
                    xml={`
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.125 12.0001C16.125 11.8012 16.046 11.6104 15.9053 11.4698C15.7647 11.3291 15.5739 11.2501 15.375 11.2501H4.40201L6.36301 9.57012C6.43786 9.50603 6.49936 9.42783 6.54399 9.33998C6.58862 9.25213 6.61551 9.15635 6.62313 9.0581C6.63074 8.95986 6.61893 8.86108 6.58837 8.7674C6.55781 8.67372 6.50909 8.58697 6.44501 8.51212C6.38092 8.43727 6.30272 8.37577 6.21487 8.33114C6.12702 8.28651 6.03124 8.25961 5.93299 8.252C5.83475 8.24439 5.73596 8.2562 5.64228 8.28676C5.5486 8.31732 5.46186 8.36603 5.38701 8.43012L1.88701 11.4301C1.80467 11.5005 1.73857 11.5879 1.69325 11.6863C1.64792 11.7847 1.62445 11.8918 1.62445 12.0001C1.62445 12.1085 1.64792 12.2155 1.69325 12.3139C1.73857 12.4123 1.80467 12.4997 1.88701 12.5701L5.38701 15.5701C5.53818 15.6995 5.73458 15.7636 5.93299 15.7482C6.1314 15.7329 6.31558 15.6393 6.44501 15.4881C6.57443 15.3369 6.6385 15.1405 6.62313 14.9421C6.60775 14.7437 6.51418 14.5595 6.36301 14.4301L4.40301 12.7501H15.375C15.5739 12.7501 15.7647 12.6711 15.9053 12.5304C16.046 12.3898 16.125 12.199 16.125 12.0001Z" fill="#131313"/>
                    <path d="M9.375 8C9.375 8.702 9.375 9.053 9.544 9.306C9.61679 9.41478 9.71022 9.50821 9.819 9.581C10.072 9.75 10.423 9.75 11.125 9.75H15.375C15.9717 9.75 16.544 9.98705 16.966 10.409C17.3879 10.831 17.625 11.4033 17.625 12C17.625 12.5967 17.3879 13.169 16.966 13.591C16.544 14.0129 15.9717 14.25 15.375 14.25H11.125C10.423 14.25 10.072 14.25 9.819 14.418C9.71012 14.4911 9.61668 14.5849 9.544 14.694C9.375 14.947 9.375 15.298 9.375 16C9.375 18.828 9.375 20.243 10.254 21.121C11.132 22 12.546 22 15.374 22H16.374C19.204 22 20.617 22 21.496 21.121C22.375 20.243 22.375 18.828 22.375 16V8C22.375 5.172 22.375 3.757 21.496 2.879C20.617 2 19.203 2 16.375 2H15.375C12.546 2 11.132 2 10.254 2.879C9.375 3.757 9.375 5.172 9.375 8Z" fill="#131313"/>
                  </svg>
            `}
                    style={{ marginLeft: widthPixel(10) }}
                />}
            </>}
        </TouchableOpacity>
    )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn: {
        width: "90%",
        height: Platform.OS=="ios"? heightPixel(55):heightPixel(60),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: widthPixel(10),
        backgroundColor: Colors().SecondColor,
        flexDirection: "row",
        borderWidth:.8,
        borderColor: Colors().SecondColor
    },
    title: {
        fontSize: fontPixel(20),
        color: Colors().FirstColor,
        fontWeight: "400",
       
    }
})