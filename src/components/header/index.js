import React from 'react'
import "./styles/header.css"
import { Avatar } from "@material-ui/core"
import { AccessTime, SearchRounded, HelpOutline } from '@material-ui/icons'

export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt="Adnan"
                    src=''
                />
                <AccessTime />

            </div>
            <div className="header__search">
                <SearchRounded />
                <input placeholder="Search in slack" />
            </div>
            <div className="header__right">
                <HelpOutline />
            </div>


        </div>
    )
}

