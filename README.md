# Library Management System

## Project Overview
This project is a comprehensive library management system designed to manage users, books, and transactions efficiently. The system uses two primary collections: `Users` and `Books`, and an additional `Transactions` collection to keep track of book issues and returns. The project includes APIs to handle various queries related to books, users, and transactions.

## Database Structure
### Users Collection
Fields:
- `userId` (unique identifier)
- `name` (string)
- `email` (string)
- `phone` (string)

Sample Data:
```
[
  { "userId": "1", "name": "Alice", "email": "alice@example.com", "phone": "1234567890" },
  { "userId": "2", "name": "Bob", "email": "bob@example.com", "phone": "2345678901" },
  { "userId": "3", "name": "Charlie", "email": "charlie@example.com", "phone": "3456789012" },
  { "userId": "4", "name": "Diana", "email": "diana@example.com", "phone": "4567890123" },
  { "userId": "5", "name": "Eve", "email": "eve@example.com", "phone": "5678901234" }
]
```

### Books Collection
Fields:
- `bookId` (unique identifier)
- `bookName` (string)
- `category` (string)
- `rentPerDay` (number)

Sample Data:
```
[
  { "bookId": "1", "bookName": "The Great Gatsby", "category": "Fiction", "rentPerDay": 5 },
  { "bookId": "2", "bookName": "1984", "category": "Dystopian", "rentPerDay": 6 },
  { "bookId": "3", "bookName": "To Kill a Mockingbird", "category": "Fiction", "rentPerDay": 4 },
  { "bookId": "4", "bookName": "The Catcher in the Rye", "category": "Classic", "rentPerDay": 7 },
  { "bookId": "5", "bookName": "The Hobbit", "category": "Fantasy", "rentPerDay": 6 },
  { "bookId": "6", "bookName": "Pride and Prejudice", "category": "Romance", "rentPerDay": 5 },
  { "bookId": "7", "bookName": "War and Peace", "category": "Historical", "rentPerDay": 8 },
  { "bookId": "8", "bookName": "The Alchemist", "category": "Philosophy", "rentPerDay": 4 },
  { "bookId": "9", "bookName": "Moby Dick", "category": "Adventure", "rentPerDay": 6 },
  { "bookId": "10", "bookName": "The Road", "category": "Dystopian", "rentPerDay": 5 },
  { "bookId": "11", "bookName": "Ulysses", "category": "Modernist", "rentPerDay": 7 },
  { "bookId": "12", "bookName": "Crime and Punishment", "category": "Psychological", "rentPerDay": 6 },
  { "bookId": "13", "bookName": "Anna Karenina", "category": "Romance", "rentPerDay": 5 },
  { "bookId": "14", "bookName": "The Brothers Karamazov", "category": "Philosophy", "rentPerDay": 8 },
  { "bookId": "15", "bookName": "Wuthering Heights", "category": "Classic", "rentPerDay": 5 },
  { "bookId": "16", "bookName": "The Picture of Dorian Gray", "category": "Philosophy", "rentPerDay": 4 },
  { "bookId": "17", "bookName": "Brave New World", "category": "Dystopian", "rentPerDay": 6 },
  { "bookId": "18", "bookName": "The Kite Runner", "category": "Drama", "rentPerDay": 5 },
  { "bookId": "19", "bookName": "Life of Pi", "category": "Adventure", "rentPerDay": 4 },
  { "bookId": "20", "bookName": "The Fault in Our Stars", "category": "Romance", "rentPerDay": 5 }
]
```

### Transactions Collection
Fields:
- `transactionId` (unique identifier)
- `bookId` (string)
- `userId` (string)
- `issueDate` (date)
- `returnDate` (date, nullable)
- `rentGenerated` (number, nullable)

## API Endpoints

### Users and Books
#### Helper APIs:
1. **Get all users**
   - **Endpoint:** `/api/users`
   - **Method:** GET
2. **Get all books**
   - **Endpoint:** `/api/books`
   - **Method:** GET

### Book Queries
1. **Search books by name or term**
   - **Endpoint:** `/api/books/search`
   - **Method:** GET
   - **Query Parameters:** `term`
2. **Filter books by rent range**
   - **Endpoint:** `/api/books/filter`
   - **Method:** GET
   - **Query Parameters:** `minRent`, `maxRent`
3. **Search books by category, term, and rent range**
   - **Endpoint:** `/api/books/advanced-search`
   - **Method:** GET
   - **Query Parameters:** `category`, `term`, `minRent`, `maxRent`

### Transaction Queries
1. **Issue a book**
   - **Endpoint:** `/api/transactions/issue`
   - **Method:** POST
   - **Body:** `{ "bookId": "", "userId": "", "issueDate": "" }`
2. **Return a book**
   - **Endpoint:** `/api/transactions/return`
   - **Method:** POST
   - **Body:** `{ "bookId": "", "userId": "", "returnDate": "" }`
3. **Get transaction details by book name**
   - **Endpoint:** `/api/transactions/by-book`
   - **Method:** GET
   - **Query Parameters:** `bookName`
4. **Calculate total rent generated by a book**
   - **Endpoint:** `/api/transactions/rent-by-book`
   - **Method:** GET
   - **Query Parameters:** `bookName`
5. **List books issued to a user**
   - **Endpoint:** `/api/transactions/by-user`
   - **Method:** GET
   - **Query Parameters:** `userId`
6. **Get transactions by date range**
   - **Endpoint:** `/api/transactions/by-date-range`
   - **Method:** GET
   - **Query Parameters:** `startDate`, `endDate`

## Validation
- User validation is performed against the `Users` collection.
- Book validation is performed against the `Books` collection.

## Rent Calculation
Rent is calculated based on the issue and return dates using the formula:
```
Rent = Days * rentPerDay
```

## Conclusion
This system provides a comprehensive way to manage a library's users, books, and transactions. It offers various APIs to retrieve and update data seamlessly.
