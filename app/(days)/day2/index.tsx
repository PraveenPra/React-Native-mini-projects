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
        id: 1,
        title: 'Finish reading that book you started',
        isComplete: false
    },
    {
        id: 2,
        title: 'Call your friend to catch up',
        isComplete: false
    },
    {
        id: 3,
        title: 'Write a gratitude journal entry',
        isComplete: true
    },
    {
        id: 4,
        title: 'Plan your meals for the upcoming week',
        isComplete: false
    },
    {
        id: 5,
        title: 'Take a 30-minute walk in the evening',
        isComplete: true
    }
    
]



const TodoScreen = () => {
    const [tasks, setTasks] = useState<Todo[]>(data)
    const [searchQuery, setSearchQuery] = useState<string>('')


    const filteredTodos = tasks.filter(t => {
        if(!searchQuery){
            return tasks
        }

        return t.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
    })

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
        <Stack.Screen options={{title:'Todos',headerBackTitleVisible:false,
    headerSearchBarOptions:{
        // hideWhenScrolling:true
    }}} />
            <SafeAreaView edges={['bottom']} style={{flex:1}}>

                <TextInput placeholder="Search" style={{borderWidth:1,padding:2}} value={searchQuery}
                onChangeText={(value)=>setSearchQuery(value)}/>

            <FlatList
                data={filteredTodos}
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