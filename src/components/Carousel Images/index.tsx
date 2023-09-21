import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Image, StyleSheet } from 'react-native';
import { Colors } from 'theme/colors';

const CarouselImages = ({ data }: { data: any[] }) => {
    const [activeSlide, setActiveSlide] = React.useState(0)
    return (
        <>
            <Carousel
                useScrollView
                data={data}
                renderItem={({ item }) => (<Image style={Styles.Image} source={{ uri: item }} />)}
                sliderWidth={500}
                itemWidth={300}
                inactiveSlideScale={0.95}
                inactiveSlideOpacity={1}
                enableMomentum={true}
                activeSlideAlignment={'start'}
                containerCustomStyle={Styles.slider}
                contentContainerCustomStyle={Styles.sliderContentContainer}
                activeAnimationType={'spring'}
                onSnapToItem={(index: number) => setActiveSlide(index)}
            />
            <Pagination
                dotsLength={data?.length}
                activeDotIndex={activeSlide}
                dotStyle={Styles.dotStyle}
                inactiveDotStyle={Styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                containerStyle={{
                    marginTop: -20,
                    marginBottom: -25,
                    marginLeft: -50
                }}
            />
        </>
    )
}

export default CarouselImages

const Styles = StyleSheet.create({
    dotStyle: {
        width: (10),
        height: (10),
        borderRadius: 90,
        borderColor: Colors().SecondColor,
        borderWidth: 1,
        marginRight: -8,
        overflow: 'visible'
    },
    activeDotStyle: {
        width: (10),
        height: (10),
        borderRadius: 90,
        borderColor: Colors().SecondColor,
        borderWidth: 1,
    },
    slider: {
        marginTop: -10,
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    ImagesContainer: {
        borderWidth: 1,
        borderColor: Colors().SixthColor,
        paddingVertical: 18,
        borderRadius: 12,
        marginLeft: 20,
        marginTop: 20,
        width: '100%',
        padding: 18
    },
    Image: {
        width: 300,
        height: 300,
        borderRadius: 8,
        marginRight: 20
    }
})