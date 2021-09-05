import React from 'react'
import "./styles/login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../stateProvider/StateProvider'
import { actionTypes } from '../../stateProvider/reducer'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
    }

    return (
        <div className="login" >
            <div className="login__container">
                <img alt="" src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
                <h1>Sign to Slack Profile</h1>
                <p>All your works and projects</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>

        </div >
    )
}

export default Login
