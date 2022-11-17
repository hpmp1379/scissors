import React from 'react'

const Box = (props) => {
    //승패를 컴퓨터에 나오게
    let result;
    if (props.title === 'Computer' && 
        props.result !=='tie' && 
        props.result !==''){
            //컴퓨터쪽, 비기지 않았고, 결과값이 비어있지 않을때

            result = props.result === 'win' ? 'lose' : 'win';
            //내 승패여부가 승리였을때는 '패배' 아니었을때는 '승리' 로 바뀜
        } else {
            //위의 경우가 아니라면 props로 전달된 값을 그대로 사용
            result = props.result;
        }

  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        {/* img src 안에 true 면 작동, 아니면 미작동 */}
        <img src={props.item && props.item.img} className='item-img' />
        <h2>{result}</h2>
    </div>
  )
}

export default Box