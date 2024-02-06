import { Stack } from "expo-router";

import { useState } from "react";
import { View, StyleSheet, FlatList, Text, Pressable, TextInput, KeyboardAvoidingView, SafeAreaView, Platform } from "react-native";
import AddTodo from "../../../scr/components/addTodo";
import TodoListItem from "../../../scr/components/todoListItem";
import { produce } from "immer";

export type Todo={
    id:number,
    title:string,
    isComplete:boolean
}

const data = [
    {
        id:1,
        title: 'ihdse esfij efwief wi f',
        isComplete: true
    },
    {
        id:2,
        title: 'ihdse esfij efwief wi f',
        isComplete: false
    },
    {
        id:3,
        title: 'ihdse esfij efwief wi f',
        isComplete: false
    },
    {
        id:4,
        title: 'ihdse esfij efwief wi f',
        isComplete: true
    },
    {
        id:5,
        title: 'ihdse esfij efwief wi f',
        isComplete: false
    },
]



const TodoScreen = () => {
    const [tasks, setTasks] = useState<Todo[]>(data)


    function toggleComplete(i: number) {
        setTasks( (prev)=> {
            let temp = [...prev];
            temp[i].isComplete = !temp[i].isComplete;
            return temp;
        })
    }

    function deleteTodo(i:number){
        // setTasks(prev => prev.filter((p,index)=> index !== i))
        setTasks(prev => {
            const temp = [...prev];
            
             temp.splice(i,1)
             return temp;
        })
    }

    return (
        <KeyboardAvoidingView style={{
      flex:1,
            padding: 10
        }}
        behavior={Platform.OS === 'ios'?'padding':'height'}
        keyboardVerticalOffset={Platform.OS === 'ios'? 100:100}>
        <Stack.Screen options={{headerShown:false}} />
            <SafeAreaView>
            <FlatList
                data={tasks}
                contentContainerStyle={{
                    gap: 10,
                    marginVertical:20,
                    padding:10
                }}
                keyExtractor={(item)=>item.id}
                renderItem={({ item, index }) => (
                 <TodoListItem task={item} onToggle={()=>toggleComplete(index)} onDelete={()=>deleteTodo(index)}/>
                )}
                ListFooterComponent={
                   <AddTodo addTo={(newTodo:Todo)=>setTasks(prev=>[...prev,newTodo])}/>
                }
            />

            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default TodoScreen;

const styles = StyleSheet.create({
   
})