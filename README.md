\# Book Management and Discussion Forum



!\[Java](https://img.shields.io/badge/Java-ED8B00?logo=openjdk\&logoColor=white)

!\[Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=springboot\&logoColor=white)

!\[MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql\&logoColor=white)

!\[WebSocket](https://img.shields.io/badge/Communication-WebSocket-4A4A4A)

!\[Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap\&logoColor=white)



A Spring Boot web application for browsing books, managing a personal book collection, and discussing books with other users through a real-time forum. Registered users can add, edit, and remove book records from their collection while participating in live conversations about books, authors, and genres.



\## Technologies



\- Java

\- Spring Boot

\- JSP and Servlet

\- WebSocket

\- MySQL

\- phpMyAdmin for database administration

\- HTML5

\- CSS3

\- JavaScript

\- Bootstrap



\## Features



\- User registration and authentication

\- Browse books stored in the database

\- View book name, author, and price

\- Add books to a personal collection

\- Edit existing book details

\- Delete books from the user's collection

\- View a dedicated `My Books` page

\- Participate in real-time book discussions through WebSocket

\- Responsive interface built with Bootstrap



\## User Flow



1\. Register for an account or sign in.

2\. Browse the books available in the database.

3\. Add a book to the personal collection.

4\. Open `My Books` to review or remove saved books.

5\. Add or edit book information when authorized.

6\. Open the discussion page to communicate with other connected users.

7\. Log out when finished.



\## How It Works



Spring Boot provides the application structure and backend logic. JSP pages render the server-side views, while Servlet/HTTP handling supports browser requests. MySQL stores user and book information. WebSocket maintains a live, bidirectional connection for the discussion page so messages can appear without repeatedly reloading the page.



\## Development Process



1\. Defined the book-management, authentication, and discussion requirements.

2\. Structured the backend with Spring Boot and Java.

3\. Connected the application to MySQL for persistent book and user data.

4\. Implemented book CRUD operations and a personal-collection view.

5\. Created registration and login workflows for protected features.

6\. Implemented the discussion page with WebSocket communication.

7\. Built and styled the JSP views with HTML, CSS, JavaScript, and Bootstrap.

8\. Tested the main flows for browsing, collection management, authentication, and discussion.



\## Running the Project



\### Requirements



\- A compatible Java Development Kit

\- The build tool specified by the repository

\- MySQL

\- A browser



\### Setup



1\. Clone the repository.

2\. Create the required MySQL database and import the provided SQL schema or dump.

3\. Update the database connection values in the application's configuration file.

4\. Build the project using the included Maven or Gradle configuration.

5\. Start the Spring Boot application.

6\. Open the configured local application URL in a browser.

7\. Open two browser sessions to verify the real-time discussion feature.



\## What I Learned



\- How to structure a full-stack application with Spring Boot and Java

\- How to implement CRUD operations for book records

\- How to persist user and book data with MySQL

\- How to render server-side pages with JSP

\- How to implement authentication-protected user workflows

\- How WebSocket enables live, bidirectional browser communication

\- How to build responsive views with Bootstrap



\## Possible Improvements



\- Add user reviews and ratings

\- Add recommendation features based on saved books

\- Add moderation tools for discussion messages

\- Add Docker configuration for reproducible local setup



\## Screenshots

!\[Flowchart diagram](images/flowchart.png)

\---

!\[Home page](images/home.png)

\---

!\[Browse books](images/browse-books.png)

\---

!\[My Books](images/my-books.png)

\---

!\[Real-time discussion forum](images/discussion-forum.png)

\---



\## Contributor



\- Mansiba Gohil



\## Acknowledgment



Guided by Prof. Shamsaagazarzoo Alam.

