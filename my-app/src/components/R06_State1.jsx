import React, {useState} from 'react';
// imrs 자동완성 가능


/*
  State : 컴포넌트 상태 (컴포넌트 단위 전역변수)

  useState : 함수형 컴포넌트에서 State 사용을 위해 import 하는 객체
*/
const StateEx1 = () => {

  /* 일반 변수 사용 시
    -> test 변수에 저장된 값은 A,B 변하고 있으나
    화면은 고정된 상태 (리랜더링 되지 않음)
    단순 변수 값만 변하고 있는 상태
  */
  // 컴포넌트 변수
  // let test = 'A'; // 일반 변수

  /* 상태변수 State 사용 */
  const [test, setTest] = useState('A');

  // useState('A')의 반환값
  // === ['A', 0번 index 값을 바꾸는 함수(setter)]

  // 클릭 시 수행되는 함수 (이벤트 핸들러)
  const clickHandler = () => {
    // A <-> B 왔다갔다 하는 동작 수행
    if(test === 'A') setTest('B');
    else setTest('A');
    // setTest() 함수 이용해서
    // 상태변수 test 값을 변경하면
    // 해당 컴포넌트를 리랜더링 수행!

  }

  return (
    <>
    <h1>{test}</h1>
    <button onClick={clickHandler}>Change!</button>
    
    </>
  );

}

export default StateEx1;