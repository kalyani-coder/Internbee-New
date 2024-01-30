import React, { useState , useEffect} from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [serviceName, setServiceName] = useState('');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handlePDFChange = (event) => {
    setSelectedPDF(event.target.files[0]);
  };

  const handleServiceNameChange = (event) => {
    setServiceName(event.target.value);
  };

  const handleUpload = () => {
    if (selectedImage || selectedPDF) {
      const formData = new FormData();
      if (selectedImage) formData.append('image', selectedImage);
      if (selectedPDF) formData.append('pdf', selectedPDF);
      formData.append('serviceName', serviceName);

      fetch('https://internbee-backend-apis.onrender.com/api/imageupload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Files uploaded successfully:', data);
          alert('Files Uploaded Successfully', 'success');
        })
        .catch((error) => {
          console.error('Error uploading files:', error);
          alert('Error Uploading Files', 'error');
        });
    }
  };

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = () => {
    fetch('https://internbee-backend-apis.onrender.com/api/imageupload')
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error('Error fetching candidates:', error));
  };

  const handleDownloadPDF = (pdfPath) => {
    window.open(`http://localhost:8000/${pdfPath}`, '_blank');
  };
  return (
    <div>
      <Form.Group controlId="serviceName">
        <Form.Label>Name of Service:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Service Name"
          value={serviceName}
          required
          onChange={handleServiceNameChange}
        />
      </Form.Group>

      <Form.Group controlId="serviceImage">
        <Form.Label>Upload Image:</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </Form.Group>

      <Form.Group controlId="servicePDF">
        <Form.Label>Upload PDF:</Form.Label>
        <Form.Control
          type="file"
          accept="application/pdf"
          onChange={handlePDFChange}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleUpload}>
        Save
      </Button>

      <ListGroup>
        <ListGroup.Item variant="info">List of Candidates</ListGroup.Item>
        {candidates.map((candidate) => (
          <ListGroup.Item key={candidate._id}>
            <strong>{candidate.serviceName}</strong>
            <br />
            <img src={candidate.serviceImage} alt={candidate.serviceName} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            {candidate.pdfPath && (
              <Button variant="primary" onClick={() => handleDownloadPDF(candidate.pdfPath)}>
                Download PDF
              </Button>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>


    </div>
  );
};

export default UploadImage;
