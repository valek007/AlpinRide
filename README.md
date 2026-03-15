                                Alpine Ride 🏔️🚌
Alpine Ride is a front-end project developed as part of the Wonders module. 
It is a fully responsive and interactive landing page for a premium bus ticket service in the Alps.

📌 Current Status – Fully Functional (HTML, SCSS & JavaScript)
The project has evolved from a static layout to a fully interactive application. 
All core booking features are now implemented with custom JavaScript, providing a seamless user experience for searching trips.

✅ Implemented Features
Interactive Booking Form (New! - JS Implemented)
Custom Date Range Picker:

Dynamic calendar rendering using JavaScript.
- Range selection logic (Start Date - End Date) with visual highlighting.
- "Confirm" button to lock selections and close the dropdown.
- Floating UI using absolute positioning for a modern look.

Dynamic Station Selector:
- Dropdown organized by countries (Switzerland, France, Italy, etc.).
- Interactive accordion-style country lists.
- Auto-population of inputs upon selection.

Trip Type Logic:

- Switching between Round Trip and One Way dynamically updates the UI.
- Automatic resetting of dates and arrival stations when switching modes to prevent data inconsistency.
- Disabling of "Return" fields in One Way mode.
- Passenger Counter: Interactive UI for selecting travelers (implemented in persons.js).
- Design & Responsiveness

Fully Responsive: Optimized for Desktop (1440px), Tablet (<768px), and Mobile (<430px).
SCSS Architecture: Scalable folder structure using partials, variables, and mixins.
Clean UI: Smooth transitions and floating containers that do not disrupt the page flow.

🛠️ Technologies Used
HTML5: Semantic structure.
SCSS (Sass): Advanced styling and responsive architecture.
JavaScript (ES6+): Modular logic (ES Modules) for calendar, stations, and form state.
npm scripts: For Sass compilation and development workflow.

🎯 Project Goals Achieved
The objective of this project was to master:

DOM Manipulation: Creating complex UI elements (like a calendar) from scratch.
Event Handling: Managing multiple user interactions across different form components.
State Management: Ensuring the form resets and behaves correctly when trip types change.
Modular JS: Organizing code into clean, reusable files (calendar.js, stationSelector.js, etc.).