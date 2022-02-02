import React from 'react'
import Address from './Component/Profile/Address'
import FullName from './Component/Profile/FullName'
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import "./App.css"

function App() {
    return (
        <div>
            <ProfilePhoto />
            <FullName />
            <Address />
        </div>
    )
}

export default App
