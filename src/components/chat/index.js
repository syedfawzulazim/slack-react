import './styles/chat.css'
import db from '../../firebase'
import { Messages } from '../../components'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons';
import { ChatInput } from '../../components'

export default function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessage, setRoomMessage] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomDetails(snapshot.data())
                ))
        }

        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => setRoomMessage(
                snapshot.docs.map((doc) => doc.data()))
            )
    }, [roomId])

    console.log(roomMessage)
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <InfoOutlined />
                    <p>
                        Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {roomMessage.map(({ message, user, userImage, timestamp }) => (
                    <Messages
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}


