import { Invoice } from "./model.js"

const ctpln = await Invoice.create({
    description: 'Content plan',
    rate: 50,
    hours: 4
})

const cpywrt = await Invoice.create({
    description: 'Copy writing',
    rate: 50,
    hours: 2
})

const wbds = await Invoice.create({
    description: 'Website design',
    rate: 50,
    hours: 5
})

const wbdv = await Invoice.create({
    description: 'Website Development',
    rate: 100,
    hours: 5
})