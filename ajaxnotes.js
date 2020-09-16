// const request = new XHLHttpRequest();

// request.onreadystatechange = function () {
//     //this refers to the request itself
//     //can be used on many files
//     console.log(this);
//     if (this.readyState === 4 && this.status === 200) {
//         console.log("request is complete")
//         //use this to add to page
//         console.log(this.responseText);
//         //create element and set equal to response text in a h1
//         const title = document.createElement("h1")
//         title.textContent = this.responseText;
//         document.body.appendChild(title);
//     }
// }
// //request to open and retrieve the sample text file
// request.open('GET', './sample.txt'); 
// //asking server for sampletxt file
// request.send();


// // get request will retrieve
// // post is for creating new data on the server, (post.request)
// // patch will update data
// // delete.request, which delete
// //crud; create, read, update, delete.

//FETCH
//dealing with promises(then) type of object that calls the function
//once its finished loading the data
// fetch('/sample.txt')
// .then(function(response) {
//     return response.text();
// })
// .then(function(text) {
//     const title =  document.createElement('h1');
//     title.textContent = response.text();
//     document.body.appendChild(title);
// })


