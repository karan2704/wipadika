import React from 'react'
import {UserContext} from '../context/userContext'

function Profile() {
    const {user} = React.useContext(UserContext)
    return (
        <div
        style={{
            'background': 'white',
            'text-align': 'center',
            'border-radius': '5px',
        }}>
            <img src="https://i.pinimg.com/originals/d5/ce/a2/d5cea2c3333f1069e79d1cf2a3aa8651.jpg" alt='cover' 
            style={{
                'border-radius': '5px 5px 0 0',
                'height': '100px',
                'width': '100%',
                'zIndex': '10',
                
            }}/>
            <img src='https://cdn5.vectorstock.com/i/1000x1000/97/74/cartoon-man-icon-face-isolated-vector-14339774.jpg' alt='DP' 
            style={{
                'border': 'solid 1px black',
                'border-radius': '200px',
                'width': '50px',
                'margin': '0 auto',
                'zIndex': '20',
                
            }}/>
            <h3
            style={{
                'color': '#53B8BB',
                'margin': '5px auto'
            }}>{user.name}</h3>
            <p
            style={{
                'color': '#B2B1B9',
                'margin-top': '0'
            }}>{user.username}</p>
            <p
            style={{
                'color': '#B2B1B9',
                'margin-top': '0'
            }}>I like the way you work it
               <br />
                No diggity
                <br />
                I wanna bag it up</p>
            <hr />
            <div style={{
                'display':'flex',
                'flex-direction':'row',
                'justify-content':'space-around'
            }}>
            <div>
                <p
                style={{
                    'color': 'grey',
                    'margin': '0 auto'
                }}>12</p>
                <p style={{
                    'color': 'grey',
                    'margin-top': '0'
                }}>Files</p>
            </div>
            <div>
                <p style={{
                    'color': 'grey',
                    'margin': '0 auto'
                }}>2 GB</p>
                <p style={{
                    'color': 'grey',
                    'margin-top': '0'
                }}>Used</p>
            </div>
            <div>
                <p style={{
                    'color': 'grey',
                    'margin': '0 auto'
                }}>$24.6</p>
                <p style={{
                    'color': 'grey',
                    'margin-top': '0'
                }}>Spent</p>
            </div>
            </div>
        </div>
    )
}

export default Profile
