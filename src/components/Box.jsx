import React, { useState } from 'react';

function Box({image,title,isNew}) {
    //const [변수, 변수를 변경할 수 있는 함수] = useState(넘버의 초기값) //🟡hook
    const [num, setNum] = useState(10) //hook
    //let num = 0;
  return (
    <div className='box'>
        <h2>{title}</h2>
        <img src={image} alt="" />
        <p>{isNew && <span>신입사원</span>}</p>
            <p>{num}</p>
            <button onClick={function(){
                setNum(num + 1)
                console.log(num)
            }}>추가</button>
        
    </div>
  )
}

export default Box