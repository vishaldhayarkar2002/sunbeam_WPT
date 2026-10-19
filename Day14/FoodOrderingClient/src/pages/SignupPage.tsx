import React from 'react'
function SignupPage() {
    return (
        <div>
            <h1 className="title text-center">Create your Account ...</h1>
            <div className="bg-amber-100 w-2/5 mx-auto p-4 rounded-2xl">
                <div className="m-2">
                    <label className="floating-label">
                        <span>Your Name</span>
                        <input type="text" placeholder="name" className="input input-md" />
                    </label>
                </div>
                <div className="m-2">
                    <label className="floating-label">
                        <span>Your Email</span>
                        <input type="email" placeholder="mail@site.com" className="input input-md" />
                    </label>
                </div>
                <div className="m-2">
                    <label className="floating-label">
                        <span>Password</span>
                        <input type="password" placeholder="*******" className="input input-md" />
                    </label>
                </div>
                <div className="m-2">
                    <label className="floating-label">
                        <span>Mobile No</span>
                        <input type="tel" placeholder="+91" className="input input-md" />
                    </label>
                </div>
                <div className="m-2">
                    <label>Already have an account ? To Signin <span className="text-blue-600">Click Here</span></label>
                </div>
                <div className="m-2">
                    <button className="btn btn-success">Signup</button>
                </div>
            </div>
        </div >
    )
}

export default SignupPage
