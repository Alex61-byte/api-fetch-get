var containerArt = document.getElementById('container1');
var body = document.getElementById('body');
function displayArt() {
    containerArt.style.display = "block";
    chuck.style.display = "none";
    dcf.style.display = "none";
    joke.style.display = "none";
    body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/1/1b/Rijksmuseum_in_Amsterdam.jpg')"
}

var chuck = document.getElementById('container2');
function displayChuckNorrisJokes() {
    chuck.style.display = "block";
    joke.style.display = "none"

    dcf.style.display = "none";
    containerArt.style.display = "none"
    body.style.backgroundImage = "url('https://www.ultimatemovierankings.com/wp-content/uploads/2016/03/missingaction12719.jpg')"
}


var joke = document.getElementById('container3');
function displayRandomJokes() {
    joke.style.display = "block";
    containerArt.style.display = "none";
    chuck.style.display = "none";

    body.style.backgroundImage = "url('https://cms.qz.com/wp-content/uploads/2016/07/rtx2c9ws.jpg?quality=75&strip=all&w=1600&h=900&crop=1')"
    dcf.style.display = "none";

}



var dcf = document.getElementById('animal');
function displayDogCatFox() {
    dcf.style.display = "block";
    joke.style.display = "none";
    containerArt.style.display = "none";
    chuck.style.display = "none";
    body.style.backgroundImage = "url('https://cdn4.vectorstock.com/i/1000x1000/57/48/christmas-cute-dog-cat-fox-and-rabbit-with-hat-and-vector-35005748.jpg')"

}


var description = document.getElementById('description');
var imgArt = document.getElementById('first');
imgArt.style.display = 'none';
var btn = document.getElementById("first-surprise");
btn.addEventListener('click', function () {



    fetch("https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=9OtuFwhx&format=json")
        .then(res => res.json())
        .then(result => result.artObject)
        .then(result => {
            description.innerText = result.longTitle;
            result = result.webImage;
            imgArt.src = result.url;
            imgArt.style.display = "block";

        })



});
var diplayJokes = document.getElementById('jokes');
var btn2 = document.getElementById('sec-surprize');
btn2.addEventListener('click', function () {
    fetch("http://api.icndb.com/jokes/random")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            result = result.value;
            diplayJokes.innerText = result.joke;
        })

})

var joke2 = document.getElementById('random-jokes');
var answer = document.getElementById('answer');
var randomJokes = document.getElementById('3rd-Surprize');
randomJokes.addEventListener('click', function () {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            joke2.innerText = result.setup;
            answer.innerText = result.punchline

        })
})


var animal = document.getElementById('animals');
var img = document.getElementById('random');
img.style.display = 'none';

function getPhoto() {
    img.style.display = 'block';
    var choice = animal.value;

    if (choice === "cat") {

        fetch("https://aws.random.cat/meow")
            .then(res => res.json())
            .then(result => {
                console.log(result)
                img.src = result.file
            })
    } else if (choice === "fox") {

        fetch('https://randomfox.ca/floof/')
            .then(res => res.json())
            .then(result => {
                console.log(result)
                img.src = result.image
            })
    } else if (choice == "dog") {
        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                img.src = res.url
            })
    }
}
