import { Invoice } from "./db/model.js"

// let TEST_DATA = [
//     { id: 0, description: 'Content plan', rate: 50, hours: 4 },
//     { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
//     { id: 2, description: 'Website design', rate: 50, hours: 5 },
//     { id: 3, description: 'Website development', rate: 100, hours: 5 },
//   ];

const handlerFunctions = {

    getInvoices: async (req, res) => {
        const TEST_DATA = await Invoice.findAll()
        res.send(TEST_DATA)
    },

    addInvoice: async (req, res) => {
        const {description} = req.body
        const newRow = {
            description,
            rate:0,
            hours:0
        }

        await Invoice.create(newRow)
        const TEST_DATA = await Invoice.findAll()
        res.send(TEST_DATA)

    },

    deleteInvoice: async (req, res) => {
        const {id} = req.params

        const currentEdit = await Invoice.findByPk(id)
        await currentEdit.destroy()
        const TEST_DATA = await Invoice.findAll()
        res.send(TEST_DATA)
    },

    editInvoice: async (req, res) => {
        const {id} = req.params
        const {description, rate, hours} = req.body

        const editJob = await Invoice.findByPk(id)

        editJob.description = description
        editJob.rate = rate
        editJob.hours = hours

        await editJob.save()

        const TEST_DATA = await Invoice.findAll()
        res.send(TEST_DATA)
    }



}

export default handlerFunctions