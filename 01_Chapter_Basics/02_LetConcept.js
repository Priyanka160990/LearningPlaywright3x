let x=10;
console.log(x);

for(x=0; x<10000; x++)
    {
        console.log(x);
        BadCode();
    }

function BadCode(){
    console.log("This is a bad code");
}