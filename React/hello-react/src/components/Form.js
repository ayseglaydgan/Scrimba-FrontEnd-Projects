import React, {useState} from 'react'

function Form() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
  return (
    <div>
        <div>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <h2>{name}</h2>
        </div>  
        <div>
            <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
            >
                <option value="0">Male</option>
                <option value="1">Female</option>
                
            </select>
            <div>
                Gender:
                <strong>{gender=== '0' ? "Male" : "Female"}</strong>
            </div>
        </div>

    </div>
  )
}

export default Form;
