import { Pressable,Text,StyleSheet ,View} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Todo } from "..";
import { Swipeable } from "react-native-gesture-handler";


type TodoListItem = {
    task:Todo,
    onToggle:()=>void,
    onDelete:()=>void
}

const RightActions = ({onDel})=> <Pressable style={{flexDirection:'row',alignItems:'center',backgroundColor:'red'}}
onPress={onDel}>
 <FontAwesome5 name="window-close" size={24} color="wheat" /> 
</Pressable>


const TodoListItem = ({task,onToggle,onDelete}:TodoListItem) => {
    return ( <Swipeable renderRightActions={()=>(
<RightActions onDel={onDelete}/>
    )}>
        <Pressable onPress={onToggle}
        style={styles.taskContainer}>
        {task?.isComplete ? <FontAwesome5 name="check-circle" size={24} color="black" /> : <FontAwesome5 name="circle" size={24} color="black" />}
        <Text>{task.title}</Text>
    </Pressable>
    </Swipeable> );
}
 
export default TodoListItem;

const styles = StyleSheet.create({
    taskContainer:{
        flexDirection: 'row',
        padding: 20,
        gap: 10,
        backgroundColor: 'white',
        alignItems:'center'
    }
})