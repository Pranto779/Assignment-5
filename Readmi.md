Website Name: DevStack

A modern technology stack showcase built with React and TailwindCSS.

Description

This project is a simple but powerful demo that shows how to build a responsive UI, load JSON data, and display technology cards with ratings, badges, and difficulty levels. It’s designed to be clean, fast, and beginner‑friendly.

My Used Technology :
React.js
Tailwind CSS + DaisyUI
TypeScript / JavaScript (ES6+)
React‑Toastify

JSON
Vite

DevStack Website Features:
Loading state while fetching JSON data  
Gradient brand theme (orange → pink → violet)  
 Dynamic tech cards with rating, badge, and difficulty

React Questions:

What is JSX, and why is it used in React?
ans: JSX Use for write HTML inside JavaScript. This is use for better ui.

What is the difference between props and state?
Props is the medium to send data parent to child. State is local data that changes inside a component.

What does the useState hook do, and where did you use it in this project?
useState creates reactive variables. I used it for loading and data.

What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs side effects. I used it to fetch JSON when the app first loads.

Why does every item in a .map() list need a unique key prop?
Keys help React identify each item and update the UI efficiently and rendaring data to api.

What is conditional rendering? Show one place you used it
Conditional rendering shows different UI depending on state. Example: showing " Loading..." when data is not ready.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent → Child: via props.  
Child → Parent: via callback functions passed as props.



Where can we deploy the site?
Netlify, Vercel, Cloudflare Pages, or any host.

Do we have to use TypeScript?
No. You can use TypeScript or plain JavaScript.  
 Can we change the title, logo, and colors?
Yes. Just keep them relevant to the project.
