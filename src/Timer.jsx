import React, { useEffect } from 'react'

const Timer = () => {
  useEffect(() => {
     const intereval = setInterval(() => {
      console.log("count 실행");
     }, 1000);

     return() =>{
      console.log("타이머 정리됨");
      clearInterval(intereval);
     };
  },[]);
  return <div>Timer</div>;
};

export default Timer;
