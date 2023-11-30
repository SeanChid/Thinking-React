let TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

  let globalId = 4

const handlerFunctions = {

    getInvoices: (req, res) => {
        res.send(TEST_DATA)
    },

    addInvoice: (req, res) => {
        const {description} = req.body
        const newRow = {
            id: globalId,
            description,
            rate:0,
            hours:0
        }

        TEST_DATA.push(newRow)

        globalId++

        res.send(TEST_DATA)

    },

    deleteInvoice: (req, res) => {
        const {id} = req.params

        const filteredData = TEST_DATA.filter((el) => el.id !== +id)

        TEST_DATA = filteredData

        res.send(TEST_DATA)
    },

    editInvoice: (req, res) => {
        const {id} = req.params
        const {description, rate, hours} = req.body

        const editJob = TEST_DATA.find((job) => job.id === +id)

        editJob.description = description
        editJob.rate = rate
        editJob.hours = hours

        res.send(TEST_DATA)
    }



}

export default handlerFunctions