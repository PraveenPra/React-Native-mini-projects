import { Stack } from "expo-router";

import { useState } from "react";
import { View, StyleSheet, FlatList, Text, Pressable, TextInput, KeyboardAvoidingView, SafeAreaView, Platform, Button } from "react-native";
import AddTodo from "./_components/addTodo";
import TodoListItem from "./_components/todoListItem";
import { useStore } from "./_components/store";

export type Todo={
    id:number|string,
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
    const [filterTab, setFilterTab] = useState<'All'|'InProgress'|'Completed'>('All')


    // const filteredTodos = tasks.filter(t => {

    //     if(filterTab === 'InProgress' && t.isComplete)
    //     return false;

    //     if(filterTab === 'Completed' && !t.isComplete)
    //     return false;

    //     if(!searchQuery){
    //         return tasks
    //     }

    //     return t.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
    // })

    // function toggleComplete(i: number) {
    //     setTasks( (prev)=> {
    //         let temp = [...prev];
    //         temp[i].isComplete = !temp[i].isComplete;
    //         return temp;
    //     })
    // }

    function deleteTodo(i:number){
        // setTasks(prev => prev.filter((p,index)=> index !== i))
        setTasks(prev => {
            const temp = [...prev];
            
             temp.splice(i,1)
             return temp;
        })
    }

  
    const toggleComplete = useStore((state)=> state.toggleComplete)
    const addTodo = useStore((state)=> state.addTodo)
    const filteredTodos = useStore((state)=>state.filteredTodos(filterTab,searchQuery))


    return (
        <KeyboardAvoidingView style={{
      flex:1,
            padding: 10
        }}
        behavior={Platform.OS === 'ios'?'padding':'height'}
        keyboardVerticalOffset={Platform.OS === 'ios'? 100:100}>

        <Stack.Screen options={{title:'Todos with zustand',headerBackTitleVisible:false,
    headerSearchBarOptions:{
        // hideWhenScrolling:true
    }}} />
            <SafeAreaView edges={['bottom']} style={{flex:1}}>

                <TextInput placeholder="Search" style={{borderWidth:1,padding:2}} value={searchQuery}
                onChangeText={(value)=>setSearchQuery(value)}/>

            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <Button onPress={()=>setFilterTab('All')} title="All"/>
                <Button onPress={()=>setFilterTab('InProgress')} title="InProgress"/>
                <Button onPress={()=>setFilterTab('Completed')} title="Completed"/>
               
            </View>
            <FlatList
                data={filteredTodos}
                contentContainerStyle={{
                    gap: 10,
                    marginVertical:20,
                    padding:10
                }}
                keyExtractor={(item)=>item.id}
                renderItem={({ item, index }) => (
                 <TodoListItem task={item} onToggle={()=>toggleComplete(item.id)} onDelete={()=>deleteTodo(index)}/>
                )}
                ListFooterComponent={
                   <AddTodo addTo={addTodo}/>
                }
            />

            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default TodoScreen;

const styles = StyleSheet.create({
   
})