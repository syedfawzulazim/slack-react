import React from 'react'
import './styles/slidebarOption.css'

export default function SlidebarOption({ Icon, title }) {
    return (
        <div className="slidebarOption">
            {Icon && <Icon className="slidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="slidebarOption__channel"> <span className="slidebarOption__hash">#</span>{title} </h3>
            )}
        </div>
    )
}


