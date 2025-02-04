import React, { useEffect } from 'react';
import { useFormData } from '../context/FormDataContext';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert: React.FC = () => {
  const { alertMessage, setAlertMessage } = useFormData();

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage, setAlertMessage]);

  return alertMessage ?
    <BootstrapAlert variant="danger" onClose={() => setAlertMessage('')} dismissible>
      <BootstrapAlert.Heading>
        {alertMessage}
      </BootstrapAlert.Heading>
    </BootstrapAlert>
    : null;
};

export default Alert;