const array = 
[{heading: "I - Darkness", image: "./imagefolder/lost.png",  quote: 'Midway upon the journey of our life I found myself within a forest dark, For the straightforward pathway had been lost.'},
{heading: "II - Fear ", image: "./imagefolder/forest.png", quote: "Ah me! how hard a thing it is to say What was this forest savage, rough, and stern, Which in the very thought renews the fear."},
{heading: "III - Death", image: "./imagefolder/death.png",quote: "So bitter is it, death is little more; But of the good to treat, which there I found, Speak will I of the other things I saw there."},
{heading: "IV - Lost", image: "./imagefolder/forgor.png", quote: "I cannot well repeat how there I entered, So full was I of slumber at the moment In which I had abandoned the true way."},
{heading: "V - Below ", image: "./imagefolder/mountain.png", quote: "But after I had reached a mountain's foot, At that point where the valley terminated, Which had with consternation pierced my heart"},
{heading: "VI - Hope", image: "./imagefolder/sun.png", quote: "Upward I looked, and I beheld its shoulders, Vested already with that planet's rays Which leadeth others right by every road."},
{heading: 'VII - Doubt', image: "./imagefolder/moon.png", quote: "Then was the fear a little quieted That in my heart's lake had endured throughout The night, which I had passed so piteously."},
{heading: 'VIII - Struggle', image: "./imagefolder/struggle.png", quote: "And even as he, who, with distressful breath, Forth issued from the sea upon the shore, Turns to the water perilous and gazes;"},
{heading: 'IX - Sin', image: "./imagefolder/sin.png", quote: "So did my soul, that still was fleeing onward, Turn itself back to re-behold the pass Which never yet a living person left"}]
const arr = array.splice(0, 4) // Splits array into 4.
const arr2 = array.splice(0, 5) // Splits remaining array in 5.

function show (domElement, isVisible) { // Function that hides and shows features
    if (domElement.style.display != "none") {  

        domElement.style.display = 'none';      // Hide display
   } else {
        domElement.style.display = 'block';     // Show display
   }

} 


function Card(content, rowNo){  // Function that creates the card elements
    const cardDiv = document.createElement("div"); // Creates a div element called cardDiv
    cardDiv.className = 'cardDiv'
    document.querySelector(`.${rowNo}`).appendChild(cardDiv); // Appends cardDiv based on the selected rows.
    const text = document.createElement("header")  // Creates a header element called text
    text.innerHTML = content.heading // Grabs the "heading" from the array
    cardDiv.appendChild(text); // Appends the selected "heading" from the array and places it in the cardDiv.
    const image = document.createElement('img') // Creates an img element called image.
    image.className = "image"
    image.src = content.image; // Grabs the "image" from the array.
    cardDiv.appendChild(image); // Appends the selected "image" from the array and places it in the cardDiv.
    const quote = document.createElement("p") // Creates a paragraph element called quote
    quote.className = "quote"
    quote.innerHTML = content.quote // Grabs the "quote" from the array.
    cardDiv.appendChild(quote); // Appends the selected "quote" from the array and places it in the cardDiv.
    show(quote) // Uses the function to show/hide.
    let showQuote = true;
       cardDiv.addEventListener("click", function(){ // Makes the cardDiv clickable. When clicked, it hides
        showQuote = !showQuote;                      // the text and image but shows the quote. Reclick to
            show(text, !showQuote)                   // do the opposite.
            show(quote, showQuote)
            show(image, !showQuote)  
        });
    
}


array.forEach(Card) // The array will loop through the card function, allowing it to create the cards.


arr.forEach((elem) => {  // Displays the spliced array into the first row.
    Card(elem, "row");
})

arr2.forEach((elem) => {  // Displays the second spliced array into the second row.
    Card(elem, "row2");
})
