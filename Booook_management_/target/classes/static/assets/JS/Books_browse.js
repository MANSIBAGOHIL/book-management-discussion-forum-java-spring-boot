// Sample book data (replace this with your actual book data)
const books = [
  { title: 'Book 1', author: 'Author 1', genre: 'Fiction', summary: 'Summary of Book 1', rating: 4.5, coverImage: 'book1.jpg' },
  { title: 'Book 2', author: 'Author 2', genre: 'Non-fiction', summary: 'Summary of Book 2', rating: 4.0, coverImage: 'book2.jpg' },
  // Add more book objects as needed
];

// Function to generate HTML for a single book card
function generateBookCard(book) {
  return `
    <div class="grid-item">
      <img src="assets/images/${book.coverImage}" alt="${book.title}">
      <h5>${book.title}</h5>
      <p>Author: ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <p>Rating: ${book.rating}</p>
      <p>${book.summary}</p>
      <button onclick="addToReadingList('${book.title}')">Add to Reading List</button>
    </div>
  `;
}

// Function to render all books in the grid container
function renderBooks() {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = ''; // Clear existing content

  books.forEach(book => {
    const bookCard = generateBookCard(book);
    gridContainer.insertAdjacentHTML('beforeend', bookCard);
  });
}

// Function to add a book to the reading list
function addToReadingList(title) {
  // Implement your logic to add the book to the reading list
  console.log(`Added "${title}" to reading list`);
}

// Call renderBooks function to display books when the page loads
document.addEventListener('DOMContentLoaded', renderBooks);
