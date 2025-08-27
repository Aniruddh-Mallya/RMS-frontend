# RMS Frontend (Research Management System)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

This is the frontend for the Research Management System, a modern Single-Page Application (SPA) built with React and Vite.

---

## 🌐 Live Site

**[View the deployed application here](https://brave-bush-03579dc03.1.azurestaticapps.net)**

---

## 🚀 Deployment

This application is deployed on **Azure Static Web Apps**. This service provides:

* **Global Distribution:** The site is hosted on a **global Content Delivery Network (CDN)**, ensuring fast load times for users anywhere in the world.
* **Continuous Deployment:** CI/CD is enabled through **GitHub Actions**. Every push to the `main` branch is automatically built and deployed.
* **Serverless Functions:** While not used in this iteration, the architecture allows for easy integration with Azure Functions for serverless API endpoints.



---

## ✨ Features

* Secure user authentication with JWT.
* A protected dashboard for viewing and managing research projects.
* The ability to add new research projects to the system.

---

## 🛠️ Tech Stack

* **Framework:** React 19
* **Build Tool:** Vite
* **Language:** TypeScript
* **Routing:** React Router
* **API Communication:** Axios

---

## ⚙️ Configuration & Local Setup

To connect to a local backend API, create a `.env` file in the root directory and add the following variable:

.env file for rms-frontend
VITE_API_URL=http://localhost:5001/api


---

## 🏃‍♀️ Running Locally

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
