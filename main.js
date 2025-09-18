const API = "https://jsonplaceholder.typicode.com/users"; // Mock server

const form = document.getElementById("contactForm");

const list = document.getElementById("contactList");

// Initial fetch (load existing 10 dummy users)

async function fetchContacts() {

const res = await fetch(API);

const users = await res.json();

render(users);

}

// Handle form submission

form.addEventListener("submit", async (e) => {

e.preventDefault();

const data = Object.fromEntries(new FormData(form));

// Send POST request (fake save on JSONPlaceholder)

const res = await fetch(API, {

method: "POST",

headers: { "Content-Type": "application/json" },

body: JSON.stringify(data)

});

// Get the fake response (server returns data with an id)

const created = await res.json();

// ✅ Append new contact directly to the list

list.insertAdjacentHTML("beforeend", `<li>${created.name} — ${created.email}</li>`);

// Clear form

form.reset();

});

// Render function

function render(users) {

list.innerHTML = users.map(u => `<li>${u.name} — ${u.email}</li>`).join("");

}

