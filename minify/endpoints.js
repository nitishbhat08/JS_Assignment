var xhttp=new XMLHttpRequest;function moveBar(t){var e=parseInt(document.getElementById("moveselect").value),n=document.getElementById("label"+e).innerHTML;(t=parseInt(t)+parseInt(n))>=limit&&(document.getElementById("btn"+e).style.backgroundColor="red",document.getElementById("btn"+e).style.width="100%",document.getElementById("label"+e).innerHTML=t+"%"),t<=limit&&100<t&&(document.getElementById("btn"+e).style.backgroundColor="lightblue",document.getElementById("btn"+e).style.width="100%",document.getElementById("label"+e).innerHTML=t+"%"),t<=100&&0<t?(document.getElementById("btn"+e).style.backgroundColor="lightblue",document.getElementById("btn"+e).style.width=t+"%",document.getElementById("label"+e).innerHTML=t+"%"):t<=0&&(document.getElementById("btn"+e).style.width="0%",document.getElementById("label"+e).innerHTML="0%")}xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=JSON.parse(this.responseText);button1.innerHTML=t.buttons[0],button1.setAttribute("value",t.buttons[0]),button2.innerHTML=t.buttons[1],button2.setAttribute("value",t.buttons[1]),button3.innerHTML=t.buttons[2],button3.setAttribute("value",t.buttons[2]),button4.innerHTML=t.buttons[3],button4.setAttribute("value",t.buttons[3]),limit=t.limit,console.log(t.limit);for(var e=0;e<t.bars.length;e++){var n=document.createElement("div");document.getElementById("content").appendChild(n),n.setAttribute("class","testProgress"),n.setAttribute("id","progress"+e);var l=document.createElement("div");n.appendChild(l),l.setAttribute("class","testBar"),l.setAttribute("id","btn"+e),l.style.width=t.bars[e]+"%";n=document.createElement("label");l.appendChild(n),n.setAttribute("class","classLabel"),n.setAttribute("id","label"+e),n.innerHTML=t.bars[e]+"%"}var o=document.createElement("select");document.getElementById("sel").appendChild(o),o.setAttribute("id","moveselect");for(e=0;e<t.bars.length;e++){var i=document.createElement("option");o.appendChild(i),i.setAttribute("id","move"+e),i.setAttribute("value",e),i.innerHTML="Progess Bar "+(1+e)}}},button1.addEventListener("click",function(){moveBar(this.value)}),button2.addEventListener("click",function(){moveBar(this.value)}),button3.addEventListener("click",function(){moveBar(this.value)}),button4.addEventListener("click",function(){moveBar(this.value)}),xhttp.open("GET","//pb-api.herokuapp.com/bars"),xhttp.send();