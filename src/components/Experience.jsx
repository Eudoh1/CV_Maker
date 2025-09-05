import { useState } from "react";
import "../styles/Experience.css";

export default function Experience() {
    const [experience, setExperience] = useState({
        company: "",
        position: "",
        from: "",
        untill: ""
    });
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience((prev) => ({...prev, [name]: value}));  
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };
    
    return (
        <div className="experience">
            <h2>Experience</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={experience.company}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={experience.position}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="from"
                        placeholder="From"
                        value={experience.from}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="untill"
                        placeholder="Untill"
                        value={experience.untill}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p><strong>Company:</strong> {experience.company}</p>
                    <p><strong>Position:</strong> {experience.position}</p>
                    <p><strong>From:</strong> {experience.from}</p>
                    <p><strong>Untill:</strong> {experience.untill}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>        
                </div>     
            )}
        </div>        

    );
}