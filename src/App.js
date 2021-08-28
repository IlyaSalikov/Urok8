import './App.css';
import React from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/Post.css';
import Post from "./components/Post";

function App() {
    const posts = [
        { id: 1, title: 'JavaScript', body: 'Язык программирования'},
        { id: 2, title: 'PHP', body: 'Язык программирования для бэкенда'},
        { id: 3, title: 'Assembler', body: 'Низкоуровневый ЯП'}
    ];
    
    return (
        <>
            <Counter/>
            <ClassCounter/>
            {/*<Post post={{ id: 1, title: 'JavaScript', body: 'Язык программирования'}}/>*/}
            {/*<Post post={{ id: 2, title: 'PHP', body: 'Язык программирования для бэкенда'}}/>*/}
            {/*<Post post={{ id: 3, title: 'Assembler', body: 'Низкоуровневый ЯП'}}/>*/}
            {/*<Post/>*/}
            {/*<Post name={'Aleksey'} />*/}
    
            {posts.map(
                post => <Post post={post} key={post.id}/>
            )};
        </>
    );
}

export default App;
