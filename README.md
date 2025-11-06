# Boredom Breaker

Interactive web app built with **Express.js**, **Axios**, and a **public API**, helping users find random activities to beat boredom instantly.

<p align="center">
  <img src="" alt="Boredom Breaker Banner" width="800"/>
</p>

<br>

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **API Handling:** Axios
- **Templating:** EJS
- **Styling:** CSS
- **Middleware:** body-parser
- **External API:** [Bored API (App Brewery)](https://bored-api.appbrewery.com)

<br>

---

## Features

- Fetches **random activities** using a public API.
- Lets users **filter activities** by type (e.g., education, recreation, charity) and number of participants.
- Integrates **Axios** to handle asynchronous API requests cleanly and efficiently.
- Displays results dynamically using **EJS templates**.
- Gracefully handles **errors** such as unavailable activities or API request failures.

<br>

---

## Requirements

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Edge, etc.)

<br>

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MustafaHabibX/boredom-breaker.git
```

2. Navigate to the project folder:

```bash
cd boredom-breaker
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node index.js
```

5. Open your browser at:

```
http://localhost:3000
```

<br>

---

## How to Use

1. Visit the app’s home page to get a **random activity suggestion**.
2. Optionally, choose a **type** and **number of participants** from the dropdown menus.
3. Click **Submit** to fetch a filtered activity using the **Bored API**.
4. If no match is found, the app will notify you with a friendly message.

<br>

---

## Learning Outcomes

- Learned to use **Axios** for making asynchronous API calls in Node.js.
- Gained experience working with **public APIs** and query parameters.
- Practiced handling **JSON responses** and rendering data dynamically using **EJS**.
- Strengthened understanding of **Express.js routing** and **error handling**.
- Developed a better grasp of **server-side rendering** and **API-driven project architecture**.
- Built a user-friendly, real-time **API integration project** suitable for a developer portfolio.

<br>
