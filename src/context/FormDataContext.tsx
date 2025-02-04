import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
  workplace: string;
  address: string;
  loanAmount: number;
  loanDuration: number;
  workplaceOptions: string[];
}

interface FormDataContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(undefined);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    firstName: '',
    lastName: '',
    gender: '',
    workplace: '',
    address: '',
    loanAmount: 200,
    loanDuration: 10,
    workplaceOptions: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <FormDataContext.Provider value={{ formData, setFormData, showModal, setShowModal, alertMessage, setAlertMessage }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};