import React,{useState} from 'react'
import PropTypes from 'prop-types'

const NickName = props => {
    // useState훅은 배열을 리턴하는데
    // 0번에는 상태변수값, 1번에는 상태변수값을 변경하는 setter가 들어있음
    // const statement=useState('김철수'); //배열리턴 //값을 넣어주면 초기값으로 설정됨
    // console.log('statement',statement);
    const [nickName,setNickName]=useState('김철수');
    // const nickName=statement[0];
    // const setNickName=statement[1];
    const changeNickName=e=>{
        console.log('changeNickName !! call!');

        // nickName='척척박사';
        setNickName('척척박사');
        console.log('nickName: ',nickName);
    }

  return (
    <>   
     <h1>Hello~~~~~{nickName}</h1>
     <button className='btn' onClick={changeNickName}>척척박사</button>
     <button className='btn' onClick={()=>setNickName()}>척척박사</button>
    </>

  )
}

NickName.propTypes = {}

export default NickName