import { Stack } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";
import { View, StyleSheet, FlatList, Text, Pressable, TextInput, KeyboardAvoidingView, SafeAreaView, Platform } from "react-native";


const data = [
    {
        title: 'ihdse esfij efwief wi f',
        isComplete: true
    },
    {
        title: 'ihdse esfij efwief wi f',
        isComplete: false
    },
    {
        title: 'ihdse esfij efwief wi f',
        isComplete: false
    },
    {
        title: 'ihdse esfij efwief wi f',
        isComplete: true
    },
    {
        title: 'ihdse esfij efwief wi f',
        isComplete: false
    },
]

interface P{
    title: string, isComplete: boolean
}

const TodoScreen = () => {
    const [tasks, setTasks] = useState(data)
    const [newTask, setNewTask] = useState<string>('')


    function toggleComplete(i: number) {
        setTasks( (prev)=> {
            let temp = [...prev];
            temp[i].isComplete = !temp[i].isComplete;
            return temp;
        })
    }
    return (
      
        <SafeAreaView>
            <Stack.Screen options={{headerShown:false}} />
              <KeyboardAvoidingView style={{
            // padding: 10
        }}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios'? 100:0}>
            <FlatList
                data={tasks}
                contentContainerStyle={{
                    gap: 10,
                    marginVertical:20
                }}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => toggleComplete(index)}
                        style={styles.taskContainer}>
                        {item?.isComplete ? <FontAwesome5 name="check-circle" size={24} color="black" /> : <FontAwesome5 name="circle" size={24} color="black" />}
                        <Text>{item.title}</Text>
                    </Pressable>
                )}
                ListFooterComponent={
                    <View style={[styles.taskContainer,{backgroundColor:'wheat',borderRadius:50,flex:1,marginBottom:20}]}> 
                        <FontAwesome5 name="plus" size={16} color="grey" />
                        <TextInput placeholder="Add new" value={newTask}
                        onChangeText={(e)=>setNewTask(e)}
                        autoFocus
                        
                        onEndEditing={()=>{
                            setTasks((prev)=>
                                [...prev,{title:newTask,isFinished:false}]
                            )
                        setNewTask('')}
                        }/>
                        
                    </View>
                }
            />
        </KeyboardAvoidingView>

            </SafeAreaView>
    );
}

export default TodoScreen;

const styles = StyleSheet.create({
    taskContainer:{
        flexDirection: 'row',
        padding: 20,
        gap: 10,
        backgroundColor: 'white',
        alignItems:'center'
    }
})