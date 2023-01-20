import React,{useState} from 'react'



const Hello = () => {


    const [nickName, setNickName]=useState('익명')
    

    const sayHello=e=>{
        //상태변수 값을 변경할 때는 직접 대입하면 안되고 상태변경함수를 이용해야함
        setNickName('박사님')
    };
    
    console.log('Hello nickName : '+nickName);
    //여기에 쓴 코드는 태그가 렌더링 되기 전에 실행됨.
    // const $btn = document.querySelector('.btn');
    // $btn.onclick=e=>{
    //     alert('박사님 안녕~');
    // };

  return (
    <>
    <h1>Hello!!!~ React {nickName}</h1>
    <button className="btn" onClick={sayHello}>척척박사</button>
    <button className="btn" onClick={()=> setNickName('석사님')}>척척석사</button>
    </>
  )
}

export default Hello