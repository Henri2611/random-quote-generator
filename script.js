// const quotes = [
//   "The only way to do great work is to love what you do. – Steve Jobs",
//   "In the middle of difficulty lies opportunity. – Albert Einstein",
//   "The best way to predict the future is to create it. – Peter Drucker",
//   "Not everything that is faced can be changed, but nothing can be changed until it is faced. – James Baldwin",
//   "The universe is under no obligation to make sense to you. – Neil deGrasse Tyson",
//   "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
//   "Life is what happens when you’re busy making other plans. – John Lennon",
//   "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
//   "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
//   "Imagination is more important than knowledge. Knowledge is limited, imagination encircles the world. – Albert Einstein",
// ];

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//   const random = Math.floor(Math.random() * quotes.length);
//   const quote = quotes[random];
//   document.querySelector('p').textContent = quote;
// })

async function getQuote() {
  try {
    const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data); 

    document.getElementById("quote").innerText = `"${data[0].q}"`;
    document.getElementById("author").innerText = `- ${data[0].a}`;
  } catch (err) {
    document.getElementById("quote").innerText = "Failed to load quote!";
    console.error("Error fetching quote:", err);
  }

}

getQuote();

document.querySelector("button").addEventListener("click", getQuote);