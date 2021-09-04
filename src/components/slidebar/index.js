import React, { useState, useEffect } from 'react'
import './styles/slidebar.css'
import SlidebarOption from './slidebarOptions/SlidebarOption'
import { FiberManualRecord, CreateOutlined, InsertCommentOutlined, AddCircleOutlineOutlined, ExpandMoreOutlined, ExpandLessOutlined, FileCopyOutlined, AppsOutlined, PeopleAltOutlined, BookmarkBorderOutlined, InboxOutlined, DraftsOutlined } from '@material-ui/icons'
import db from '../../firebase'
export default function Slidebar() {

    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
            })))
        })
    }, [])

    return (
        <div className="slidebar">
            <div className="slidebar__header">
                <div className="slidebar__info">

                    <h2>Slack Project</h2>
                    <h3>
                        <FiberManualRecord />
                        Syed Fawzul Azim
                    </h3>
                </div>
                <CreateOutlined />
            </div>
            <SlidebarOption Icon={InsertCommentOutlined} title="Threads" />
            <SlidebarOption Icon={InboxOutlined} title="Mention & reaction" />
            <SlidebarOption Icon={DraftsOutlined} title="Saved items" />
            <SlidebarOption Icon={BookmarkBorderOutlined} title="Channel browser" />
            <SlidebarOption Icon={PeopleAltOutlined} title="People & user groups" />
            <SlidebarOption Icon={AppsOutlined} title="Apps" />
            <SlidebarOption Icon={FileCopyOutlined} title="File browser" />
            <SlidebarOption Icon={ExpandLessOutlined} title="Show less" />
            <hr />
            <SlidebarOption Icon={ExpandMoreOutlined} title="Channels" />
            <SlidebarOption Icon={AddCircleOutlineOutlined} title="Add Channel" />

            {
                channels.map((channel) => (
                    <SlidebarOption title={channel.name} id={channel.id} />
                ))
            }
        </div>
    )
}


