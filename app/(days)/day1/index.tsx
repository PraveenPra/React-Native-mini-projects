
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { BounceInLeft, BounceOutDown, BounceOutRight, FadeIn, FadeOut, SlideInLeft, SlideInRight } from 'react-native-reanimated';


const steps = [
  {
    title: 'Mix and Match',
    desc: 'Want pizza with your pad thai or a burrito with your burger? We got you! Choose any combination of 100+ tasty dishes.',
    url: 'https://assets.materialup.com/uploads/57a21feb-709a-43d0-8ba1-d066ccb48390/preview.jpg'
  },
  {
    title: 'Pay together or separately',
    desc: 'Say hello to easier group ordering! Everyone in the group can order with their own device and payment method.',
    url: 'https://img.freepik.com/premium-vector/bank-transfer-isolated-cartoon-vector-illustrations_107173-21789.jpg'
  },
  {
    title: 'Earn rewards',
    desc: 'Each order is a chance to earn StarPoints you can cash in for real food. Better yet, your points never expire!.',
    url: 'https://cdni.iconscout.com/illustration/premium/thumb/award-badge-8163091-6551331.png?f=webp'
  }
]
const Day1 = () => {


  const [currentIndex, setCurrentIndex] = React.useState(0)

  const data = steps[currentIndex]

  const handleContinue = () => {
    const lastScreen = currentIndex >= steps.length - 1;

    if (lastScreen)
      handleSkip()
    else setCurrentIndex(prev => prev + 1);

  }

  const handleBack = () => {
    const firstScreen = currentIndex === 0;
    if (firstScreen)
      handleSkip();
    else setCurrentIndex(prev => prev - 1);
  }

  const handleSkip = () => {
    router.back()
  }


  //gestures
  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT)
      .onEnd(handleContinue),
    Gesture.Fling().direction(Directions.RIGHT)
      .onEnd(handleBack))

  return (<GestureDetector gesture={swipes}>
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: 'Day 1' }} />
      <Animated.View entering={FadeIn} exiting={FadeOut} style={{ alignItems: 'center', width: '100%' }}>

        <Image
          source={{ uri: data.url }}
          style={{ width: '80%',objectFit:'contain', aspectRatio: 0.8 }} />

      </Animated.View>

      <View style={{ flex: 1 }}>


        <Animated.Text entering={SlideInRight} exiting={SlideInLeft} style={styles.title}>{data.title}</Animated.Text>

        <Animated.Text entering={SlideInRight.delay(300)} exiting={SlideInLeft} style={styles.desc}>{data.desc}</Animated.Text>
      </View>


      <Pressable onPress={handleContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>

      <View style={{ flexDirection: 'row',justifyContent:'space-between',width:'100%' }}>

        <View style={styles.stepIndicatorContainer}>
          {steps.map((step, index) =>
            <View key={index}
              style={[styles.stepsIndicator, { backgroundColor: index === currentIndex ? "red" : 'gray' }]} />
          )}
        </View>

        <Pressable onPress={handleSkip} >
          <Text style={styles.skipText} >I'm too hungry for this</Text>
        </Pressable>
      </View>
    </View>
  </GestureDetector>);
};

export default Day1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    padding: 20,
    flex: 1
  },
  title: {
    // fontWeight: "900",
    fontSize: 28,
    fontFamily:'Inter_900Black',
    textTransform:'uppercase'
  },
  desc: {
    // fontWeight: "400",
    fontSize: 28,
    fontFamily:'AmaticBold'
  },
  button: {
    backgroundColor: '#fe6e49',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginVertical: 40,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  skipText: { color: '#fe6e49', fontSize: 20, fontWeight: "600", textAlign: 'right' ,
textTransform:'uppercase',
fontFamily:'AmaticBold'
},

  //steps
  stepIndicatorContainer: {
    flexDirection: 'row',
    gap: 8
  },
  stepsIndicator: {
    // flex:1,
    // height:5,

    width: 10,
    height: 10,
    backgroundColor: 'grey',
    borderRadius: 10,
  }
});
