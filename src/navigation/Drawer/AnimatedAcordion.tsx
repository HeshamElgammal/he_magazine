import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useAppDispatch } from 'src/redux/store';
import { useSelector } from 'react-redux';
import { CategoryDrawer, DownArrow } from 'assets/svgs';
import { Colors } from 'theme/colors';
import Fonts from 'theme/fonsFamily';
import { useNavigation } from '@react-navigation/native';
import App, { selectHomeCategories } from 'src/redux/app';

interface props {
  service?: any;
  SelectedIndex: number
  close: any;
}

const AnimatedAcordion: React.FC<props> = ({
  service,
  SelectedIndex,
  close
}) =>
(
  <View style={styles.containerStyle}>
    <AccordionItem close={close} service={service} SelectedIndex={SelectedIndex}  />
  </View>
);

const AccordionItem = ({ service, SelectedIndex, close }) => {
  const shareValue = useSharedValue(0);
  const navigation = useNavigation();
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = useAnimatedStyle(() => ({
    height: interpolate(shareValue.value, [0, 1], [0, bodySectionHeight])
  }));

  const iconStyle = useAnimatedStyle<any>(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(shareValue.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });

  const toggleButton = () => {
    if (shareValue.value === 0) {
      shareValue.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    }
    else {
      shareValue.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    }
  };

  const dispatch = useAppDispatch()
  const HomeCategories = useSelector(selectHomeCategories)

  return (
    <View style={styles.subContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnStyle}
        onPress={toggleButton}>
        <CategoryDrawer />
        <Animated.View style={iconStyle}>
          <DownArrow />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[styles.descStyle, bodyHeight]}>
        <View
          style={styles.bodyContainer}
          onLayout={event => { setBodySectionHeight(event.nativeEvent.layout.height); }}>
          <FlatList
            data={HomeCategories}
            style={{ marginTop: 20 }}
            ItemSeparatorComponent={() => <View style={{ height: 1, width: '100%', marginVertical: 5 }} />}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => {
                toggleButton()
                close()
                dispatch(App.changeCategoryIndex(index))
              }} style={[styles.Row2, {
                backgroundColor: SelectedIndex == index ? Colors().Red : Colors().SecondColor,
                paddingHorizontal: 15,
                width: '90%',
                borderRadius: 7
              }]}>
                <Text style={[styles.Text, { color: SelectedIndex == index ? Colors().White : Colors().SixthColor }]}>{item?.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Animated.View>

    </View>
  );
};



export default AnimatedAcordion;


export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  Text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors().SixthColor,
    maxWidth: '90%',
    fontFamily: Fonts.PoppinsMedium,
  },
  Row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
  },

  descStyle: {
    overflow: 'hidden',
  },
  bodyContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingBottom: 20,
    width: '100%'
  },
});
