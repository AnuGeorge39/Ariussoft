import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const faqs = {
    'custom-software': 'Custom software solutions are tailor-made applications designed to meet specific business needs.',
    'software-benefit': 'Investing in custom software can bring several advantages to your business, helping you streamline operations, improve efficiency, and gain a competitive edge.',
     'software-developmenttime':'The timeline for developing custom software varies based on several factors, including complexity, features, and team size.',
     'software-with-existing-systems':'Custom software can be designed to integrate seamlessly with your existing systems, improving efficiency and ensuring smooth operations.',
};

  return (
    <div className="faq-container">
      <Form.Select
        aria-label="FAQ Select"
        onChange={(e) => setSelectedQuestion(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Select a question...
        </option>
        <option value="custom-software">What are custom software solutions?</option>
        <option value="software-benefit">How can custom software benefit my business?</option>
        <option value="software-developmenttime">How long does it take to develop custom software?</option>
        <option value="software-with-existing-systems">Can you integrate custom software with existing systems?</option>
      </Form.Select>

      {selectedQuestion && (
        <Card className="mt-3">
          <Card.Body>{faqs[selectedQuestion]}</Card.Body>
        </Card>
      )}
    </div>
  );
}

export default FAQ;
