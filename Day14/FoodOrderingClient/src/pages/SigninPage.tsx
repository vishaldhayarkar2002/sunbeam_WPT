import { useState } from "react"
import { userSignIn } from "../services/UserService"
import type { AxiosResponse } from "axios"
import { type UserSignInResponse } from './../types/User';

function SigninPage() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSigninClick = async () => {
        try {
            const response: AxiosResponse<UserSignInResponse> = await userSignIn(email, password)
            const result: UserSignInResponse = response.data
            if (result.status == 'success') {
                window.alert("signin successful")
                console.log(result.data!.token)
            } else
                window.alert(result.error)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1 className="title text-center">Signin to your Account ...</h1>
            <div className="bg-amber-100 w-2/5 mx-auto p-4 rounded-2xl">
                <div className="m-2">
                    <label className="floating-label">
                        <span>Your Email</span>
                        <input type="email" placeholder="mail@site.com" className="input input-md" onChange={e => setEmail(e.target.value)} />
                    </label>
                </div>
                <div className="m-2">
                    <label className="floating-label">
                        <span>Password</span>
                        <input type="password" placeholder="*******" className="input input-md" onChange={e => setPassword(e.target.value)} />
                    </label>
                </div>
                <div className="m-2">
                    <label>Don't have an account ? To Register <span className="text-blue-600">Click Here</span></label>
                </div>
                <div className="m-2">
                    <button className="btn btn-success" onClick={handleSigninClick}>Signin</button>
                </div>
            </div>
        </div >
    )
}

export default SigninPage
