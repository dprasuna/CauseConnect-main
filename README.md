# 🌟 CauseConnect

**CauseConnect** is a dynamic web application designed to help users discover and connect with volunteer opportunities organized by local NGOs and community initiatives. Our mission is to bridge the gap between volunteers and organizations, making event discovery, registration, and participation seamless and impactful.

---

🎥 **YouTube Demo**: [Watch Now](#)  
![Community drive](image.png)

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [💻 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [🔑 Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🔒 Environment Variables](#-environment-variables)
- [🏃‍♀️ Running the App](#%EF%B8%8F-running-the-app)
- [🌐 API Endpoints](#-api-endpoints)
- [📂 Folder Structure](#-folder-structure)
- [🌟 Future Improvements](#-future-improvements)
- [📜 License](#-license)

---

## ✨ Features

- **🌍 Event Discovery:** Easily browse and search for volunteer events in your area.
- **🔒 User Authentication:** Sign up, log in, and enjoy secure access with JWT authentication.
- **📅 Event Registration:** Register for events, view past participations, and receive updates.
- **📋 Organizer Dashboard:** NGOs and organizations can effortlessly create, update, and manage events.
- **⚡ Pagination & Loading Effects:** Smooth browsing experience with dynamic pagination and loading indicators.

---

## 💻 Tech Stack

| **Frontend**       | **Backend**       | **Database**         | **Authentication**    | **Map Integration**   |
|--------------------|-------------------|----------------------|-----------------------|-----------------------|
| React, TypeScript  | Node.js, Express  | MongoDB (Atlas)      | JSON Web Tokens (JWT) | OpenStreetMap         |
| Tailwind CSS       |                   |                      |                       |                       |
| Daisy UI           |                   |                      |                       |                       |

---

## 🚀 Getting Started

### 🔑 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and cluster (or a local MongoDB instance)

### ⚙️ Installation

Clone the repository:

```bash
$ git clone https://github.com/dprasuna/CauseConnect.git
$ cd cause-connect
```

Install dependencies for both backend and frontend:

```bash
# Backend
$ cd backend
$ npm install

# Frontend
$ cd ../frontend
$ npm install
```

---

### 🔒 Environment Variables

Create a `.env` file in the root of the **backend** folder and add the following variables:

```env
# MongoDB connection string
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your-database>?retryWrites=true&w=majority

# JWT Secret
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=90d

# Other configurations
PORT=5000
```

---

## 🏃‍♀️ Running the App

### Start the backend server:

```bash
$ cd backend
$ npm run dev
```

### Start the frontend development server:

```bash
$ cd ../frontend
$ npm start
```

### Open the app in your browser:

```
http://localhost:3000
```

---

## 🌟 Future Improvements

- **🤖 In-app Virtual Assistant:** Suggest event ideas and autofill forms.
- **💬 In-app Messaging:** Enable direct communication between volunteers and organizers.
- **🔔 Notifications:** Send reminders and updates for upcoming events.

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

---

💡 **Get involved and help us make a difference with CauseConnect!** 🌏
