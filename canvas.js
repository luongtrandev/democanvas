
// const data = Array(1000).fill(null).map((_, i) => i);
const list = document.querySelector('#myCanvas')


async function todo(){
    let res = await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    let record = await res.json();
    document.getElementById("myCanvas").innerHTML = "";
    var num = document.getElementById("check").value;
    
    
    let x = record.data[num].date;
    let y =record.data[num].latestBy;
    let z =record.data[num].areaName;
    let a = record.data[num].deathNew;
    let b = record.data[num].confirmed;
    let c = record.data[num].deathRate;
    let y2 = record.data[num].confirmedRate;
    let b2 = record.data[num].death;
    let b3 = record.data[num].confirmed;

    

    var list = document.querySelector('#myCanvas')
    const canvas = document.createElement('canvas')
    canvas.setAttribute("width", 1000)
    canvas.setAttribute("height",1000)
    if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(50,50,700,25);
    ctx.moveTo(50, 50);
    ctx.lineTo(700, 50);
    
    ctx.moveTo(50, 75);
    ctx.lineTo(750, 75);
    for(let k=0;k<10000;k=k+25){
        ctx.moveTo(50, k+75);
        ctx.lineTo(750, k+75);
    }
    ctx.moveTo(50, 125);
    ctx.lineTo(750, 125);

    ctx.moveTo(50, 50);
    ctx.lineTo(50, 1200);

    ctx.moveTo(200, 50);
    ctx.lineTo(200,1200);

    ctx.moveTo(300, 50);
    ctx.lineTo(300,1200);

    ctx.moveTo(450, 50);
    ctx.lineTo(450,1200);

    ctx.moveTo(500, 50);
    ctx.lineTo(500,1200);

    ctx.moveTo(650, 50);
    ctx.lineTo(650,1200);

    ctx.moveTo(700, 50);
    ctx.lineTo(700,1200);

    ctx.moveTo(750, 50);
    ctx.lineTo(750,1200);


    ctx.rect(50, 50, 700, 200);
    var ctx1 = canvas.getContext("2d");
    ctx1.fillStyle = "#000000";

    ctx1.font = "15px Arial";
    ctx1.fillText("Date", 110, 70);
    ctx1.fillText("Code", 230, 70);
    ctx1.fillText("Name", 350, 70);
    ctx1.fillText("Rate ", 460, 70);
    ctx1.fillText("Date Buy", 540, 70);
    ctx1.fillText("Price", 660, 70);
    ctx1.fillText("List", 710, 70);

    for(let k=0;k < 5000;k=k+25){
        ctx1.fillText(x, 90, k+95);
    };  
    for(let k=0;k < 5000;k=k+25){
        ctx1.fillText(y, 230, k+95);
    };  
    
    for(let k=0;k < 5000;k=k+25){
        ctx1.fillText(z, 320,k+95);
    }; 
    for(let k=0;k < 5000;k=k+25){
        ctx1.fillText(a, 460,k+95);
    };
    for(let k=0;k < 5000;k=k+25){
        ctx1.fillText(b, 540,k+95);
    };
    for(let k=0;k < 5000;k=k+25){
        ctx1.fillText(c, 655,k+95);
    };
    for(let k=0;k < 5000;k=k+25){
        ctx1.fillText(c, 710,k+95);
    };
    
    


    // ctx.rect(50, 300, 600, 150);
    // ctx.rect(50, 300, 600, 25);
    // ctx.rect(50, 300, 600,65);
    // ctx.rect(50, 300, 600, 100);
    // ctx.rect(50, 300, 30, 150);
    // ctx.rect(50, 300, 90, 150);
    // ctx.rect(50, 300, 150, 150);
    // ctx.rect(50, 300, 250, 150);
    // ctx.rect(50, 300, 325, 150);
    // ctx.rect(50, 300, 500, 150);
    // ctx.rect(50, 300, 600, 150);

    // ctx.fillText("1", 60, 350);
    // ctx.fillText("2", 60, 385);
    // ctx.fillText("3", 60, 430);
    // ctx.fillText("STT",52, 320 );
    // ctx.fillText("Tuoi",95, 320 );
    // ctx.fillText("MS",160, 320 );
    // ctx.fillText("Ten",235, 320 );
    // ctx.fillText("Ho",330, 320 );
    // ctx.fillText("Dia chi",440, 320 );
    // ctx.fillText("Que",590, 320 );
    ctx.stroke();
    }
    list.appendChild(canvas)
    // document.getElementById("myCanvas").innerHTML = canvas;
}


function next(){
    var value = parseInt(document.getElementById('check').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('check').value  = value;
    console.log(value);
    num = value;
    todo();
}

function pre(){
    var value = parseInt(document.getElementById('check').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('check').value  = value;
    console.log(value);
    num = value;
    todo();
}

function print(){
    var dataUrl = document.getElementById('myCanvas').toDataURL( );  
    var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>Canvas</title></head>';
    windowContent += '<body>'
    windowContent += '<img src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    var printWin = window.open('','','width=340,height=260');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.focus();
    printWin.print();
    printWin.document.close();
    printWin.close();
    
} 






