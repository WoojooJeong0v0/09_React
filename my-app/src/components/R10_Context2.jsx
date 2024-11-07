import React, {createContext, useContext, useState} from 'react'

/* Context 객체 생성 (변수명은 대문자로 시작) */
const Ctx = createContext();

/* 후손 컴포넌트 */
const GrandChild = () => {

  // Context 이용해서 제공된 값 
  // -> {"number" : number, "setNumber" : setNumber};
  const {number, setNumber} = useContext(Ctx); // 구조분해 할당
  // -> number, setNumber는 Parent 상태변수
  // --> 상태변수 값이 변하면 컴포넌트(Parent)가 리랜더링수행
  // 자식쪽에서 부모 상태값이 바뀌어 부모쪽이 바뀌는 형태 (끌어올리기)

  return(
    <>
    <h3>GrandChild Component</h3>
    <div>
      Parent로 전달할 값 : 
      <input 
      type="number" 
      value={number}
      onChange={e => {setNumber(e.target.value)}}
      />
    </div>
    </>
  );
}
const Child = () => {
  return(
    <>
    <h3>Child Component</h3>
    <GrandChild/>
    </>
  );
}
const Parent = () => {

  // 상태 변수 선언
  const [number, setNumber] = useState(0);

  /* Context 객체 이용해서 여러 값 제공하고 싶을 경우
    JS 객체 {} 를 이용
  */

  // const obj = {"number" : number, "setNumber" : setNumber};

  // 리액트에서 {number, setNumber} 형태로 작성하면
  // 자동으로 변수명 key, 값이 value로 변환되어
  // {"number" : number, "setNumber" : setNumber}; 처럼 변한다
  return(
    <Ctx.Provider value={{number, setNumber}}>
    <h3>Parent Component : <span className='red'>{number}</span></h3>
    <Child/>
    </Ctx.Provider>
  );
}

export default Parent;