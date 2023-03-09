import React, { useRef, useState } from 'react'
import EmojiPicker from './EmojiPicker'
import styles from '../styles/emojiPicker.module.scss'

const EmojiPickerInput = () => {

  const [input, setInput] = useState('');

  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const refInput = useRef(null)

  return (
    <div className={styles.center}>
      <h1>Emoji Selector</h1>
      <p>You can choose a position to insert an emoji wherever you want</p>
      <div>
        <input className={styles.search} style={{border: '1px solid black'}} ref={refInput} type="text" onChange={onInputChange} value={input} />
        <EmojiPicker ref={refInput}/>
      </div>
    </div>
  )
}

export default EmojiPickerInput