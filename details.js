
function fun(){

        for(let i=0;i<content.length;i+=3){
            var tr=document.createElement('tr');
                var td1=document.createElement('td');
                td1.appendChild(document.createTextNode(content[i]));
                var td2=document.createElement('td');
                td2.appendChild(document.createTextNode(content[i+1]));
                var td3=document.createElement('td');
                td3.appendChild(document.createTextNode(content[i+2]));
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                document.getElementById("table-body").appendChild(tr);
            
        }
    }