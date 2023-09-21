import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { SkeletonPlaceholder } from "rn-skeleton-placeholder";
import App, { selectHomeCategories } from "src/redux/app";
import AppThunks from "src/redux/app/thunks";
import { useLoadingSelector } from "src/redux/selectors";
import { useAppDispatch } from "src/redux/store";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const FilterList = ({
    library,
    selectindex,
}: {
    library?: boolean;
    selectindex: number;
}) => {
    const dispatch = useAppDispatch()
    const HomeCategories = useSelector(selectHomeCategories)
    const loading = useLoadingSelector(AppThunks.getHomeCategories())
    useEffect(() => {
        dispatch(AppThunks.getHomeCategories())
    }, [])
    return (
        <>
            {
                loading ?
                    <View style={{ width: '100%', height: 45, justifyContent: 'center' }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={[{}, {}, {}, {}, {}, {}]}
                            renderItem={() => (
                                <>
                                    <SkeletonPlaceholder
                                        itemWidth={70}
                                        itemHeight={15}
                                        itemStyle={styles.Skeleton}
                                    />
                                    <SkeletonPlaceholder
                                        itemWidth={5}
                                        itemHeight={5}
                                        itemStyle={styles.dotSkeleton}
                                    />
                                </>

                            )}
                        />
                    </View>

                    :
                    <FlatList
                        data={HomeCategories}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.ListStyle}
                        renderItem={({ item, index }) => (
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 45 }}>
                                <TouchableOpacity onPress={() => dispatch(App.changeCategoryIndex(index))}
                                    style={[styles.Button, { backgroundColor: selectindex == index ? (library ? Colors().SecondColor : Colors().Red) : Colors().FirstColor, }]}>
                                    <Text style={[styles.Text, { color: selectindex == index ? Colors().White : Colors().SecondColor, }]}>{item?.name}</Text>
                                </TouchableOpacity>
                                {index != HomeCategories.length - 1 && <View style={styles.Separator} />}
                            </View>
                        )}
                    />
            }
        </>
    )
}
const styles = StyleSheet.create({
    Separator: {
        height: 5,
        width: 5,
        borderRadius: 5,
        backgroundColor: Colors().SecondColor,
        marginHorizontal: 10,
    },
    ListStyle: {
        marginTop: 10
    },
    Button: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 20,
        paddingVertical: 2.5
    },
    Text: {
        fontFamily: Fonts.PoppinsMedium,
        fontSize: (13)
    },
    Skeleton: {
        backgroundColor: Colors().SixthColor,
        // marginRight: 20,
        borderRadius: 20,
        marginTop: 25
    },
    dotSkeleton: {
        backgroundColor: Colors().SixthColor,
        marginTop: 30,
        marginHorizontal: 10,
    }
})

export default FilterList