import React from 'react';
import image from '../../Images/me.png'


export default function ProfilePhoto() {
    return (
        <div>
            <img src={image} alt="Meriem Photo" style={{ borderRadius:"50%", border:"4px solid #F0A1BF" }}/>
        </div>
    )
}
