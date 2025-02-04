import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormDataContext';
import { ROUTES } from '../constants';
import { Form, Button } from 'react-bootstrap';
import { submitApplication } from '../api/api';

const Form3: React.FC = () => {
  const { formData, setFormData, setShowModal, setAlertMessage } = useFormData();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await submitApplication(formData.firstName, formData.lastName);
      setShowModal(true);
    } catch (error) {
      setAlertMessage(`Error submitting loan application: ${error}`);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleBack = () => {
    navigate(ROUTES.FORM2);
  };

  return (
    <div className="container mt-4 mb-4">
      <h2>Параметры займа</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            Сумма: ${formData.loanAmount}
            <Form.Range
              min="200"
              max="1000"
              step="100"
              value={formData.loanAmount}
              onChange={handleChange}
              name="loanAmount"
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Срок: {formData.loanDuration} days
            <Form.Range
              min="10"
              max="30"
              step="1"
              value={formData.loanDuration}
              onChange={handleChange}
              name="loanDuration"
            />
          </Form.Label>
        </Form.Group>

        <Button variant="secondary mx-1" type="button" onClick={handleBack}>Назад</Button>
        <Button variant="primary mx-1" type="submit">Подать заявку</Button>
      </Form>
    </div>
  );
};

export default Form3;