import React from 'react';

// const posts = [
//     {id: 1, title: 'JavaScript', body: 'Язык программирования'},
//     {id: 2, title: 'PHP', body: 'Язык программирования для бэкенда'},
//     {id: 3, title: 'Assembler', body: 'Низкоуровневый ЯП'}
// ]

function PostList() {
    return (
        <>
            <PostList post={{ id: 1, title: 'JavaScript', body: 'Язык программирования'}}/>
            <PostList post={{ id: 2, title: 'PHP', body: 'Язык программирования для бэкенда'}}/>
            <PostList post={{id: 3, title: 'Assembler', body: 'Низкоуровневый ЯП'}}/>
        </>
    )
}

export default PostList;