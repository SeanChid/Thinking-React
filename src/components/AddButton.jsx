import React from 'react'

const AddButton = (props) => {

  const {addRow} = props

  return (
    <tr>
      <td></td>
      <td colSpan='4'>
        <button onClick={addRow}>Add</button>
      </td>
    </tr>
  )
}

export default AddButton