import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState("")

    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        const data = { name, email, age };

        const response = await fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error)
        }
        if (response.ok) {
            alert("Data Saved Successfully");
            setError("")
            setName("");
            setEmail("");
            setAge("");
            Navigate("/all")

        }
    };

    // console.log(name,email,age)
    return (
        <>
            <div className="container my-2">
                {error && <div className="alert alert-danger">{error}</div>}
                <h2 className="text-center">Enter the Data</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        {/* <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div> */}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="text" className="form-control" id="age" value={age} onChange={(e) => { setAge(e.target.value) }} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Create