import React from 'react'
import { useHistory } from 'react-router-dom'
import db from '../../../firebase';
import './styles/slidebarOption.css'

export default function SlidebarOption({ Icon, title, id, addChannelOption }) {
    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt("Enter a new Channel");

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }

    return (
        <div className="slidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="slidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="slidebarOption__channel"> <span className="slidebarOption__hash">#</span>{title} </h3>
            )}
        </div>
    )
}


