import './InvoiceTable.css';
import axios from 'axios';

import AddButton from './AddButton.jsx'
import TableHeader from './TableHeader.jsx'
import TableRow from './TableRow.jsx'

import { useState, useEffect } from 'react'



const InvoiceTable = () => {

    // const {initialData} = props

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get('/invoices')
        .then((res) => {
            // console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })

    }, [])

    const addRow = () => {

        axios.post('/invoice', {description: 'Job Entry'})
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })

        // const dataCopy = [...currentData]

        // const newRow = {
        //     id: globalId,
        //     description: 'Description',
        //     rate: '',
        //     hours: ''
        // }

        // dataCopy.push(newRow)

        // setCurrentData(dataCopy)

        // globalId++

    }

    const deleteRow = (id) => {

        axios.delete(`/invoice/${id}`)
        .then((res) => {
            setCurrentData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })

        // const filteredList = currentData.filter((row) => row.id !== id)
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