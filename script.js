var btn = document.getElementById('btn');

//___Load Data
const laodData = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://api.github.com/users')
    xhr.onprogress = () => {
        document.getElementById('hint').innerHTML = "Processing data form API";
    }
    xhr.onload = () => {
        if(xhr.status == 200) {
            var users = JSON.parse(xhr.responseText);
            var output = '';
            for(var i in users) {
                output += '<a href="data.html?id='+users[i].id+'" class="flex gap-2 bg-white my-2 p-3">'+
                '<img src="'+users[i].avatar_url+'" width="70" height="70">'+
                '<ul>'+
                '<li>ID :'+ users[i].id +'</li>'+
                '<li>Login :'+ users[i].login +'</li>'+
                '</ul>'+
                '</a>';
            }
            document.getElementById('users').innerHTML = output;
            document.getElementById('hint').remove();
        }
        else {
            document.getElementById('hint').innerHTML = "Failed ! please check the url and try again!";
        }
    }
    xhr.send();
};

btn.addEventListener('click', laodData);