var newVariable = "My First Variable";
//Hide Everything Below This- predefined code

try {
    if(newVariable === "My First Variable"){
        console.log("Variable is declared and assigned correctly.");
    }
    else {
        console.log("Variable is not assigned correctly.")
    }
}
catch(err) {
    console.log(err.message);
}