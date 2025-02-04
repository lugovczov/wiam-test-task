import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context/FormDataContext';
import { Form, Button } from 'react-bootstrap';
import { ROUTES } from '../constants';

const Form1: React.FC = () => {
  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(ROUTES.FORM2);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mt-4 mb-4">
      <h2>Личные данные</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            placeholder="Телефон"
            required
            pattern="0\d{3} \d{3} \d{3}"
            title="Phone number must be in the format 0XXX XXX XXX"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Имя"
            name="firstName"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            placeholder="Фамилия"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            value={formData.gender}
            onChange={handleChange}
            name="gender"
            required
          >
            <option value="">Пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">Далее</Button>
      </Form>
    </div>
  );
};

export default Form1;