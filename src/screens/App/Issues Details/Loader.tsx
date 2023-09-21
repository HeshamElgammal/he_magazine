import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SkeletonPlaceholder } from "rn-skeleton-placeholder";
import { Colors } from "theme/colors";
import { width } from "theme/sizes";

export const Loader = () => {
    return (
        <>
            <SkeletonPlaceholder
                itemWidth={width * .9}
                itemHeight={200}
                itemStyle={styles.Image}
            />
            <SkeletonPlaceholder
                itemWidth={width * .6}
                itemHeight={20}
                itemStyle={styles.Text}
            />

            <FlatList
                data={[{}, {}, {}, {}, {}, {}, {}, {}]}
                style={{ marginTop: 30 }}
                renderItem={() => {
                    return (
                        <SkeletonPlaceholder
                            itemWidth={160}
                            itemHeight={15}
                            itemStyle={styles.Description}
                        />
                    )
                }}
            />

        </>
    )
}

const styles = StyleSheet.create({
    Image: {
        backgroundColor: Colors().SixthColor,
        marginVertical: 25
    },
    Text: {
        backgroundColor: Colors().SixthColor,
        marginBottom: 15
    },
    HalfText: {
        backgroundColor: Colors().SixthColor,
        borderWidth: 1,
        borderColor: Colors().SixthColor,
        borderRadius: 12,
        marginTop: 10,
        width: '50%',
        marginLeft: 20
    },
    Description: {
        backgroundColor: Colors().SixthColor,
        borderWidth: 1,
        borderColor: Colors().SixthColor,
        borderRadius: 12,
        marginTop: 7,
        width: '90%',
        alignSelf: 'center'
    }
})