import './App.css';
import React from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/Post.css';
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {

    const posts = [
        { id: 1, title: 'JavaScript', body: 'Язык программирования'},
        { id: 2, title: 'PHP', body: 'Язык программирования для бэкенда'},
        { id: 3, title: 'Assembler', body: 'Низкоуровневый ЯП'}
    ]

    return (
        <>
            <Counter/>
            <ClassCounter/>
            <Post/>
            <PostList/>

            {posts.map(
                post => <Post post={post} key={post.id}/>
            )};

        </>
    );
}

export default App;
