import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Cards from './Cards';
import { ResumeData } from '../dataFormat';
import { useContext, useState } from 'react';

export default function Education() {
    const { resumeData, setResumeData } = useContext(ResumeData);

    const handleEducationChange = (e, index) => {
        const { name, value } = e.target;
        const updatedEducation = [...resumeData.education.educationList];
        updatedEducation[index] = {
            ...updatedEducation[index],
            [name]: value,
        };
        setResumeData(prev => ({
            ...prev,
            education: { educationList: updatedEducation },
        }));
    };

    const handleAddEducation = () => {
        setResumeData(prev => ({
            ...prev,
            education: {
                educationList: [
                    ...prev.education.educationList,
                    {
                        course: "",
                        university: "",
                        startDate: "",
                        endDate: "",
                        city: "",
                        description: ""
                    }
                ]
            }
        }));
    };

    const handleDeleteEducation = (index) => {
        const updatedEducation = resumeData.education.educationList.filter((_, i) => i !== index);
        setResumeData(prev => ({
            ...prev,
            education: { educationList: updatedEducation }
        }));
    };

    return (
        <>
            <h2>Education</h2>
            <hr />
            <Cards
                dataList={resumeData.education.educationList}
                onAdd={handleAddEducation}
                onDelete={handleDeleteEducation}
                renderItem={(educationItem, index) => (
                    <Form>
                        <Row>
                            <Col>
                                <Form.Label>Course</Form.Label>
                                <Form.Control
                                    placeholder="Computing Science"
                                    type="text"
                                    name="course"
                                    value={educationItem.nameCourse}
                                    onChange={(e) => handleEducationChange(e, index)}
                                />
                            </Col>
                            <Col>
                                <Form.Label>University</Form.Label>
                                <Form.Control
                                    placeholder="MIT"
                                    type="text"
                                    name="university"
                                    value={educationItem.university}
                                    onChange={(e) => handleEducationChange(e, index)}
                                />
                            </Col>
                        </Row>

                        <InputGroup className="my-4">
                            <InputGroup.Text>Start & End Date</InputGroup.Text>
                            <Form.Control
                                type="date"
                                name="startDate"
                                value={educationItem.startDate}
                                onChange={(e) => handleEducationChange(e, index)}
                            />
                            <Form.Control
                                type="date"
                                name="endDate"
                                value={educationItem.endDate}
                                onChange={(e) => handleEducationChange(e, index)}
                            />
                        </InputGroup>

                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cambridge"
                                name="city"
                                value={educationItem.city}
                                onChange={(e) => handleEducationChange(e, index)}
                            />
                            <Form.Label className="mt-3">Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Description"
                                name="description"
                                value={educationItem.description}
                                onChange={(e) => handleEducationChange(e, index)}
                            />
                        </Form.Group>
                    </Form>
                )}
                getTitle={(item) => item.course || "New Education"}
            />
        </>
    );
}
