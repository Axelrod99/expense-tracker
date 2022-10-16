function expenses() {
    Name = document.getElementById('name').value
    ddate = document.getElementById('date').value
    amount = document.getElementById('amount').value

    var btn = document.createElement("button")
    btn.innerHTML = "delete"
    btn.setAttribute('id','butoon')


    var div = document.createElement('div');
    div.appendChild(btn);
    div.setAttribute('id','ddiv')


    var div = document.createElement('div');
    div.appendChild(btn);
    div.setAttribute('id','ddiv')

    var msg = document.querySelector('.msg');


    if(Name === '') {
        msg.innerHTML = 'please enter all fields';
        setTimeout(() => msg.remove(),3000);
    } 
    if(ddate === '') {
        msg.innerHTML = 'please enter all fields'; 
        setTimeout(() => msg.remove(),3000);
    } 
    if(amount === '') {
        msg.innerHTML = 'please enter all fields'; 
        setTimeout(() => msg.remove(),3000);
    }
    else {
        var table = document.getElementById('mytable');

        var row = table.insertRow(1);
    
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
    
        cell1.innerHTML = Name;
        cell2.innerHTML = ddate;
        cell3.textContent = `$ ${Number(amount)}`
        cell4.appendChild(div);
    }

    btn.onclick = function() {
        row.remove()
    }

    
    document.getElementById('name').value = "";
    document.getElementById('date').value = "";
    document.getElementById('amount').value = "";
}

