var socket = io.connect('192.168.43.210:9095',{'forceNew':true});

socket.on('messages',function(data){
    console.log(data);
    render(data);
});

let numA=0;
let numV=0;
let numAz=0;
let numN=0;
function render (data){
    let e = "";
    var html = data.map(function(elem,index){
        e = elem.val;
        return(`<div>
                    <strong>${elem.val}</strong>
                </div>`); 
    }).join(" ");
 
    document.getElementById('messages').innerHTML = html;
    if(e == "Amarillo"){
        numA++;
        // alert(num);
        document.getElementById("ama").innerHTML = numA;
    }
    if(e == "Verde"){
        numV++;
        document.getElementById("ver").innerHTML = numV;
    }
    if(e == "Azul"){
        numAz++;
        document.getElementById("azu").innerHTML = numAz;
    }
    
}
