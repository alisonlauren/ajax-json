//creating variable to connect my button via ID
const dog = document.getElementById('container');
//creating a on click function with new variable dog
dog.addEventListener('click', function(){
    //preventing a refresh 
    event.preventDefault()
    //changing the text from generate dog to generating doggo upon clicking
    dog.textContent = 'Generating doggo'
    //retrieval data from website, once you get info from API load the response
    fetch('https://dog.ceo/api/breeds/image/random').then(function(response){
        //return response into json object to pull more info
    return response.json();  
})
    //pulling information from json object, response
    .then(function(data){
        //printing the data
        console.log(data)
        //creating an img element called img
        const img = document.createElement('img');
        //make img variable an image and display the data.message
        img.setAttribute('src',data.message);
        //append the image to html body
        document.body.appendChild(img);
        //create title for heading
        const title = document.createElement('h1')
        //append the title
        document.body.appendChild(title)
        //change button text to submit
        dog.textContent = 'Submit'
        
        

    })
})
//retrieving from url and then returning the response in jason
fetch('https://dog.ceo/api/breeds/list').then(function(response){
    return response.json();
})
//returned response from the data
    .then(function(data){
    //printing the data
        console.log(data)
        //create variable of breeds = the data.message found in console and in API
        let breeds = data.message
        //create variable equal to id in html named questions
        let questions = document.getElementById('questions')
        //looping through array, and returning result of each breed, appending it to option
        // => is like saying function
        breeds.forEach(breed => {
        //create variable that 
        let option = document.createElement('option')
        option.value = breed
        option.textContent = breed
        questions.appendChild(option)
        });
    //creating an img element called img
    })
