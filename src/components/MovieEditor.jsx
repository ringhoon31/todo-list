import React, { useRef, useState } from 'react'
import './MovieEditor.css'
const MovieEditor = ({onCreate}) => {
  const [content, setContent]=useState('')
  const inputRef = useRef()

  const onChangeContent=(e)=>{
    setContent(e.target.value)
  }

  const onKeyDown=(e)=>{
    if(e.keyCode==13){
      onSubmit()
    }

  }

  const onSubmit=()=>{
    if(content===''){
      inputRef.current.focus()
      return
    }
    onCreate(content)
    setContent('')
  }
  return (
    <div className='Editor'>
        <input 
        type="text" 
        ref={inputRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder='보고싶은 영화를 입력해 보세요.'/>
        <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default MovieEditor