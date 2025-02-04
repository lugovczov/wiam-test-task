1. Ссылка на деплой: https://wiam-test-task.vercel.app/
2. Затраченное время: 3-4 часа

## How to run the application

1. run `npm install`
2. run `npm run dev`

## Application Documentation

### Overview

This application is a multi-step form built with React and React Router. It uses context for state management and error boundaries for error handling. The application consists of three main forms: `Form1`, `Form2`, and `Form3`.

### Components

1. **Form1**: Collects personal information such as phone number, first name, last name, and gender. It uses context to manage form data and displays alerts for validation errors.

2. **Form2**: Collects address and workplace information. It fetches workplace options using an API function from `api.ts` and displays alerts for errors. It navigates to `Form3` upon successful validation.

3. **Form3**: Collects loan details such as loan amount and duration. It submits the data using an API function from `api.ts` and displays a confirmation modal upon successful submission.

### Context

- **FormDataContext**: Manages the global state for form data, alert messages, and modal visibility. It provides functions to update form data, set alert messages, and control the confirmation modal.

### Error Handling

- **ErrorBoundary**: Catches errors during rendering and displays them using an alert. It is used to wrap the entire application.

- **Alert System**: Alerts are managed via context and displayed using the `Alert` component, which is lazy-loaded and wrapped in `Suspense`.

### Routing

- **React Router**: Used to navigate between forms. The routes are defined in the `App.tsx` file using `Routes` and `Route` components.

### API Integration

- **Axios**: Used in `Form2` to retrieve workplace options and in `Form3` to submit loan details. API functions are centralized in `api.ts`.

### Modals

- **ConfirmationModal**: Displays a confirmation message upon successful submission of loan details in `Form3`. It is controlled via context and displayed in the `App.tsx` component.