import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Cards from './Cards';
import { ResumeData } from '../dataFormat';
import { useContext, useState } from 'react';

export default function AdditionalInfo() {
    const { resumeData, setResumeData } = useContext(ResumeData);

    const handleInfoChange = (e, index) => {
        const { name, value } = e.target;
        const updatedInfo = [...resumeData.infos.info];
        updatedInfo[index] = {
            ...updatedInfo[index],
            [name]: value,
        };
        setResumeData(prev => ({
            ...prev,
            infos: { info: updatedInfo },
        }));
    };

    const handleAddInfo = () => {
        setResumeData(prev => ({
            ...prev,
            infos: {
                info: [
                    ...prev.infos.info, 
                    { 
                        label: "", 
                        description: "",
                        startDate:"",
                        endDate:""
                    }]
            }
        }));
    };

    const handleDeleteInfo = (index) => {
        const updatedInfo = resumeData.infos.info.filter((_, i) => i !== index);
        setResumeData(prev => ({
            ...prev,
            infos: { info: updatedInfo }
        }));
    };

    return (
        <>
            <h2>Adicional Informations</h2>
            <hr />
            <Cards
                dataList={resumeData.infos.info}
                onAdd={handleAddInfo}
                onDelete={handleDeleteInfo}
                renderItem={(InfoItem, index) => (
                    <Form>
                        <Form.Label>Label</Form.Label>
                        <Form.Control 
                            className="mb-3"
                            placeholder="Course, Awards, Volunteer, etc..."
                            type="text"
                            name="label"
                            value={InfoItem.nameInfo}
                            onChange={(e) => handleInfoChange(e, index)}
                        />
                        <InputGroup className="my-4">
                            <InputGroup.Text>Start & End Date</InputGroup.Text>
                            <Form.Control
                                type="date"
                                name="startDate"
                                value={InfoItem.startDate}
                                onChange={(e) => handleInfoChange(e, index)}
                            />
                            <Form.Control
                                type="date"
                                name="endDate"
                                value={InfoItem.endDate}
                                onChange={(e) => handleInfoChange(e, index)}
                            />
                        </InputGroup>

                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Description"
                            name="description"
                            value={InfoItem.description}
                            onChange={(e) => handleInfoChange(e, index)}
                        />
                    </Form>
                )}
                getTitle={(item) => item.label || "New Education"}
            />
        </>
    );
}
