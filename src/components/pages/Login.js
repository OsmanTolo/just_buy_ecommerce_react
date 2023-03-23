import { useState } from 'react';
import Form from "./SignUp"


export default function LoginDropMenu(){

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    const [loggedIn, setloggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser(user);
        setPwd(pwd);
        setloggedIn(true);
    }

    const handleInputChange = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser("");
        setPwd("");
        setloggedIn(false);
        }

    return(<>
        {loggedIn ? (
            <div className="dropdown-menu text-center">
                <h6>You are logged in as:</h6>
                <h4 className="text-center">{user}</h4>
                <button className="mt-3 btn btn-primary" onClick={handleInputChange} href="#">Logout</button>
            </div>
        ) : (
    <div className="dropdown-menu">
        <form className="px-4 py-3" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                    </div>
                    <div className="mt-2 form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        </div>
                        <button type="submit" className="mt-3 btn btn-primary">Sign in</button>
                    </form>
            <div className="dropdown-divider text-center"></div>
            <a className="dropdown-item text-center" data-bs-toggle="modal" data-bs-target="#signUp" href="#">Sign up</a>
            </div>
        )}
        <Form></Form>
    </>
    )
}
