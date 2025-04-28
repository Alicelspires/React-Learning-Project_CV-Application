import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Cards from './Cards';
import { ResumeData } from '../dataFormat';
import { useContext, useState } from 'react';

export default function Experience() {
    const { resumeData, setResumeData } = useContext(ResumeData);

    const handleExperienceChange = (e, index) => {
        const { name, value } = e.target;
        const updatedExperience = [...resumeData.experience.experienceList];
        updatedExperience[index] = {
            ...updatedExperience[index],
            [name]: value,
        };
        setResumeData(prev => ({
            ...prev,
            experience: { experienceList: updatedExperience },
        }));
    };

    const handleAddExperience = () => {
        setResumeData(prev => ({
            ...prev,
            experience: {
                experienceList: [
                    ...prev.experience.experienceList,
                    {
                        jobName: "",
                        companyName: "",
                        startDate: "",
                        endDate: "",
                        city: "",
                        description: ""
                    }
                ]
            }
        }));
    };

    const handleDeleteExperience = (index) => {
        const updatedExperience = resumeData.experience.experienceList.filter((_, i) => i !== index);
        setResumeData(prev => ({
            ...prev,
            experience: { experienceList: updatedExperience }
        }));
    };

    return (
        <>
            <h2>Experiences</h2>
            <hr />
            <Cards
                dataList={resumeData.experience.experienceList}
                onAdd={handleAddExperience}
                onDelete={handleDeleteExperience}
                renderItem={(experienceItem, index) => (
                    <Form>
                        <Row>
                            <Col>
                                <Form.Label>Job Name</Form.Label>
                                <Form.Control
                                    placeholder="Job title"
                                    type="text"
                                    name="jobName"
                                    value={experienceItem.jobName}
                                    onChange={(e) => handleExperienceChange(e, index)}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control
                                    placeholder="Company name"
                                    type="text"
                                    name="companyName"
                                    value={experienceItem.companyName}
                                    onChange={(e) => handleExperienceChange(e, index)}
                                />
                            </Col>
                        </Row>

                        <InputGroup className="my-4">
                            <InputGroup.Text>Start & End Date</InputGroup.Text>
                            <Form.Control
                                type="date"
                                name="startDate"
                                value={experienceItem.startDate}
                                onChange={(e) => handleExperienceChange(e, index)}
                            />
                            <Form.Control
                                type="date"
                                name="endDate"
                                value={experienceItem.endDate}
                                onChange={(e) => handleExperienceChange(e, index)}
                            />
                        </InputGroup>

                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                placeholder="São Paulo"
                                type="text"
                                name="city"
                                value={experienceItem.city}
                                onChange={(e) => handleExperienceChange(e, index)}
                            />
                            <Form.Label className="mt-3">Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Describe your role"
                                rows={5}
                                name="description"
                                value={experienceItem.description}
                                onChange={(e) => handleExperienceChange(e, index)}
                            />
                        </Form.Group>
                    </Form>
                )}
                getTitle={(item) => item.jobName || "New Experience"}
            />
        </>
    );
}
