# Expense Tracker

## Overview
The **Expense Tracker** is a full-stack web application that helps users track their daily expenses. It allows users to add, filter, and view their expenses with a clean and interactive UI.

## Features
- Add new expenses with amount, category, date, and description.
- View all expenses in a tabular format.
- Filter expenses by category and date.
- Display the total expense amount.
- Persist data using MongoDB.
- Responsive UI using React.js and Tailwind CSS.

---

## Tech Stack
### Frontend:
- **React.js** (Component-based UI development)
- **Tailwind CSS** (For styling)
- **Axios** (For API calls)

### Backend:
- **Node.js & Express.js** (REST API)
- **MongoDB & Mongoose** (Database & ORM)

---

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **MongoDB** (locally or via cloud service like MongoDB Atlas)

### Clone Repository
```sh
git clone https://github.com/your-repo/expense-tracker.git
cd expense-tracker
```

### Backend Setup
```sh
cd backend
npm install
```
#### Configure Environment Variables
Create a `.env` file in the `backend` directory and add:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/expense_tracker
```
#### Start Backend Server
```sh
npm start
```
The backend will run on `http://localhost:5000`

### Frontend Setup
```sh
cd ../frontend
npm install
npm start
```
The frontend will run on `http://localhost:3000`

---

## API Endpoints
### Base URL: `http://localhost:5000`

#### Add an Expense
- **POST** `/expenses`
- **Body**:
```json
{
  "amount": 500,
  "category": "Food",
  "date": "2024-03-04",
  "description": "Lunch"
}
```

#### Get All Expenses
- **GET** `/expenses`

#### Get Filtered Expenses
- **GET** `/expenses?category=Food&date=2024-03-04`

#### Get Total Expense
- **GET** `/expenses/total`
- **Query Params**: `start` and `end` date

#### Delete All Expenses
- **DELETE** `/expenses`

---

## Usage Guide
1. Open the application in the browser (`http://localhost:3000`).
2. Add an expense by filling out the form and clicking `Add Expense`.
3. View added expenses in the list.
4. Use filters to search for expenses by category or date.
5. Check the total expense displayed below the form.


---

## Additional Notes
- Ensure MongoDB is running before starting the backend.
- Update `MONGO_URI` if using a remote database.



