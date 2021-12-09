console.log('attached')
const url = 'https://api.thecatapi.com/v1/images/search'
/// url for random cat button
let form= document.querySelector('#searchBar')
// let searchButton= document.querySelector('#randomButton')
// ID of search bar will have the finctions of event listeners
form.addEventListener('click', function(event){
    /// Clicking the parent/children of this ID will result in cat pic
    event.preventDefault()
    // Stops page from refreshing every time
    fetch(url,{
        // fetching from the defined url
        headers: {
            'x-api-key': 'n8flGmkDTRTXwg4JoztbrG0p3'
        }})
        // Idk why you need your own id instead of a universal one. Answers from anyone grading this??
    .then(res => res.json())
    // the response of fetching this url will return a result(can be named anything) and turned to json in console
    .then(parsedJson => {
        // take your parsed json and define with this function right?
        console.log(parsedJson)
       document.querySelector('.randomCatImage').src = parsedJson[0].url
       // this is the defintion of this block of code. take the blank source and input the first thing in its array
    })
    .catch( err => console.log( err, 'error') )
})

const catUrl = "https://api.thecatapi.com/v1/images/search?category_ids="
let cat = document.querySelector('#searchBar2')
cat.addEventListener('submit', function(event){
    event.preventDefault()
    let input = document.querySelector('.input')
    fetch(`${catUrl}${input.value}`,{
        headers:{
            'x-api-key': 'n8flGmkDTRTXwg4JoztbrG0p3'
        }
    })
    .then(cat => cat.json())
    .then(findCat => {

        document.querySelector('.definedImage').src = findCat[0].url
        input.value = ''
    })
    .catch (err => console.log(err ,'error'))
})