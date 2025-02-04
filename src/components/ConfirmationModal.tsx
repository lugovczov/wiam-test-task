import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormData } from '../context/FormDataContext';

const ConfirmationModal: React.FC = () => {
  const { formData, showModal, setShowModal } = useFormData();

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Поздравляем !</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{formData.firstName} {formData.lastName}</p>
        <p>Вам одобрена ${formData.loanAmount} на {formData.loanDuration} дней</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;