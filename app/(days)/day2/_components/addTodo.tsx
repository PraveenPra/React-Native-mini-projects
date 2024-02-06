import { View ,TextInput,StyleSheet} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";
import { Todo } from "..";

type AddTodo = {
    addTo:(newTask:Todo)=>void;
}
const AddTodo = ({addTo}:AddTodo) => {
    const [newTask, setNewTask] = useState<string>('')

    return ( 
        <View style={[styles.taskContainer,{backgroundColor:'wheat',borderRadius:50,flex:1}]}> 
        <FontAwesome5 name="plus" size={16} color="grey" />
        <TextInput placeholder="Add new" value={newTask}
        onChangeText={(e)=>setNewTask(e)}     
        onEndEditing={()=>{
            if(!newTask){
                return;
            }
           addTo({title:newTask,isComplete:false})
        setNewTask('')}
        }/>
        
    </View>
     );
}
 
export default AddTodo;


const styles = StyleSheet.create({
    taskContainer:{
        flexDirection: 'row',
        padding: 5,
        gap: 10,
        backgroundColor: 'white',
        alignItems:'center'
    }
})