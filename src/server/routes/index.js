const {getTransactions, getTransaction, addTransaction, deleteTransaction} = require('../controllers');

// Schema for transaction object
const Transaction = {
    type: 'object',
    properties: {
        id: {type: 'integer'},
        merchantDetails: {type: 'string'},
        postedAmountInCents: {type: 'integer'}
    }
};

// schema for all transactions
const allTransactionOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                transactions: Transaction
            }
        }
    },
    handler: getTransactions
};
// schema for single transaction
const singleTransactionOpts = {
    schema: {
        response: {
            200: Transaction
        }
    },
    handler: getTransaction
};


function getRoutes(fastify, options, done) {

    fastify.get('/api/transactions', allTransactionOpts);

    fastify.get('/api/transactions/:id', singleTransactionOpts);

    fastify.post('/api/transaction', async (req, reply) => {

        let transaction = req.body.transaction;
        createTransaction(transaction);
        console.log(transactionCache);
        reply.send({
            error: false,
            username: req.body.username
        });
    });

    done();
}


module.exports = getRoutes;