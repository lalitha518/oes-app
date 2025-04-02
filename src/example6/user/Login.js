import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import sample_data from "../data";

let LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = sample_data.user.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            alert(`Login successful! Welcome ${user.type}`);
            navigate("/exam");
        } else {
            setError("Invalid email or password. Please try again.");
        }
    };
    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="card" style={{ width: "500px" }}>
                    <div className="card-header">
                        <h3>Login</h3>
                    </div>

                    <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput3" placeholder="name@example.com" 
                            value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label for="floatingInput3">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" 
                            value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <label for="floatingPassword">Password</label>
                        </div>


                        <Link className="float-end" to="/signup">create new account?</Link>

                    </div>

                    <div className="card-footer">
                        <button className="btn btn-secondary mx-2 float-end" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComponent;