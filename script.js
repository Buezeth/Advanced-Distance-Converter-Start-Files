let convertType = 'miles';
const form = document.getElementById('convert');
const distance = document.getElementById('distance');
const intro = document.querySelector('p');
const answer = document.getElementById('answer');
const heading = document.querySelector('h1');


window.addEventListener( "keydown", (event)=>{
    // alert(event.key);
    if(event.key === 'm') {
        convertType = 'kilometers';
        intro.innerHTML = '<p>Type in a number of kilometers and click the button to convert the distance to miles.</p>';
        heading.textContent = 'Miles to Kilometers Converter';
    } else if(event.key == 'k') {
        convertType = 'Miles';
        intro.innerHTML = '<p>Type in a number of miles and click the button to convert the distance to kilometers.</p>';
        heading.textContent = 'Kilometer to Miles Converter';
    }
});


form.addEventListener("submit", (event)=>{
    let distance = parseFloat(document.getElementById('distance').value);
    event.preventDefault();
    
    if(distance) {
        if(convertType == 'miles') {
            let converted = (distance * 1.689344).toFixed(2);
            answer.innerHTML = `${distance} miles is equal to ${converted} kilometers`;
        } else {
            let converted = (distance * 0.621371192).toFixed(2);
            answer.innerHTML = `${distance} kilometers is equal to ${converted} miles`;
        }
    } else {
        answer.innerHTML = "Please enter a number";
    }
});