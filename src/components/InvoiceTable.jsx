import './InvoiceTable.css';

import AddButton from './AddButton.jsx'
import Description from './Description.jsx'
import Hours from './Hours.jsx'
import ModeButtons from './ModeButtons.jsx'
import Rate from './Rate.jsx'
import TableHeader from './TableHeader.jsx'
import TableRow from './TableRow.jsx'

import { useState } from 'react'

let globalId = 4

const InvoiceTable = (props) => {

    const {initialData} = props

    const [currentData, setCurrentData] = useState(initialData)

    const addRow = () => {
        const dataCopy = [...currentData]

        const newRow = {
            id: globalId,
            description: 'Description',
            rate: '',
            hours: ''
        }

        dataCopy.push(newRow)

        setCurrentData(dataCopy)

        globalId++

    }

    const deleteRow = (id) => {
        const filteredList = currentData.filter((row) => row.id !== id)
        setCurrentData(filteredList)
    }

    const row = currentData.map((el) => <TableRow
        initialInvoiceData={el}
        initialEditMode={false}
        key={el.id}
        deleteRow={() => deleteRow(el.id)}
        currentData={currentData}
        setCurrentData={setCurrentData}
    />)

  return (
    <div>
        <table>
            <thead>
                <TableHeader />
            </thead>

            <tbody>
                {row}
                {/* <tr>
                    <ModeButtons isEditing={false}/>
                    <Description isEditing={false} value='Pilot'/>
                    <Rate isEditing={false} value='300'/>
                    <Hours isEditing={false} value='6'/>
                </tr>

                <tr>
                    <ModeButtons isEditing={true}/>
                    <Description isEditing={true} value='Racing'/>
                    <Rate isEditing={true} value='450'/>
                    <Hours isEditing={true} value='60'/>
                </tr> */}
            </tbody>

            <tfoot>
                <AddButton addRow={addRow}/> 
            </tfoot>
        </table>
    </div>
  )
}

export default InvoiceTable