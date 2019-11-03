
const opts = {
    users: {
        name: {
            alias: 'n',
            demand: true,
            describe: 'El nombre del nuevo usuario'
        },
        document: {
            alias: 'd',
            demand: true,
            describe: 'El documento de identidad del nuevo usuario'
        }
    },
    userid: {
        id: {
            alias: 'i',
            demand: true,
            describe: 'El id del usuario al cual pertenece el control de pagos'
        }
    },
    product: {
        name: {
            alias: 'n',
            describe: 'El nombre del producto a crear',
            demand: true
        },
        value: {
            alias: 'a',
            describe: 'El valor del producto',
            demand: true
        }
    }

}

const argv = require('yargs')
    .command('newUser',
        'Registra un nuevo usuario en la base de datos',
        opts.users
    )
    .command(
        'newCashier',
        'Registra un nuevo usuario en la base de datos',
        opts.users
    )
    .command(
        'getPaymentControl',
        'Retorna el control de pagos de un usuario',
        opts.userid
    )
    .command(
        'monthlyPayment',
        'Pago, emision de recibo y actualizacion del control de pagos de un usuario.',
        opts.userid
    )
    .command(
        'newProduct',
        'Creacion de un nuevo producto',
        opts.product
    )
    .command(
        'updateProduct',
        'Actualiza el valor de un producto',
        opts.product
    )
    .help
    .argv

module.exports = {
    argv
}