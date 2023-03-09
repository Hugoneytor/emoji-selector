import React from 'react'
import styles from './styles/emojiPicker.module.scss'

const EmojiButton = ({ emoji, onClick }) => {

  const handleClick = () => {
    onClick(emoji)
  }

  return (
    <button className={styles.emojiButton} onClick={handleClick}>{emoji.symbol}</button>
  )
}

export default EmojiButton