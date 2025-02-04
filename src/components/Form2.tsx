import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormDataContext';
import { ROUTES } from '../constants';
import { fetchWorkspaceOptions } from '../api/api';
import { Form, Button } from 'react-bootstrap';

const Form2: React.FC = () => {
  const { formData, setFormData, setAlertMessage } = useFormData();
  const navigate = useNavigate();

  useEffect(() => {
    const loadWorkplaceOptions = async () => {
      try {
        const data = await fetchWorkspaceOptions();
        setFormData({ ...formData, workplaceOptions: data });
      } catch (error: any) {
        setAlertMessage(`Error fetching workplace options: ${error.message || error}`);
      }
    };

    loadWorkplaceOptions();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    navigate(ROUTES.FORM3);
  };

  const handleBack = () => {
    navigate(ROUTES.FORM1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mt-4 mb-4">
      <h2>Адрес и место работы</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Select
            value={formData.workplace}
            onChange={handleChange}
            name="workplace"
            required
          >
            <option value="">Место работы</option>
            {formData.workplaceOptions?.map((option, index) => (
              <option key={option + index} value={option}>{option}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={formData.address}
            onChange={handleChange}
            name="address"
            placeholder="Адрес проживания"
            required
          />
        </Form.Group>
        <Button variant="secondary mx-1" type="button" onClick={handleBack}>Назад</Button>
        <Button variant="primary mx-1" type="submit">Далее</Button>
      </Form>
    </div>
  );
};

export default Form2;