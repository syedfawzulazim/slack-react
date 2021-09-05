import React, { useState } from 'react'
import db from '../../firebase';
import "./styles/chatInput.css"
import Firebase from 'firebase/compat/app'
import { useStateValue } from '../../stateProvider/StateProvider';


export default function ChatInput({ channelName, channelId }) {

    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();

        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
        }
        setInput('')
    }



    return (
        <div className="chatInput">
            <form >
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}

                />
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )


}