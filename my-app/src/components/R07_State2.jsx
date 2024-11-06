import React, { useState } from 'react';

/* 초기값 얻어와 1씩 증가감소 */
const StateEx2 = (props) => {
  // 상태 State 변수 선언
  // -> 상태 변수 count 값이 변할 때마다 
  // 컴포넌트가 re-randering 진행
  const [count, setCount] = useState(props.init); // init 은 문자값

  // + 버튼 클릭 시에 대한 동작
  const plusHandler = () => {
    setCount( Number(count) + 1 ); // 1증가
  }

  // - 버튼 클릭 시 
  const minusHandler = () => {
    setCount( Number(count) - 1 ); // 1감소
  }

  return (

    <div className='count-container'>

    <button className='minus-btn btn' onClick={minusHandler}>-</button>
    <h1>{count}</h1>
    <button className='plus-btn btn' onClick={plusHandler}>+</button>

    </div>

  );

}

export default StateEx2;