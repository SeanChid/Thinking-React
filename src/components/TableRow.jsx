
import Description from './Description.jsx'
import Hours from './Hours.jsx'
import ModeButtons from './ModeButtons.jsx'
import Rate from './Rate.jsx'

import formatCurrency from '../utils/formatCurrency.js'
import { useState } from 'react'

const TableRow = (props) => {

  const {initialInvoiceData, initialEditMode, deleteRow, currentData, setCurrentData} = props

  const [editMode, setIsEditing] = useState(initialEditMode)
  const [description, setDescription] = useState(initialInvoiceData.description)
  const [rate, setRate] = useState(initialInvoiceData.rate)
  const [hours, setHours] = useState(initialInvoiceData.hours)

  const changeEditMode = () => setIsEditing(true)
  const changeNormalMode = () => {
    const copyData = [...currentData]

    const indexToChange = copyData.findIndex(el => el.id === initialInvoiceData.id)

    copyData[indexToChange] = {
      id: initialInvoiceData.id,
      description,
      rate,
      hours
    }


    setCurrentData(copyData)

  }

  return (
    <tr>
      <ModeButtons
        isEditing={editMode}
        changeEditMode={changeEditMode}
        changeNormalMode={changeNormalMode}
        deleteRow={deleteRow}
      />
      <Description
        isEditing={editMode} 
        value={description}
        setDescription={setDescription}
      />
      <Rate
        isEditing={editMode} 
        value={rate}
        setRate={setRate}
      />
      <Hours 
        isEditing={editMode} 
        value={hours}
        setHours={setHours}
      />
      <td>{formatCurrency(rate * hours)}</td>
    </tr>
  )
}

export default TableRow