

# Frontend React Assignment (Unifize)

## Repository

GitHub URL: [https://github.com/Ravirbikant/unifize.git](https://github.com/Ravirbikant/unifize.git)

## How to Run the Code

Clone the Repository:
```bash
git clone https://github.com/Ravirbikant/unifize.git
cd unifize 
```


Ensure you have Node.js installed, then run:
```bash
npm install
```
Run the following command to start the app:
```bash
npm start
```
This will launch the app at http://localhost:3000 in your browser.

# Techincal Decisions


## Mock API Pagination:
 - To simulate API calls for pagination, the currentPage value is changed dynamically when navigating between pages. The app uses custom mock data for 5 pages, each containing 5 rows.
 - The displayed rows update based on the selected page, showcasing the functionality without actual API calls.

## Custom CSS:
- Since the CSS requirements were minimal, I opted to use custom CSS instead of Tailwind CSS, Bootstrap, or other libraries.
- This keeps the bundle size small and the styles simple.

## Mock API Data:
- I created mock data for 5 pages, each having 5 rows, to mimic paginated data. This approach allows smooth testing of the pagination feature without needing a backend API.

## Utility File:
- A utility file has been created to store reusable functions, such as those for formatting data or handling pagination. This helps maintain cleaner and more organized code.



