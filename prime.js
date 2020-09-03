const logger = require("./logger");

exports.isPrime = function(num) {

    logger.info("isPrime method invoked with parameter = "+ num);

    let result;
    
    try{
        if(isNaN(num)){
            throw "Invalid Number";
        }
        else if (num%1 !== 0){
            throw "Not an Integer";
        }
    }
    catch(except){

        logger.info("Exception Handled");
        return except;
    }

    if(num === 1 || num === 0){
        result = "Not a Prime Number";
    }
    else{
        let flag = true;

        for(let i = 2; i<=num/2; i++){
       
            if(num%i == 0){
                flag = false;
                break;
            }
        }

        if(flag){
            result = "Prime Number";
        }
        else{
            result = "Not a Prime Number";
        }

    }
    logger.info("Object returned = "+ result);
    return result;
}