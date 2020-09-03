const prime = require("./prime");


test("test case for zero as input", ()=>{

    expect(prime.isPrime(0)).toMatch("Not a Prime Number");
});

test("test case for one as input", ()=>{

    expect(prime.isPrime(1)).toMatch("Not a Prime Number");
});

test("test case for five as input", ()=>{

    expect(prime.isPrime(5)).toMatch("Prime Number");
});

test("test case for six as input", ()=>{

    expect(prime.isPrime(0)).toMatch("Not a Prime Number");
});

test("test case for string as input", ()=>{

    expect(prime.isPrime("hello")).toMatch("Invalid Number");
});

test("test case for floating point number as input", ()=>{

    expect(prime.isPrime(1.5)).toMatch("Not an Integer");
});
