import React from 'react'

function Register() {
    return (
        <div className="loginPage flex" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="container flex" style={{ display: 'flex', alignItems: 'center' }}>

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className="title">Pharmaceutical Information Platform</h2>
                        <p>Unleashing knowledge, One medication at a time</p>
                    </div>

                    <div className="footerDiv flex" style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="text">Have an account?</span>
                        <Link>
                            <button className="btn">Login</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="headerDiv" >
                        <h3>Let Us Know You!</h3>
                    </div>
                    {loginStatus && <div className="error">{loginStatus}</div>}
                    <form action="" className="form grid">

                        <div className="inputDiv">
                            <label htmlFor="username">Username:</label>
                            <div className="input flex" style={{ display: 'flex', alignItems: 'center' }}>
                                <FaUserTag className="icon"/>
                                <input type="text" id="username" placeholder="Enter Username" onChange={(e) => {
                                    setUsername(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password:</label>
                            <div className="input flex" style={{ display: 'flex', alignItems: 'center' }}>
                                <FaUserShield className="icon"/>
                                <input type="password" id="password" placeholder="Enter Password" onChange={(e) =>{
                                    setPassword(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <button type="submit" className="btn flex" style={{ display: 'flex', alignItems: 'center' }} onClick={(e) => handleSubmit(e)}>
                            <span>Register</span>
                            <MdKeyboardDoubleArrowRight className="icon"/>
                        </button>

                        <span className="forgotPassword">
                            Forgot your password? <a href="">Click Here</a>
                        </span>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Register;