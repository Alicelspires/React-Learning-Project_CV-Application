import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ResumeData } from '../dataFormat';
import { useContext } from 'react';

export default function Summary(){
    const {resumeData, setResumeData} = useContext(ResumeData);
    
    const handleChanges = (e) => {
        const {name, value} = e.target;
        setResumeData(prev => ({
            ...prev,
            summary:{
                ...prev.summary,
                [name]: value,
            },
        }))
    }

    return (
        <>
            <h2>Summary</h2>
            <hr />
            <Form>
                <Form.Text className="text-light" id="passwordHelpBlock">
                    Mention your role experience and your biggest achivements, qualities and skills
                </Form.Text>
                <Form.Group className="my-3">
                    <Form.Control as="textarea" rows={5}aria-describedby="passwordHelpBlock"  placeholder="Description" id="summary" name="summary" value={resumeData.summary.summary} onChange={handleChanges}/>
                </Form.Group>

            </Form>
        </>
    )
}