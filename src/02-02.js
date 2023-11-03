let msg = 'g';

function a() {
    let msg = 'o';
    console.log(msg);
    if(true){
        let msg = 'i1';
        console.log(msg);
    }
    {
        let msg = 'i2';
        console.log(msg);
    }
    console.log(msg);

}

a();