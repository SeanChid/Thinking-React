import React from 'react'
import formatCurrency from '../utils/formatCurrency.js'

const Rate = (props) => {

  const {isEditing, value, setRate} = props

  return isEditing? (
    <td>
      $<input 
        type='text' 
        value={value}
        onChange={(e) => setRate(e.target.value)}
      />/hr
    </td>
  ) : (
    <td>
      {formatCurrency(value)}/hr
    </td>
  )
}

export default Rate