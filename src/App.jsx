import React,{useState} from 'react'; //상태를 관리할때 사용하는 hook 중 하나
import './App.css';
import Box from './components/Box'

/**
 * 1. 박스 2개 (타이트, 사진, 결과)
 * 2. 박스 하단에 가위바위보 버튼
 * 3. 버튼을 클릭 -> 클릭한 아이템이 유저박스에 보임
 * 4. 버튼을 클릭 -> 컴퓨터 아이템이 랜덤하게 선택
 * 5. 3,4,번의 승패 나눔
 * 6. 결과에 따라 박스테두리색, 글씨 색이 변함
 */


function App() {
  // 1)유저 2)컴퓨터 3)결과
  const [userSelect, setUserSelect] = useState(null); //null 비어있는 상태
  const [compSelect, setCompSelect] = useState();
  const [result, setResult] = useState(''); //문자 열이 들어가야할 경우 '' 넣는다

  //매게 변수에 사용할 객체를 생성한다
  const choice = {
    scissors: { name:'Scissors', img:'scissors.png'},
    rock: { name:'Rock', img:'rock.png'},
    paper: { name:'Paper', img:'paper.png'}
  } 
  const play = (userChoice) => {
    // console.log('onClick={name of function(parameter)} -> 자동실행 함수');
    // console.log('onClick={()=> name of function(parameter)} -> 자동 방지');
    console.log('나의 선택은 바로...' + userChoice);
    // console.log(choice.paper.img);
    console.log(userSelect);
    
    //Object.keys() javascript reference - 키캆뽑아서 배열로 저장해준다
    // let itemArray = Object.keys(choice); -randomChoice 안에 넣는다
    // console.log(itemArray);

    // 가위 바위 보 중 하나를 선택한 userChoice 가 choice 객체 안에 들어간다
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setCompSelect(computerChoice); //choice[final] 값을 받는데

    setResult( judgement(choice[userChoice], computerChoice) )//유저가 선택한 값, 컴퓨터 선택한값을 함수에 전달
  }
  const judgement = (uu, cc) => {
    /**
     * 유저 == 컴퓨터 (비김)
     * 유저 == 주먹, 컴퓨터 == 가위 (승)
     * 유저 == 주먹, 컴퓨터 == 보 (패)
     * 유저 == 가위, 컴퓨터 == 보(승)
     * 유저 == 가위, 컴퓨터 == 주먹(패)
     * 유저 == 보, 컴퓨터 == 주먹(승)
     * 유저 == 보, 컴퓨터 == 가위(패)
     */
    console.log('유저',uu, '컴퓨터',cc);
    if (uu.name === cc.name){
      return 'tie';
    // }else if ( uc.name == ''){if(cc.name==''){return '승리!';}else{return '패배';}}
    //삼한연산자
    }
    else if (uu.name === 'Rock') return cc.name === 'Scissors' ? 'win' : 'lose' ;
    else if (uu.name === 'Scissors') return cc.name === 'Paper' ? 'win' : 'lose' ;
    else if (uu.name === 'Paper') return cc.name === 'Rock' ? 'win' : 'lose' ;
  }
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log(Math.random()* 3); //choice 안에 객체가 3개 들어있어서 *3
    // you get use Object keys and .length instead of manually adding length number
    let randomItem = Math.floor(Math.random() * itemArray.length); //floor round down
    let final = itemArray[randomItem]; //0, 1, 2 를 itemArray 안에 넣는다
    console.log('final:',final)

    return choice[final];
  }

  return (
    <>
      <div className='main'>
        <Box title="Mine" item={userSelect} result={result}/>
        <Box title="Computer" item={compSelect} result={result}/>
      </div>
      <div className='main'>
        {/* <button onClick={play('scissors')}>가위</button> */}
        <button onClick={()=> play('scissors')}>👆</button>
        <button onClick={()=> play('rock')}>✊</button>
        <button onClick={()=> play('paper')}>✋</button>
      </div>
      <p className='main para'>{result}</p>
    </>
    )
}

export default App;
