import React from "react";
import * as Animatable from 'react-native-animatable';
import { FlatList, TouchableOpacity } from "react-native";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";
import App, { selectArticleIndex, selectIssueDetail, selectIssueImages } from "src/redux/app";
import { width } from "theme/sizes";
import { PDFStyle } from "../styles";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";
import FastImage from 'react-native-fast-image'
import { useAppDispatch } from "src/redux/store";

const TEXTContent = ({
    setImageIndex,
    First,
    imageIndex,
    setFirst,
    show,
    setShow,
    setIndex
}: {
    setImageIndex?: any
    First?: boolean
    setFirst?: any
    show?: boolean
    setShow?: any
    imageIndex?: number
    setIndex?: any
}) => {
    const dispatch = useAppDispatch()
    const Ind = useSelector(selectArticleIndex)
    const IssueDetail = useSelector(selectIssueDetail)
    const IssueImages = useSelector(selectIssueImages)
    return (
        <>
            <View style={PDFStyle.MainContainer}>

                <View style={{ flex: 1 }}>
                    <Carousel
                        useScrollView
                        data={IssueImages}
                        sliderWidth={width * .9}
                        itemWidth={width * .9}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        enableMomentum={true}
                        initialScrollIndex={1}
                        firstItem={imageIndex}
                        activeSlideAlignment={'start'}
                        containerCustomStyle={PDFStyle.slider}
                        contentContainerCustomStyle={PDFStyle.sliderContentContainer}
                        activeAnimationType={'timing'}
                        onSnapToItem={(index: number) => {
                            setImageIndex(index)
                            setIndex((IssueDetail?.items[index]?.index))
                            dispatch(App.changeArticleIndex(0))
                        }}
                        renderItem={({ item, index }) => (
                            <ReactNativeZoomableView zoomStep={0.5} disablePanOnInitialZoom={true} onZoomBefore={() => {
                                setFirst(false)
                                setShow(false)
                            }} bindToBorders={true} onSingleTap={() => {
                                setShow(!show)
                                setFirst(false)
                            }} initialZoom={1} maxZoom={10} minZoom={1}>
                                {/* {alert(item?.id)} */}
                                <FastImage
                                    style={[PDFStyle.BigImage, { height: '95%' }]}
                                    source={{ uri: item?.image }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </ReactNativeZoomableView>
                        )}
                    >

                    </Carousel>
                    {
                        show && <Animatable.View animation={First ? "" : "fadeInUpBig"} style={{ height: '25%' }}>
                            <FlatList
                                horizontal
                                data={IssueImages}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <>
                                        <TouchableOpacity activeOpacity={.8} style={{}} onPress={() => {
                                            setIndex((IssueDetail?.items[index]?.index))
                                            dispatch(App.changeArticleIndex(0))
                                            // setIndex(IssueDetail?.items?.map((object: any) => object.id).indexOf(IssueImages[index]?.id))
                                            setImageIndex(index)
                                            setFirst(false)
                                        }}>
                                            <FastImage
                                                style={PDFStyle.smallImage}
                                                source={{ uri: item?.image }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </TouchableOpacity>
                                    </>
                                )}
                            />
                        </Animatable.View>
                    }
                </View>
            </View>

        </>
    )
}

export default TEXTContent