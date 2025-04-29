import React from 'react';
import { Image, Animated, Dimensions, StyleSheet } from 'react-native';

// Ekran boyutları
const { width, height } = Dimensions.get('window');

// visible prop'unun türünü boolean olarak tanımlıyoruz
interface TransitionImageProps {
  visible: boolean;
}

const TransitionImage: React.FC<TransitionImageProps> = ({ visible }) => {
  const translateY = React.useRef(new Animated.Value(height)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setTimeout(() => {
          Animated.parallel([
            Animated.timing(translateY, {
              toValue: -height,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true,
            }),
          ]).start();
        }, 500);
      });
    }
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          opacity,
        },
      ]}
    >
      <Image
        source={{
          uri: 'https://api.a0.dev/assets/image?text=react%20native%20roadmap%20with%20glowing%20lines',
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    zIndex: 1000,
  },
  image: {
    width: width * 0.9,
    height: height * 0.9,
  },
});

export default TransitionImage;
