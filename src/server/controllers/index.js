let i = 1;
let transactionList = require('../data');

const addTrans = (transaction) => {
    transaction['id'] = i++;
    transactionList = [...transactionList, transaction];
};

const readTrans = (param) => {
    let readTransactionDetails = transactionList.forEach(transaction => {
        if (transaction.id === param) {
            return transaction;
        }
    });
    return readTransactionDetails;
};

const updateTrans = (transaction) => {

};

const deleteTrans = (params) => {
    const {id} = req.params;
    transactionList = transactionList.filter((transaction) => transaction.id !== id);
    return id;
};


const addTransaction = (req, reply) => {
    console.warn(req.body);
    addTrans(req.body);
    reply.code(201).send();
};

const getTransactions = (req, reply) => {
    reply.send(transactionList)
};

const getTransaction = (req, reply) => {
    reply.send(readTrans(id));
};

const deleteTransaction = (req, reply) => {
    console.warn(req.body);
    const id = deleteTrans(req.params);
    reply.send({message: `Transaction ${id} has been removed`});
};

const updateTransaction = (req, reply) => {
    // const { id } = req.params
    // const { name } = req.body
    //
    // items = items.map((item) => (item.id === id ? { id, name } : item))
    //
    // item = items.find((item) => item.id === id)
    //
    // reply.send(item)
};


module.exports = {
    addTransaction,
    getTransactions,
    getTransaction,
    deleteTransaction
}