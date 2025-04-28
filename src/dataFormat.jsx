import { createContext, useState } from "react";

export const ResumeData = createContext();

export function DataFormat({children}) {
    const [resumeData, setResumeData] = useState({
        generalInfo: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            state: ""
        },
        summary: {
            summary: ""
        },
        infos: {
            info: [],
        },
        skills: {
            skillsList: []
        },
        education: {
            educationList: []
        },
        experience: {
            experienceList: []
        }
    })
    return (
        <>
            <ResumeData.Provider value={{ resumeData, setResumeData}}>
                {children}
            </ResumeData.Provider>
        </>
    )
}