# 🚀 Website Name: DevStack

A modern technology stack showcase built with React and TailwindCSS.

## 📝 Description
This project is a simple but powerful demo that shows how to build a responsive UI, load JSON data, and display technology cards with ratings, badges, and difficulty levels. It’s designed to be clean, fast, and beginner‑friendly.

## ⚙️ Technology Used
- React.js
- Tailwind CSS + DaisyUI
- TypeScript / JavaScript (ES6+)
- React‑Toastify
- JSON (for technology data)
- Vite (build tool)

## ✨ Features
1. ⏳ Loading state while fetching JSON data  
2. 🎨 Gradient brand theme (orange → pink → violet)  
3. 📊 Dynamic tech cards with rating, badge, and difficulty  

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**  
JSX lets us write HTML inside JavaScript. It makes UI code easier to read and maintain.

**2. What is the difference between props and state?**  
Props are values passed from parent to child. State is local data that changes inside a component.

**3. What does the useState hook do, and where did you use it in this project?**  
`useState` creates reactive variables. I used it for `loading` and `data`.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**  
`useEffect` runs side effects. I used it to fetch JSON when the app first loads.

**5. Why does every item in a .map() list need a unique key prop?**  
Keys help React identify each item and update the UI efficiently.

**6. What is conditional rendering? Show one place you used it.**  
Conditional rendering shows different UI depending on state. Example: showing "⏳ Loading..." when data is not ready.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**  
Parent → Child: via props.  
Child → Parent: via callback functions passed as props.

---

## ❓ FAQ

**1. Where can we deploy the site?**  
Netlify, Vercel, Cloudflare Pages, or any host.  

**2. Do we have to use TypeScript?**  
No. You can use TypeScript or plain JavaScript.  

**3. Can we change the title, logo, and colors?**  
Yes. Just keep them relevant to the project.  
