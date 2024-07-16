import React, {useState} from "react";

function Form() {
    const initialValue = {
        name: "",
        email: "",
        message: ""
    }
    
    const [formData, setFormData] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, undefined, 2));
    }

    return (
        <div>
            <h1>Message Form</h1>
            <div className="ui segment">
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                         />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Message </label>
                        <input 
                            type="text" 
                            placeholder="Message"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                    </div>
                    <button className="ui blue button" type="submit">Submit</button>
                </form>
            </div> 
        </div>
    );
}

export default Form;