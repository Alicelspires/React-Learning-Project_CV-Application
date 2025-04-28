import Form from 'react-bootstrap/Form';
import { ResumeData } from '../dataFormat';
import { useContext } from 'react';
import Cards from './Cards';

export default function Skills() {
    const { resumeData, setResumeData } = useContext(ResumeData);

    const handleSkillChange = (e, index) => {
        const updatedSkills = [...resumeData.skills.skillsList];
        updatedSkills[index] = e.target.value;
        setResumeData(prev => ({
            ...prev,
            skills: { skillsList: updatedSkills},
        }));
    };

    const handleAddSkill = () => {
        setResumeData(prev => ({
            ...prev,
            skills: { skillsList: [...prev.skills.skillsList, ""] },
        }));
    };

    const handleDeleteSkill = (index) => {
        const updatedSkills = resumeData.skills.skillsList.filter((_, i) => i !== index);
        setResumeData(prev => ({
            ...prev,
            skills: { skillsList: updatedSkills },
        }));
    };

    return (
        <>
            <h2>Skills</h2>
            <hr />
            <Cards
                title="Skill"
                dataList={resumeData.skills.skillsList}
                onAdd={handleAddSkill}
                onDelete={handleDeleteSkill}
                renderItem={(skill, index) => (
                    <Form>
                        <Form.Label>Skill</Form.Label>
                        <Form.Control
                            placeholder="Soft skills, Hard skills ..."
                            type="text"
                            value={skill}
                            onChange={(e) => handleSkillChange(e, index)}
                        />
                    </Form>
                )}
                getTitle={(item) => item || "New Skill"}
            />
        </>
    )
}
