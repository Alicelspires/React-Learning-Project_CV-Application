import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ResumeData } from '../dataFormat';
import { useContext } from 'react';

export default function GeneralInfo(){
    const {resumeData, setResumeData} = useContext(ResumeData);

    const handleChanges = (e) => {
        const {name, value} = e.target;
        setResumeData(prev => ({
            ...prev,
            generalInfo:{
                ...prev.generalInfo,
                [name]: value,
            },
        }))
    }

    return (
        <>
            <h1>CV - Resume Generator</h1>
            <hr />
            <h2>General Infos</h2>
            <hr />
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">First Name</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="John" id="firstName" name="firstName" value={resumeData.generalInfo.firstName} onChange={handleChanges}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Last Name</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Doe" id="lastName" name="lastName" value={resumeData.generalInfo.lastName} onChange={handleChanges}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">Mainly e-mails</Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" placeholder="JohnDoe@gmail.com | github/AliceSilva.com" id="email" name="email" value={resumeData.generalInfo.email} onChange={handleChanges}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">Phone</Form.Label>
                    <Col sm="10">
                    <Form.Control type="tel" placeholder="DDD" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" id="phone" name="phone" value={resumeData.generalInfo.phone} onChange={handleChanges}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">State</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="São Paulo" id="city" name="city" value={resumeData.generalInfo.city} onChange={handleChanges}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">City</Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="SP" id="state" name="state" value={resumeData.generalInfo.state} onChange={handleChanges}/>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}