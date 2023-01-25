import React,{useState, useEffect} from 'react'



const Hello = () => {


    const [nickName, setNickName]=useState('익명')
    

    const sayHello=e=>{
        //상태변수 값을 변경할 때는 직접 대입하면 안되고 상태변경함수를 이용해야함
        setNickName('박사님')
    };
    
    console.log('1. nickName(component) : '+nickName);    
    //여기에 쓴 코드는 태그가 렌더링 되기 전에 실행됨.
    // const $btn = document.querySelector('.btn');
    // $btn.onclick=e=>{
    //     alert('박사님 안녕~');
    // };

    const foo = () => {
      console.log('foo!');
    };
  

    //화면이 처음 렌더링 될 때, 상태값이 변경될 때 호출
    //2번째 파라미터에 의존성 배열을 넣을 수 있음
    //빈배열 설정시 초기렌더링시에 단 1회만 호출
    //의존성 배열에 상태값을 넣으면 해당 값이 업데이트될 때 다시 호출
    useEffect(()=>{
      console.log('2. useEffect call!!');
      console.log('3. nickName(userEffect) : '+nickName);
      

      //정리함수
      //화면이 리렌더링되기 직전에 호출
      return ()=>{
        console.log('cleanup call!');
        console.log('4. nickName(cleanup) : '+nickName);
      };

    },[nickName]);


    // 컴포넌트 내 실행코드 (1순위) - 화면이 그려지기도 전에 실행
    // 렌더링 시에 실행되는 코드 (2순위)
    // useEffect에 있는 콜백 (3순위)


  return (
    <>
    {foo()}

    <h1>Hello!!!~ React {nickName}</h1>
    <button className="btn" onClick={sayHello}>척척박사</button>
    <button className="btn" onClick={()=> setNickName('석사님')}>척척석사</button>
    </>
  )
}

export default Hello