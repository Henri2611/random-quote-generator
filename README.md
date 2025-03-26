#Random quote Generator

# Random Quote Generator

This is a simple JavaScript-based random quote generator that displays a new quote every time a button is clicked.

## Features

- Displays a random quote from a predefined list.
- Simple and clean UI.
- Easy to customize with new quotes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Henri2611/random-quote-generator.git

   ```

2. Open the `index.html` file in a web browser to view the application.

Usage
Click the "generate Quote" button to generate a random quote.

Contributing
Feel free to submit a pull request if you'd like to improve the project.

License
This project is licensed under the MIT License.

## Fetch API Integration

This project now integrates the [ZenQuotes.io](https://zenquotes.io/) API to fetch and display random inspirational quotes. The API request is made using JavaScript’s `fetch` function, ensuring seamless retrieval of quotes.

### Implementation

The following JavaScript function fetches a random quote from ZenQuotes.io through an API proxy (`allorigins.win`) to avoid CORS issues:

```javascript
async function getQuote() {
  try {
    const response = await fetch(
      "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random"
    );
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
```
