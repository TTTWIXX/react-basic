import ClickEvent from './component/chap01_event/ClickEvent';
import logo from './logo.svg';
import SayHello from './SayHello';


function App() {
  const looping = () => {
    const helloList = [];
    for (let i = 0; i < 5; i++) {
      helloList.push(<SayHello />);
    }
    return helloList;
  };
  
  return(

   // html이 아니다. 자동으로 react가 코드를 만들어 주는것이다.
   // 그래서 html과 조금 문법이 다르다.
   //연속적으로 태그를 쓰고 싶으면 부모태그로 싸줘야한다.
   // jsx문법에서는 스크립트 코드를 직접 사용 불가능
   // jsx: {}안을 jsx라고한다.

    <>
      <ClickEvent/>
    </>

   );
}

export default App;
