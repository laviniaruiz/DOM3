let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

// change the text of the title to something shorter
  // Part 1
let mainTitle = document.querySelector("#main-title")
mainTitle.innerText = "Welcome to Lala's Page"

// change the color body
  // Part 2
    this.body.style.background = "pink"

// remove the last list item of DOM's fav things
  // Part 3
let favoriteThings = document.getElementById ("favorite-things")
favoriteThings.removeChild(favoriteThings.lastElementChild)

//select all .special-title class elements and change font-size to 2rem
  // Part 4
const specialTitles = document.getElementsByClassName("special-title");

for (let title of specialTitles) {
  title.style.fontSize = "2rem";
}

// turns out DOM never raced in Chicago. Access the Past Races list & remove Chicago
  // Part 5
const pastRaceContainer = document.getElementById('past-races');
const pastRaces = pastRaceContainer.children
for (let race of pastRaces) {
  if (race.innerText.toLowerCase() === 'chicago') race.remove();
}

// let's add to DOM's Past Races list. Create a new <li> element, change the new <li>
// text to the name of a city & append it to the Past Races list
  // Part 6
const NYC = document.createElement('li');
NYC.innerHTML = 'NYC';
pastRaceContainer.append(NYC);

// create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with
// some text
  // Part 7
const blogPost = document.createElement('div');
const blogPostTitle = document.createElement('h2');
const blogPostBody = document.createElement('p');
blogPost.classList.add('blog-post')
blogPostTitle.innerText = 'NYC'
blogPostBody.innerText = 'NYCs weather is getting crazy as always!'

blogPost.append(blogPostTitle, blogPostBody);
document.getElementsByClassName('main')[0].append(blogPost);

// query select the # quote - title ID element and add a click event handler should use a
// function randomQuote whenever #quote-title is clicked
  // Part 8
document.getElementById('quote-title').addEventListener('click', randomQuote);

// select all .blog-post class elements. Iterate thru the list of .blog-post class elements &
// apply two event handlers to each node
  // Part 9
const blogPosts = document.getElementsByClassName('blog-post');

for (let post of blogPosts) {
  post.addEventListener('mouseout', (e) => e.target.classList.toggle('purple'));
  post.addEventListener('mouseenter', (e) => e.target.classList.toggle('red'));
}


});
