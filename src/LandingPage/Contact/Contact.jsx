
import "./contact.css"

import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Contact = () => {
  return (
    <div className="Contact">
        <div className="contactWrapper">
            <div className="contactTitle">
                <h5>CONTACT US</h5>
            </div>
            <div className="contactPart">
                <div className="contactFaq">
                  <h6>FAQ</h6>
                  <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I contact you?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora ab ullam quo aperiam neque culpa, deserunt iure quis ratione quia sequi possimus itaque porro voluptas eligendi architecto est facere.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does it work?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora in error harum deleniti voluptas quasi eius. Fugiat, magnam. Possimus!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I contact you?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora ab ullam quo aperiam neque culpa, deserunt iure quis ratione quia sequi possimus itaque porro voluptas eligendi architecto est facere.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do I contact you?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora ab ullam quo aperiam neque culpa, deserunt iure quis ratione quia sequi possimus itaque porro voluptas eligendi architecto est facere.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
                <div className="contactForm">
                  <h6>Message Us</h6>
                    <Form className='contactInputs'>
                        <input type="text" placeholder='Ex Anisa Sulaj' />
                        <input type="email" placeholder='Ex AnisaSulaj@gmail.com'  />
                        <input type="text" placeholder='Ex +355 69 876 7654' />
                        <textarea name="Message" id="" cols="30" rows="5" placeholder='I would like to know...'></textarea>
                        <button type='submit'>Submit</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact