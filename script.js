let apiQuotes = [];
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let nextQuote = document.getElementById('next');
let loader = document.getElementById('loader');

//show new quote
function newQuote(){
    //pick a random quote from apiQuotes in array
    let index = Math.floor(Math.random()*apiQuotes.length);
    const quote = apiQuotes[index];

    if(!quote.author){
        authorText.textContent = 'Unknown'
    }
    else{
        authorText.textContent = quote.author;
    }
    quoteText.innerHTML = quote.text;
}
//EventListener
    nextQuote.addEventListener('click', newQuote)

    //async function to getQuotes from API
async function getQuotes(){
    const url = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(url);
        apiQuotes  = await response.json();
        newQuote()
        loader.style.display = "none";

    }catch{
        //catch error  
    }
}
// getQuotes();

setTimeout(()=>{
        getQuotes();
    loader.style.display = "block";
},1000)