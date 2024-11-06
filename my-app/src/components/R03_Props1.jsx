import React from "react"; // imr 자동 완성

/* 함수형 컴포넌트 생성

 - 함수명은 무조건 대문자로 시작
*/

const PropsEx1 = (props) => {

  console.log("props : ", props);
  console.log("props.num : ", props.num);
  console.log("props.name : ", props.name);

  // if(props.name === undefined){
  //   props.name = '기본값';
  //   props.num = 0;
  // } props에는 값 대입이 불가능!!

  return( // 리턴할 값은 하나밖에 없음
    <>
    <h3 className="red">Props 예제 1</h3>

    {/* undefined 출력은 안 됨 */}
    <p>번호 : {props.num === undefined ? 0 : props.num} 
       /
       이름 : {props.name === undefined ? '기본값' : props.name} </p>
    </>
  );

}

export default PropsEx1;