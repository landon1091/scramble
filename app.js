function getword() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://harold-jtpegfzoyg.now.sh/scrambled');
    request.addEventListener('load', function() {
        let word = JSON.parse(request.responseText);
        console.log(word);
        let parent = document.getElementById('wordsection');

    let element = document.createElement('li');
    element.textContent = word.scrambled + ' :' + word.id;
    parent.appendChild(element);

   


    });
    request.send();
}


function checkword(){
    let guess = {
        id:  parseInt(document.getElementById('idbox').value),
        guess: document.getElementById('guessbox').value,
    };
    console.log('guess');
    console.log(guess);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://harold-jtpegfzoyg.now.sh/scrambled');
    request.send(JSON.stringify(guess));
}




window.addEventListener('load', function(){
 getword();

let submitbtn = document.getElementById('guess');
submitbtn.addEventListener('click', function(){
    checkword();
})
})