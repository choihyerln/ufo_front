import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Animated, Dimensions, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';
import AlienSvg from './AlienSvg';
import { KorolJoystick } from "korol-joystick";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
console.log(SCREEN_WIDTH, SCREEN_HEIGHT);

export default function App() {
  const [characterPosition, setCharacterPosition] = useState({ x: 200, y: 200 });

  // 캐릭터 이동시키는 로직
  const handleJoystickMove = (e) => {
    // console.log(e);  // string 타입
    
    // 각도를 이용하여 이동 방향 계산
    const angleInRadian = e.angle.radian;
    const deltaX = e.force * Math.cos(angleInRadian) * 5;
    const deltaY = e.force * Math.sin(angleInRadian) * 5;

    // 현재 캐릭터 위치에서 이동
    setCharacterPosition((prevPosition) => ({
      x: Math.max(0, Math.min(prevPosition.x + deltaX, SCREEN_WIDTH-SCREEN_WIDTH*0.12)),
      y: Math.max(0, Math.min(prevPosition.y - deltaY, SCREEN_HEIGHT-SCREEN_HEIGHT*0.1)),
    }));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://i.pinimg.com/564x/1a/9f/fa/1a9ffa739e7eb822606f7d8f74d14c26.jpg" }}
        style={styles.bgImage}
      >

        <View style={styles.ladderForm}>
          <Image
            style={styles.ladder}
            source={require('./assets/img/ladder.png')}
          />
        </View>

        <View style={styles.moleForm}>
          <Image
            style={styles.mole}
            source={{ uri: "https://static.wikia.nocookie.net/pokemon/images/4/4c/%EB%94%94%EA%B7%B8%EB%8B%A4_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.png/revision/latest?cb=20170405005424&path-prefix=ko" }}
          />
        </View>

        {/* <Animated.View style={{
          left: characterPosition.x,
          top: characterPosition.y,
          alignItems: "center",
          justifyContent: 'center',
        }} />
        <LottieView
          style={styles.alien}
          source={require('./assets/json/cuteGhost.json')}
          autoPlay
          loop
        /> */}

        <View style={{
          left: characterPosition.x,
          top: characterPosition.y,
          width: SCREEN_WIDTH * 0.4,
          resizeMode: "contain"
        }}>
          <AlienSvg />
        </View>

        <GestureHandlerRootView
          style={styles.joystick}
        >
          <KorolJoystick
            color="#FFFFFF"
            radius={50}
            onMove={handleJoystickMove}
          />
        </GestureHandlerRootView>

        <Animated.View />
        <LottieView
          style={styles.roulette}
          source={require('./assets/json/roulette.json')}
          autoPlay
          loop
        />

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  bgImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  alienForm: {},
  alien: {},
  ladderForm: {
    position: "absolute",
    top: -SCREEN_HEIGHT * 0.3,
    left: -SCREEN_WIDTH * 0.025,
  },
  ladder: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_HEIGHT,
    resizeMode: "contain",
  },
  moleForm: {
    position: "absolute",
    bottom: -SCREEN_HEIGHT * 0.3,
    right: 0,
  },
  mole: {
    width: SCREEN_WIDTH * 0.1,
    height: SCREEN_HEIGHT,
    resizeMode: "contain",
  },
  roulette: {
    position: "absolute",
    left: SCREEN_WIDTH * 0.15,
    bottom: -SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_HEIGHT,
    resizeMode: "contain",
  },
  joystick: {
    position: "absolute",
    left: 5,
    bottom: 5
  },
});
