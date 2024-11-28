import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
} from 'react-native';

import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

import MainLayout from '../layouts/MainLayout';


function HomeScreen({ navigation }) {    

    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ])

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };

    return(        
        <MainLayout>
            <ToDoList tasks={tasks}></ToDoList>
            <ToDoForm addTask={addTask} />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </MainLayout>        
    );
}

export default HomeScreen;