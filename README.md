# Firebase Contact App

This is a web application built using **Vite**, **React**, and **Firebase**. It allows users to **Create**, **Read**, **Update**, and **Delete (CRUD)** contact information such as name and email. The app leverages **Firebase's real-time Firestore database** for data storage and synchronization, ensuring persistence and live updates across devices.

## 🔑 Key Features

- **Contact Creation:**  
  Easily add new contacts by entering a name and email address.

- **Contact Listing:**  
  View all saved contacts in a list format.

- **Contact Search:**  
  Instantly search for contacts using keywords in the search bar.

- **Contact Editing:**  
  Update existing contact information with new name or email.

- **Contact Deletion:**  
  Remove unwanted contacts from the list.

- **Realtime Updates:**  
  Changes are reflected instantly using Firebase's `onSnapshot()` listener.

## 🛠️ Tech Stack

- **Frontend:** React + Vite  
- **Database:** Firebase Firestore  
- **Hosting:** Firebase Hosting  
- **Styling:** Tailwind CSS  
- **Icons:** react-icons  
- **Notifications:** react-toastify  

## 🚀 Getting Started

**1. Clone the repository**  
 ```bash
   git clone https://github.com/your-username/Firebase-Contact-App.git
   cd Firebase-Contact-App
```
**2. Install dependencies**
```bash
   npm install
```
**3.  Set up Firebase**
•	Create a Firebase project on Firebase Console
•	Enable Firestore Database
•	Copy your Firebase config and paste it into src/config/firebase.js
**4. Run the app locally**
```bash
   npm run dev
```

# 🌐 Deployment
To deploy on Firebase Hosting:
```bash
    npm run build
     firebase init
     firebase deploy
```

