import React, { useState } from 'react';

import TodoListContext from './contexts/TodoListContext';
import SignUp from './components/SignUp';
import Login from './components/Login';
import TodoList from './components/TodoList'

import './App.css';

function App() {

  // 상태변수 선언
  // 회원가입버튼 열기/닫기 제어용 변수
  const [signUpView, setSignUpView] = useState(false);

  /* 로그인한 회원 정보 저장할 변수 */
  const [loginMember, setLoginMember] = useState(null);

  /* 로그인한 회원의 할일 목록 저장할 변수 */
  const [todoList, setTodoList] = useState([]);


  return (
    <TodoListContext.Provider value={ {loginMember, setLoginMember, todoList, setTodoList} }>
      {/* 버튼이 클릭될 때마다 signUpView 값을 변경 (T/F) */}
      <button onClick={()=>{setSignUpView(!signUpView)}}>
        {signUpView ? ('회웝가입 닫기') : ('회원가입 열기')}
      </button>

      {/* 회원가입 컴포넌트 */}
      <div className='signup-wrapper'>

        {/* 조건식 && 결과 : 조건식이 true이면 결과 출력 JS문법 */}
        {signUpView === true && (<SignUp/>)}
      </div>

      <h1>TodoList</h1>
      {/* 로그인 컴포넌트 */}
      <Login/>

      <hr/>

      {/* 로그인이 되어 있을 때 todoList 컴포넌트 출력 */}
     { loginMember && (<TodoList/>)}

     


    </TodoListContext.Provider>
  );
}

export default App;
