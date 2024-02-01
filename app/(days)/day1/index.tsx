
import { Stack, router } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';


const steps = [
  {
    title:'Mix and Match',
    desc:'Want pizza with your pad thai or a burrito with your burger? We got you! Choose any combination of 100+ tasty dishes.',
    url:'https://assets.materialup.com/uploads/57a21feb-709a-43d0-8ba1-d066ccb48390/preview.jpg'
  },
  {
    title:'Pay together or separately',
    desc:'Say hello to easier group ordering! Everyone in the group can order with their own device and payment method.',
    url:'https://img.freepik.com/premium-vector/bank-transfer-isolated-cartoon-vector-illustrations_107173-21789.jpg'
  },
  {
    title:'Earn rewards',
    desc:'Each order is a chance to earn StarPoints you can cash in for real food. Better yet, your points never expire!.',
    url:'https://cdni.iconscout.com/illustration/premium/thumb/award-badge-8163091-6551331.png?f=webp'
  }
]
const Day1 = () => {


  const [currentIndex,setCurrentIndex] = React.useState(0)
  
  const data = steps[currentIndex]

  const handleContinue = ()=>{

    if(currentIndex >= steps.length -1)
    handleSkip()
else  setCurrentIndex(prev=>prev+1);

  }

  const handleSkip = ()=>{
    router.back()
  }
  return (
    <View style={styles.container}>
        <Stack.Screen options={{headerTitle:'Day 1'}}/>
      <View style={{alignItems:'center',width:'100%'}}>
        
   <Image
    source={{uri:data.url}}
    style={{width:'80%',aspectRatio:1}}/>

</View>

<View style={{flex:1}}>


    <Text style={styles.title}>{data.title}</Text>

    <Text style={styles.desc}>{data.desc}</Text>
    </View>
    <Pressable onPress={handleContinue} style={styles.button}>
      <Text style={styles.buttonText}>Continue</Text>
    </Pressable>

    <Pressable onPress={handleSkip} style={{width:'100%'}}>
    <Text style={{color:'orange',fontSize:16,fontWeight:"600",textAlign:'right'}} >I'm too hungry for this</Text>
    </Pressable>
    </View>
    );
};

export default Day1;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    alignItems:'flex-start',
    padding:20,
    flex:1
  },
  title:{
    fontWeight:"900",
fontSize:32
  },
  desc:{
fontWeight:"400",
fontSize:20
  },
  button:{
    backgroundColor:'orange',
    padding:10,
    borderRadius:50,
    marginVertical:40,
    alignSelf:'center'
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  }
});
