## OX Security Assignment

- [ ] **Description** - This is a full-stack application for managing employee statuses.
      The system allows users to view, filter, and update employee statuses via a simple and intuitive interface.
      The backend was pre-made and powered by an Express REST server, and the frontend is built using React.

## Technologies I used

- React JS with Typescript
- React Query
- Styled Components
- Ant Design

## App Screens

     - Employees list
     - Filter employees by status
     - Search employees by name

![Employees list](https://i.ibb.co/yh7M4sn/1.jpg)

![Filter employees by status](https://i.ibb.co/59pL1Cd/2.jpg)

## Create new user modal

![enter image description here](https://i.ibb.co/c6kRCnR/3.jpg)

## UX Improvements

- When the user attempts to enter the employee's name, a validation is performed on the input, allowing only characters from the English alphabet (A-Z) and no special characters. If the user tries to input special characters, a validation message will be displayed below the input field accordingly.
- When the user searches for an Employee in the Search Input, whatever they type will be updated in the URL, so that even after refreshing the page, the search state they performed will remain.

## Usage

- Open Terminal and run `git clone https://github.com/matan3sh/ox-security-assignment`
- Go to `cd ox-security-assignment`
- Open second tab
- In the second tab go to server folder then install dependencies with `npm i` and **run** `npm run dev` running on `http://localhost:8000`
- In the first tab go to client folder then install dependencies with `npm i` and **run** `npm run dev` running on `http://localhost:5173`
- Open Browser --> http://localhost:5173

_Thank you :)_
