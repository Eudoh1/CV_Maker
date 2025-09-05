import { useState } from "react";
import "../styles/Education.css";

export default function Education() {
    const [education, setEducation] = useState({
        school: "",
        degree: "",
        date: ""
    });
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="education">
            <h2>Education</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="school"
                        placeholder="School Name"
                        value={education.school}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        value={education.degree}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        placeholder="Graduation Date"
                        value={education.date}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p><strong>School:</strong> {education.school}</p>
                    <p><strong>Degree:</strong> {education.degree}</p>
                    <p><strong>Graduation Date:</strong> {education.date}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>        
                </div>     
            )}
        </div>
    );
}   
