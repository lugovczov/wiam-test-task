import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';
import ErrorBoundary from './components/ErrorBoundary';
import { FormDataProvider } from './context/FormDataContext';
import './App.css';

const Form1 = lazy(() => import('./components/Form1'));
const Form2 = lazy(() => import('./components/Form2'));
const Form3 = lazy(() => import('./components/Form3'));
const Alert = lazy(() => import('./components/Alert'));
const ConfirmationModal = lazy(() => import('./components/ConfirmationModal'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <FormDataProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={ROUTES.FORM1} element={<Form1 />} />
              <Route path={ROUTES.FORM2} element={<Form2 />} />
              <Route path={ROUTES.FORM3} element={<Form3 />} />
            </Routes>
          </Suspense>
        </Router>
        <Alert />
        <ConfirmationModal />
      </FormDataProvider>
    </ErrorBoundary>
  );
};

export default App;