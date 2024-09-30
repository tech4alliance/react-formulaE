# Tech Alliance - Formula E Website



<img src="/src/public/img/Screenshot_1.png">

## Overview

The **Mahindra Formula E** website is developed using **React (JavaScript)** with a focus on offering an interactive and visually appealing experience. It features a modern structure and advanced functionalities, ensuring users have smooth and intuitive navigation, regardless of the device used. The site includes features such as a **login system** using localStorage, an **image slideshow**, dynamic charts with **Chart.js**, and elegant animations using **Framer Motion**.

### 1. Responsiveness
The site is fully **responsive**, adapting perfectly to different screen resolutions, such as smartphones, tablets, and desktops. **Media queries** are used to ensure elements adjust according to screen size, maintaining usability and aesthetics on any device.

### 2. Login System
We implemented a **login system** that uses **localStorage** to store user session information. The system includes:
- **Authentication**: User credential verification during login.
- **Session Maintenance**: The site keeps the user logged in by using data saved in localStorage, even after refreshing the page or closing and reopening the browser.
- **Logout**: A logout button appears when the user is logged in, allowing them to end the session and remove data from localStorage.

When the user is logged in, the homepage content changes, displaying a message like "You are already logged in" and hiding the login, slideshow, and dark mode options.

### 3. Image Slideshow
The site features an **image slideshow** located on the login page. It is composed of a series of smaller images, with **navigation arrows** to switch between them, adding dynamic and visually engaging interaction. The structure is simple and effective, with the option to add new images or adjust its behavior as needed.

### 4. Dark Mode
To enhance the user experience, the site includes a **dark mode** feature that changes the **background image** to a dark theme (instead of just switching interface colors). The change is smooth and improves the usability of the site in low-light environments, also contributing to user comfort.

### 5. Animations with Framer Motion
Animations are handled using the **Framer Motion** library, which offers smooth and interactive transitions. These effects are used for:
- **Element entry and exit** in the viewport.
- **User interactions**, such as clicks or navigation, providing an engaging experience.
- **Animating charts** and other visual components for a more fluid and attractive presentation.

### 6. Charts with Chart.js and Recharts
To visualize data and statistics related to the team’s performance and vehicles in **Mahindra Formula E**, the site utilizes both **Chart.js** and **Recharts** to create dynamic and responsive charts. The types of charts include:
- **Line charts** to track performance progress.
- **Bar charts** for comparisons.
- **Pie charts** for proportional visualizations.

## Technologies Used

- **React (JavaScript)**: The main framework for developing the interface.
- **Framer Motion**: A library for smooth and interactive animations.
- **Chart.js & Recharts**: Used for creating dynamic and responsive charts.
- **LocalStorage**: For persistent storage of user session data.
- **Lucide-react**: A library for elegant, customizable icons.
- **React-icons**: For additional icon support and flexibility.
- **CSS3** and **Media Queries**: For responsive design.

---

## Folder Structure

- **/src**
  - **/components**: Components.
  - **/css**: CSS.
  - **/public/img**: Images.

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this code, provided that proper credit is given. The full license text can be found below:

