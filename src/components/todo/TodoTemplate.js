import React, { useState,useEffect } from 'react'

//css로딩
import './css/TodoTemplate.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';

const TodoTemplate = () => {

    const API_BASE_URL="http://localhost:8080/api/todos";
    //할일 api데이터
    const [todos,setTodos]=useState([]);


    //할일 등록 서버 요청
    const addTodo =(todo)=>{ //자식한테 역으로 todo를 보냄
        fetch(API_BASE_URL,{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(todo)
        })
        .then(res=>res.json())
        .then(result=>{
            setTodos(result.todos);
        });
        
    };

    //할일 삭제 서버 요청
    const deleteTodo=(id)=>{
        fetch(`${API_BASE_URL}/${id}`,{
            method: 'DELETE',
            
        })
        .then(res=>res.json())
        .then(result=>{
            setTodos(result.todos);
        });
    };


     // 할 일 수정 요청 처리
  const updateTodo = todo => {

    fetch(`${API_BASE_URL}/${todo.id}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(result => {
        setTodos(result.todos);
    });
  };



    //렌더링되자마자 할 일 => todos api GET 목록 호출
    useEffect(()=>{
        fetch(API_BASE_URL)
            .then(res=>res.json())
            .then(result=>{
                console.log(result.todos);
                setTodos(result.todos)
            })
    },[]);


  return (
    <div className='todo-template'>
        <TodoHeader todoList={todos}/>
        <TodoMain todoList={todos} remove={deleteTodo} update={updateTodo}/>
        <TodoInput add={addTodo}/>
    </div>
  )
}

export default TodoTemplate