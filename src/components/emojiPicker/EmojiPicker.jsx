import { forwardRef, useRef, useState, useEffect } from "react";
import EmojiButton from "../EmojiButton";
import emojiList from "./data";
import EmojiSearch from "./EmojiSearch";
import styles from '../styles/emojiPicker.module.scss'

export function EmojiPicker(props, refInput){

  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList)

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const containerRef = useRef(null);

  useEffect(()=>{
    window.addEventListener('click', e => {
      if(!containerRef.current.contains(e.target)){
        setIsOpen(false);
        setEmojis(emojiList);
      }
    })
  }, [])

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    if(!!q){
      const search = emojiList.filter(( emoji )=>{
        return emoji.name.toLowerCase().includes(q) || 
               emoji.keyWords.toLowerCase().includes(q)
      })
      setEmojis(search)
    }else{
      setEmojis(emojiList)
    }
  } 

  const handleOnClickEmoji = (emoji) => {
    const cursorPosition = refInput.current.selectionStart;
    const text = refInput.current.value;
    const prev = text.slice(0, cursorPosition);
    const next = text.slice(cursorPosition)

    refInput.current.value = prev + emoji.symbol + next
    refInput.current.selectionStart = cursorPosition + emoji.symbol.length
    refInput.current.selectionEnd = cursorPosition + emoji.symbol.length
    refInput.current.focus()
  }

  // const EmojiPickContainer = () => {
  //   return (
  //     <div>
  //       <EmojiSearch onSearch={handleSearch}/>
  //       <div>
  //         {emojiList.map((emoji)=>{
  //           return <div key={emoji.name}>{emoji.symbol}</div>
  //         })}
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div ref={containerRef} className={styles.inputContainer}>
      <button className={styles.emojiPickerButton} onClick={handleClick}>😎</button>

      {isOpen ? (
        <div className={styles.emojiPickerContainer}>
          <EmojiSearch onSearch={handleSearch}/>
          <div className={styles.emojiList}>
          {emojis.map((emoji)=>{
            return <EmojiButton key={emoji.name} emoji={emoji} onClick={handleOnClickEmoji} />
          })}
          </div>
        </div>       
      ) : ''}
    </div>
  )
}


export default forwardRef(EmojiPicker);