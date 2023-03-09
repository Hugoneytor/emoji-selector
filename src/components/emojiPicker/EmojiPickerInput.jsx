import React, { useRef, useState } from 'react'
import EmojiPicker from './EmojiPicker'

const EmojiPickerInput = () => {

  const [input, setInput] = useState('');

  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const refInput = useRef(null)

  return (
    <div>
      <input ref={refInput} type="text" onChange={onInputChange} value={input} />
      <EmojiPicker ref={refInput}/>
    </div>
  )
}

export default EmojiPickerInput