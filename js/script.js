function dochange(){
    alert('click button')
}

function confirmation(){
    var txt;
    var msg =
    confirm('are you sure??');
    if (msg == true){
        txt = alert("You press OK!");
    }
    else{
        txt = alert("You press cancel!");
    }
    document.getElementById("confirm").innerHTML=txt;
}

function changeColor(){
    var dd1 = document.getElementById("div1");
    var dd2 = document.getElementById("div2");
    dd1.className = "orange";
    dd2.className = "fuchsia";
}

function changeText(){
    var dd1 = document.getElementById("div1");
    var dd2 = document.getElementById("div2");
    dd1.innerHTML = "Yeah!!";
    dd2.innerHTML = "Wow!!";
}

function doLime(){
    var c = document.getElementById("cv1");
    c.style.backgroundColor="lime";
}

function doRed(){
    var c = document.getElementById("cv1");
    c.style.backgroundColor="yellow";
    var ctx = c.getContext("2d");
    ctx.fillStyle="red";
    ctx.fillRect(10,10,100,100);
    ctx.fillRect(120,10,40,40);
    ctx.fillStyle="black";
    ctx.font = "30px Arial";
    ctx.fillText("Hello", 30,50);
}

function clearBlue(){
    var c = document.getElementById("cv1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);
    c.style.backgroundColor="blue";
}

function doPurple(){
    var c = document.getElementById("canv");
    c.style.backgroundColor="purple";
    // var ctx = c.getContext("2d");
    // ctx.fillStyle="red";
    // ctx.fillRect(10,10,100,100);
}

function chooseColor(){
        var c = document.getElementById("canv");
        var int = document.getElementById("change");
        c.style.backgroundColor=int.value;
}

function range(){
    var canv = document.getElementById("canv");
    var slide = document.getElementById("range");
    var len = slide.value;
    var context = canv.getContext("2d");
    context.clearRect(10,10, canv.width, canv.height);
    context.fillStyle="yellow";
    context.fillRect(10,10,len,len);
    context.fillRect(parseInt(len)+20,10,len,len);
    context.fillRect(len*3,10,len,len);


}