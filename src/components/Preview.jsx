import "../styles/Preview.css";
import { ResumeData } from '../dataFormat';
import { useContext} from 'react';
import {format} from "date-fns"
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Button from 'react-bootstrap/Button';

export default function Preview(){
    const { resumeData } = useContext(ResumeData);
    
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ 
        contentRef,
        documentTitle: `CV-${resumeData.generalInfo.firstName}`,
    });

    return(
        <>
            <div className="section-aside">
                <aside ref={contentRef} className="print-area">
                    <header className="">
                        <h1 className="name">{resumeData.generalInfo.firstName} {resumeData.generalInfo.lastName}</h1>
                        <div className="contact-info">
                            <span>{resumeData.generalInfo.email} </span>
                            <span>{resumeData.generalInfo.phone}</span>
                            <span>{resumeData.generalInfo.city}/{resumeData.generalInfo.state}</span>
                        </div>
                    </header>
                    <div className="social">
                
                    </div>
                
                    <div className="section objective ">
                        <span className="h2">Objetivos</span>
                        <p className="summary">{resumeData.summary.summary}</p>
                    </div>
                
                    <div className="section hability ">
                        <span className="h2">Habilidades e Competências</span>
                        <div className="skills">
                        {resumeData.skills.skillsList && resumeData.skills.skillsList.length > 0 && (
                            <span className="skill">
                                {resumeData.skills.skillsList.filter(skill => skill.trim() !== "").join(" | ")}
                            </span>
                        )}
                    </div>
                    </div>
                
                    <div className="section experience ">
                        <span className="h2">Experiências</span>
                
                        {resumeData.experience.experienceList.length > 0 ? (
                            resumeData.experience.experienceList.map((job, index) => (
                                <div key={index} className="jobs keep-together">
                                    <div className="header job">
                                        <span className="label">{job.jobName}</span>
                                        <span className="date">
                                        {job.startDate ? format(new Date(job.startDate), "MM/yyyy") : "Data início"} - {job.endDate ? format(new Date(job.endDate), "MM/yyyy") : "Presente"}
                                        </span>
                                    </div>
                                    <div className="line">{job.companyName}, {job.city}</div>
                                    <ul className="mb-2">
                                        {job.description && job.description.split('\n').map((line, idx) => (
                                            <li key={idx}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p>Sem experiências cadastradas.</p>
                        )}
                    </div>
                
                    <div className="section ">
                        <span className="h2">Educação</span>
                        {resumeData.education.educationList.length > 0 ? (
                            resumeData.education.educationList.map((edu, index) => (
                                <div key={index} className="education-item">
                                    <div className="header course">
                                        <span className="label">{edu.course}</span>
                                        <span className="date">
                                        {edu.startDate ? format(new Date(edu.startDate), "MM/yyyy") : "Data início"} - {edu.endDate ? format(new Date(edu.endDate), "MM/yyyy") : "Presente"}
                                        </span>
                                    </div>
                                    <div className="line">{edu.university}, {edu.city}</div>
                                    <ul className="mb-2">
                                        {edu.description && edu.description.split('\n').map((line, idx) => (
                                            <li key={idx}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p>Sem educação cadastrada.</p>
                        )}
                    </div>
                    <div className="">
                        <span className="h2">Informações Adicionais</span>
                        {resumeData.infos.info.length > 0 ? (
                            resumeData.infos.info.map((info, index) => (
                                <div key={index} className="info-item">
                                    <div className="header course">
                                        <span className="label">{info.label}</span>
                                        <span className="date">
                                        {info.startDate ? format(new Date(info.startDate), "MM/yyyy") : "Data início"} - {info.endDate ? format(new Date(info.endDate), "MM/yyyy") : "Presente"}
                                        </span>
                                    </div>
                                    <ul className="mb-2">
                                        {info.description && info.description.split('\n').map((line, idx) => (
                                            <li key={idx}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <p>Sem informações adicionais cadastradas.</p>
                        )}
                    </div>
                </aside>
                <div className="d-grid gap-2">
                <Button variant="primary" size="lg" className="mt-2" onClick={reactToPrintFn} >
                    Download
                </Button>
                </div>
            </div>
        </>
    )
}