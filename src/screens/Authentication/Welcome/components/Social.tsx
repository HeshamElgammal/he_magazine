import { Google } from "assets/svgs";
import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { welcomeStyles } from "../styles";

const SocialIcon = ({
    Icon,
    loading = false,
    onPress
}: {
    Icon?: any
    loading?: boolean
    onPress?: any
}) => {
    return (
        <>
            <TouchableOpacity
                disabled={loading}
                activeOpacity={.8}
                style={welcomeStyles.Social}
                onPress={onPress} >
                {
                    loading ?
                        <ActivityIndicator size={'small'} color={'black'} />
                        :
                        <Icon />
                }
            </TouchableOpacity>
        </>
    )
}

export default SocialIcon