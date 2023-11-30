import React from 'react'

const ModeButtons = (props) => {

    const {isEditing, changeEditMode, changeNormalMode, deleteRow} = props

    if(isEditing) {
        return <td>
            <button onClick={changeNormalMode}>Save</button>
        </td>
    }else{
        return <td>
            <button onClick={deleteRow}>Delete</button>
            <button onClick={changeEditMode}>Edit</button>
        </td>
    }

}

export default ModeButtons