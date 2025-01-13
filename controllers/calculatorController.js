const {add, subtract, multiply} = require('../services/calculatorService');

function addOperation(req, res){
    const number1 = parseFloat(req.query.number1);
    const number2 = parseFloat(req.query.number2);

    if(isNaN(number1) || isNaN(number2)){
        return res.status(400).json({error: 'Los parametros deben ser numeros.'});
    }

    const result = add(number1,number2);
    res.json({operation: 'La respuesta de la suma es: ',number1,number2, result});
}

function subtractOperation(req, res){
    const number1 = parseFloat(req.query.number1);
    const number2 = parseFloat(req.query.number2);

    if(isNaN(number1) || isNaN(number2)){
        return res.status(400).json({error: 'Los parametros deben ser numeros.'});
    }

    const result = subtract(number1,number2);
    res.json({operation: 'La respuesta de la resta es: ',number1,number2, result});
}

function multiplyOperation(req, res){
    const number1 = parseFloat(req.query.number1);
    const number2 = parseFloat(req.query.number2);

    if(isNaN(number1) || isNaN(number2)){
        return res.status(400).json({error: 'Los parametros deben ser numeros.'});
    }

    const result = multiply(number1,number2);
    res.json({operation: 'La respuesta de la multiplicacion es: ',number1,number2, result});
}

module.exports = {
    addOperation,
    subtractOperation,
    multiplyOperation,
};