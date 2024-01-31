import { Link } from "expo-router";
import { View ,Text,StyleSheet, Pressable} from "react-native"

type DayListItem = {
    day :number
}
export default function DayListItem({day}:DayListItem){
    return (
        <Link href={'/user'} asChild>
        <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
      </Link>
    )
}


const styles = StyleSheet.create({
 
    text: {
        fontFamily: 'AmaticBold',
      fontSize: 50,
      color:'#9b4521'
    },
    box: {
      flex: 1,//strectch as much as possible with the siblings,instead of width property use this
      aspectRatio: 1,//coz width is dynamic due to flex-1, we cant write height fixed. use aspect ratio to auto the height based on its width
      backgroundColor: '#f9ede3',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
      borderColor: '#9b4521',
      // width: 100,
      justifyContent:'center',
      alignItems:'center'
    }
  });
  