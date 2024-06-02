import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Read = () => {
    const [data , setData] = useState();
    const [error, setError] = useState("");

    async function getData() {
        const response = await fetch("http://localhost:3000/api/v1/getusers")
        const result = await response.json();

        if(!response.ok) {
            console.log(result.error);
            setError(result.error);
        }
        if(response.ok) {
            setData(result);
            setError("");
        }
    }

    useEffect(() => { //to render page only once
      getData();
    }, [])

    // console.log(data)

 const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:3000/api/v1/deleteuser/${id}`, {
        method: "DELETE",
    })
    const result = await response.json();

    if(!response.ok) {
        console.log(result.error);
        setError(result.error);
    }

    if(response.ok) {
        setError("Data Deleted Successfully");
        setTimeout(() => {
            setError("");
            getData();
        },1000)
        
    }
}
    
  return (
    <div className="container my-2">
        {error && <div className="alert alert-danger">{error}</div>}
        <h2 className="text-center">All Post</h2>

        <div className="row">
            {data && data.map((item) => (
                <div key = {item._id} className="col-md-6">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-subtitle mb-2 text-muted">{item.email}</p>
                        <p className="card-subtitle mb-2 text-muted">{item.age}</p>
                      
                        <a href="#" className="card-link" onClick={(()=>deleteUser(item._id))}>Delete</a>
                        <Link to={`/${item._id}`} className="card-link" >Edit</Link>
                    </div>
                 {/* <p>{item.length}</p> */}
                </div>
            </div>
            
            ))}
          


        </div>
    </div>
  )
}

export default Read