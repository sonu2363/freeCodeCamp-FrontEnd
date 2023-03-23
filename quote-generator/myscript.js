const quoteText=document.querySelector("#quote-text");
const quoteAuthor=document.querySelector("#author");
const newQuoteBtn=document.querySelector("#new-quote");
const quoteBox=document.querySelector("#quote-box");
const wrapper=document.querySelector("#wrapper");
const tweetQuote=document.querySelector("#tweet-quote")

async function getQuote(){
  const apiUrl="https://api.quotable.io/random";
  try{
    const response=await fetch(apiUrl)
    const data=await response.json();
    if(response.ok){
      quoteText.textContent=data.content;
      quoteAuthor.textContent=`-${data.author}`
    }
    else{
      throw new Error("Request ")
    }
  }catch(error){
    console.log(error);
    quoteText.textContent="An error occured while fetching the quote . Please try again later"
    quoteText.textContent="";
  } 
}


function updateQuoteStyles(){
  const colors=[
    "red",
    "green",
   "blue",
    "violet",
    "pink"
    
  ];
  const randomColor=colors[Math.floor(Math.random()*colors.length)];
  wrapper.style.backgroundColor=randomColor;
  quoteText.style.color=randomColor;
  quoteAuthor.style.color=randomColor;
  newQuoteBtn.style.backgroundColor=randomColor;
  tweetQuote.style.backgroundColor=randomColor;
}

newQuoteBtn.addEventListener("click",()=>{
getQuote();
updateQuoteStyles();

});
getQuote();
updateQuoteStyles();