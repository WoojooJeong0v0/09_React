import React, { useState, useContext } from 'react';
import TodoListContext from '../contexts/TodoListContext';
import axios from 'axios';

/* 로그인 컴포넌트 */
const LoginComponent = () => {

  // 전역변수 Context 얻어와서 구조 분해 할당
  const {loginMember, setLoginMember, todoList, setTodoList} = useContext(TodoListContext);

  // 상태변수 선언
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // 로그인 함수 이벤트 핸들러
  const login = () => {
    axios.post('http://localhost:8080/todo/login', {
      "todoMemberId" : id,
      "todoMemberPw" : pw
  })
  .then(response => {
    console.log(response.data);

    // 응답 데이터 구조 분해 할당
    const {loginMember, todoList} = response.data;

    // 로그인 실패 시
    if(loginMember === null){
      alert('아이디 또는 비밀번호가 일치하지 않습니다');
      return;
    }

    // 로그인 성공 시 
    setId('');
    setPw(''); // 입력된 id, pw 삭제

    // context로 전달 받은 부모 상태변수 값 변경 setter 이용해서
    // 값 변경
    setLoginMember(loginMember);
    setTodoList(todoList);
    // 자식쪽에서 부모 상태값 바꿔서 리랜더링 - 상태끌어올리기
  })
  .catch(err=>console.error(err));

  }

  // 로그아웃 이벤트 핸들러
  const logout = () => {
    setLoginMember(null);
  }

  return(
    <div className="login-container">
    {/* 로그인이 안 되어있을 경우 */}
    { loginMember === null && (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <td>
            <input type="text" onChange={e => setId(e.target.value)} value={id} />
          </td>
        </tr>

        <tr>
          <th>PW</th>
          <td>
            <input type="password" onChange={e => setPw(e.target.value)} value={pw} />
          </td>
          <td>
            <button onClick={login} >Login</button>
          </td>
        </tr>
      </tbody>
    </table>
    )}

    {/* 로그인이 되어있을 경우 */}
    { loginMember && (
      <button onClick={logout}>Logout</button>
    )}
  </div>

  );
}


export default LoginComponent;