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
    if(e == "Negro"){
        numN++;
        document.getElementById("neg").innerHTML = numN;
    }
}

function deshabilitar_btn(){
    var btn = document.getElementById("btn_radio");
     if(btn.click){
          document.getElementById("btn_radio").disabled = true;
    }
     
}

function addMessage(e){
    let valor;
  
    var formu = document.getElementById("formulario");

     //var inputRradio = document.formu.input_radio;
        for(x =0; x<formu.length; x++){  
            if(formu[x].checked){
                 valor = formu[x].value; 
            }
        }
      
        document.getElementById("btn_radio").addEventListener("click",deshabilitar_btn);

    var payload = {
        val: valor
    };
    
    socket.emit('new-message',payload);
    return false;
}
