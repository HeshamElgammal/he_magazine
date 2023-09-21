


import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import GlobalHeader from "components/Header";
import { PDFStyle } from "./styles";
import { useAppDispatch } from "src/redux/store";
import App, { selectIssueDetail, selectIssueImages, selectPDF } from "src/redux/app";
import { useSelector } from "react-redux";
import CustomBottomTab from "components/CustomBottomTab/CustomBottomTab";
import PDFContent from "./Components/PDF";
import TEXTContent from "./Components/TEXT";

const PDFScreen = () => {
    const dispatch = useAppDispatch()
    const [show, setShow] = React.useState<boolean>(true)
    const [First, setFirst] = React.useState<boolean>(true)
    const [imageIndex, setImageIndex] = React.useState<number>(0)
    const [Index, setIndex] = React.useState<number>(0)
    const PDF = useSelector(selectPDF)
    const IssueImages = useSelector(selectIssueImages)
    const IssueDetail = useSelector(selectIssueDetail)

    const _fun = () => {
        let images = []
        for (let i = 0; i < IssueDetail?.items?.length; i++) {
            for (let j = 0; j < IssueDetail?.items[i]?.gallery?.length; j++) {
                images.push(IssueDetail?.items[i].gallery[j])
            }
        }
        dispatch(App?.changeIssueImages(images))
        return images
    }
    useEffect(() => {
        _fun()
    }, [])
    useEffect(() => {
        // PDF && setImageIndex(IssueDetail?.items?.map((object: any) => object.id).indexOf(IssueImages[Index]?.id))
    }, [Index])
    useEffect(() => {
        setIndex(IssueImages[imageIndex]?.index)
    }, [imageIndex])
    return (
        <>
            <SafeAreaView style={PDFStyle.SafeAreaView}>
                <View style={PDFStyle.HeadContainer}>
                    <GlobalHeader share />
                </View>
                {
                    PDF ?
                        <PDFContent
                            Index={Index}
                            setIndex={setIndex}
                            setImageIndex={setImageIndex}
                        />
                        :
                        <TEXTContent
                            imageIndex={imageIndex}
                            setIndex={setIndex}
                            First={First}
                            setFirst={setFirst}
                            show={show}
                            setShow={setShow}
                            setImageIndex={setImageIndex} />
                }
                <CustomBottomTab PDF={PDF} />
            </SafeAreaView >

        </>
    )
}

export default PDFScreen
