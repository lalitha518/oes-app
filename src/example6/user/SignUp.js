import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sample_data from '../data';

let SignupComponent = () => {
    const[formData, setFormData] = useState({
        firstName :"",
        lastName : "",
        email : "",
        password : "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSignUp = ()=>{
        const { firstName, lastName, email, password } = formData;

        if (!firstName || !lastName || !email || !password) {
            setError("All fields are required!");
            return;
        }
        if (!email.includes("@")) {
            setError("Invalid email format!");
            return;
        }

        const existingUser = sample_data.user.find(user => user.email === email);
        if (existingUser) {
            setError("Email already exists. Please login!");
            return;
        }

        const newUser = {
            id: sample_data.user.length + 1,
            type: "user",
            email,
            password,
        };
        sample_data.user.push(newUser);

        navigate("/login");
    }

    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="card" style={{ width: "500px" }}>
                    <div className="card-header">
                        <h3>Signup</h3>
                    </div>

                    <div className="card-body">
                    {error && <p className="text-danger">{error}</p>}
                        <div className="row">
                            <div className="col-lg-6">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput1"  name="firstName"  placeholder="john" value={formData.firstName} onChange={handleChange} />
                                    <label for="floatingInput1">First Name</label>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput2"   name="lastName"  placeholder="doe" value={formData.lastName} onChange={handleChange}/>
                                    <label for="floatingInput2">Last Name</label>
                                </div>
                            </div>

                        </div>

                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput3"   name="email"  placeholder="name@example.com" value={formData.email} onChange={handleChange} />
                            <label for="floatingInput3">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword"   name="password"  placeholder="Password" value={formData.passowrd} onChange={handleChange} />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <Link className="float-end" to="/login">login instead?</Link>
                    </div>

                    <div className="card-footer">
                        <button className="btn btn-secondary mx-2 float-end" onClick={handleSignUp}>Create Account</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SignupComponent;