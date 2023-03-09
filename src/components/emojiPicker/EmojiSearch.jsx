import React, { useState } from 'react'

const EmojiSearch = ( {onSearch} ) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
    onSearch(e)
  }

  return (
    <input onChange={handleChange} value={value} type="text"/>
  )
}

export default EmojiSearch