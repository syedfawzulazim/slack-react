import React from 'react'
import './styles/chat.css'
import { useParams } from 'react-router-dom'
import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons';

export default function Chat() {
    const { roomId } = useParams();

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># general</strong>
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
        </div>
    )
}


