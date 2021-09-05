import './App.css';
import React from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/Post.css';
import './styles/PostList.css';
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {

    const posts = [
        { id: 1, title: 'JavaScript', body: 'Язык программирования'},
        { id: 2, title: 'PHP', body: 'Язык программирования для бэкенда'},
        { id: 3, title: 'Assembler', body: 'Низкоуровневый ЯП'},
        { id: 4, title: 'Ruby', body: 'Язык программирования'}
    ]

    return (
        <>
            <Counter/>
            <ClassCounter/>
            <Post/>
            <PostList posts={posts}/>
        </>
    );
}

export default App;
