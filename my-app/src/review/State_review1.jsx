import React, { useState } from 'react';


const StateReview1 = () => {

  // 상태 변수 : 값이 변하면 컴포넌트를 리랜더링하는 변수
  const [str, setStr] = useState('');

  // 상태 변수로 배열 선언
  const [strList, setStrList] = useState([]);

  // 배열 사용 연습
  const tempList = ['aaa', 'bbb', 'ccc', 'ddd'];

  const temp2 = tempList.map((item, index) => {
    return `${index} : ${item}`; // 0: aaa
  });

  console.log(tempList);
  console.log(temp2);

  /**
   * input에 입력된 값을 화면에 그대로 출력하는 함수
   * @param {*} e 이벤트 객체(발생한 이벤트 관련 정보가 담긴 객체)
   */
  const inputStringHandler = (e) => {
   setStr( e.target.value ); //  상태변수 str 값을 입력된 값으로 변경
  }
 
  // 엔터 입력 함수
  /**
   * 엔터가 입력된 경우 수행할 함수
   * @param {*} e : 이벤트 객체 (어떤 키가 입력 되었는지 포함)
   */
  const enterHandler = (e) => {
    //  console.log(e.key);
    if(e.key === 'Enter'){ // 엔터 키가 입력된 경우

      // 상태변수 strList 값을 변경 - 덮어쓰기
      setStrList([...strList, str]);

      e.target.value = ''; // 엔터가 입력된 값을 빈칸으로 바꿔 -> 작성된 값을 삭제한다
      setStr(''); // 상태변수에 '' 빈칸대입
                  // 상태변수 값 변경 시 리랜더링 발생!
    }
  }


  return(
    <div>
      <h2>State 복습 1</h2>

        <div>
          <label htmlFor="inputString">문자열 입력 : </label>
          <input type="text"
          id="inputString" 
          onChange={inputStringHandler}
          onKeyUp={enterHandler}
          />
        </div>

      {/* 위 input 입력된 값이 출력됨 */}
      <h3>입력된 값 : {str} </h3>

      <button id="deleteBtn" onClick={() => setStrList([])}>초기화</button>

      <ul>
        <li>문자열 입력 후 엔터 입력 시 ul 태그 누적</li>
        {/* {tempList.map((item,index)=> {
          return(
            <li>{index} : {item}</li>
          );
        })} */}

          {/* strList 저장된 값 이용해 li 태그 만들어 출력 */}
        {strList.map((item,index) => {
          return(
            <li key={index}>{item}</li>
          );
        })
        }
      </ul>

    </div>
  )

}

export default StateReview1;

/**
 * 전개 연산자 (...)
 * - 배열 또는 객체의 가장 바깥쪽 괄호를 풀어주는 연산자 
 * - 배열 : 요소 추가, 복사, 배열 병합
 * - 객체 : 복사, 병합, 속성 덮어쓰기 
 *
 * 
 * - 예 ) 
 * // const temp = [1,2,3];
 * // ...temp = 1,2,3
 * 
 * // const obj = {"name : 홍길동", "age : 20"}
 * ...obj = name : 홍길동, age : 20
 */

  // 배열.map ( (item, index) => {} ) // 향상된 for문처럼 배열 요소 순차 접근

  // - 매개변수에 작성된 함수에서 반환된 값을 이용해
  // 새로운 배열을 만드는 배열 메서드 (함수)
  // item  : 요소를 하나씩 꺼내서 저장하는 변수
  // index : 현재 인덱스 