import React from 'react'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

function Side() {
    return (
        <div 
        style={{'position': 'fixed',
                'width': '200px',
                'height': '100%',
                'top': '0',
                'left': '0',
                'background': 'white'
                }}>
            <p
            style={{
                'margin': '10px 5px'
            }}>WIPADIKA INNOVATIONS</p>
            <hr/>
            <a
            href='#'
            style={{
                'font-size': '0.8rem',
                'color': '#FF7600',
                'margin': '10px 5px',
                'text-decoration': 'none'
            }}><PermIdentityIcon style={{ fontSize: 20, margin: '10px 5px 0' }}/> Profile</a>
        </div>
    )
}

export default Side
