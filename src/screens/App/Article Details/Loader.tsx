import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SkeletonPlaceholder } from "rn-skeleton-placeholder";
import { Colors } from "theme/colors";

export const Loader = () => {
    return (
        <>
            <SkeletonPlaceholder
                itemWidth={160}
                itemHeight={166}
                itemStyle={styles.Big}
            />
            <SkeletonPlaceholder
                itemWidth={160}
                itemHeight={10}
                itemStyle={styles.Text}
            />
            <SkeletonPlaceholder
                itemWidth={60}
                itemHeight={10}
                itemStyle={styles.HalfText}
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
    Big: {
        backgroundColor: Colors().SixthColor,
        borderWidth: 1,
        borderColor: Colors().SixthColor,
        paddingVertical: 18,
        borderRadius: 12,
        marginLeft: 20,
        marginTop: 20,
        width: '100%',
        height: 400
    },
    Text: {
        backgroundColor: Colors().SixthColor,
        borderWidth: 1,
        borderColor: Colors().SixthColor,
        borderRadius: 12,
        marginTop: 20,
        width: '90%',
        alignSelf: 'center'
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