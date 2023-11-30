import React from 'react'

const Hours = (props) => {

  const {isEditing, value, setHours} = props

  return isEditing? (
    <td>
      <input 
        type='text' 
        value={value}
        onChange={(e) => setHours(e.target.value)}
      />
    </td>
  ) : (
    <td>
      {value}
    </td>
  )
}

export default Hours