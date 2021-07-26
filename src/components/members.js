import React from 'react'
import EmailIcon from '@material-ui/icons/Email';

function Members() {
    const membersList = [
        {
            pic: "https://yt3.ggpht.com/Y1tLb1OR3Ka-nmqMEMzwNQyG8mLZv4YwWuwl0nuZLATAPbt4irULJmGs2tbRcAaGzP3OQnEBWZ0=s900-c-k-c0x00ffffff-no-rj",
            name: "DJ Khaled",
            status: "Offline",
            hex: "grey"
        },
        {
            pic: "data:image/png;base64,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",
            name: "Wipadika Innovations",
            status: "Available",
            hex: "#53B8BB"
        },
        {
            pic: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
            name: "Flume",
            status: "Busy",
            hex: "red"
        }
    ]

    const teamMembers = membersList.map(member => {
        return(
            <li>
                <div
                style={{
                    'display':'flex',
                    'flex-direction':'row',
                    'justify-content': 'space-between',
                    'align-items':'left',
                }}>
                    <img src={member.pic} 
                     style={{
                        'width': '25px',
                        'height': '25px',
                        'border-radius': '100px',
                        'margin-left': '0px'
                    }}/>
                    <div style={{
                        width: '150px',
                    }}>
                    <p
                    style={{
                        'margin': '5px auto 0',
                        'font-size':'0.9rem'
                    }}>{member.name}</p>
                    <p
                    style={{
                        'margin': '0 auto 5px',
                        'font-size':'0.7rem',
                        'color': member.hex
                    }}>{member.status}</p>
                    </div>
                    <div style={{
                        'width': '40%'
                    }}></div>
                    <button
                    style={{
                        'border': '2px solid #53B8BB',
                        'border-radius': '100px',
                        'background': 'transparent',
                        'margin': '5px'
                    }}><EmailIcon style={{'color': '#53B8BB', 'font-size': 20}}/></button>
                </div>
            </li>
        )
    })
    return (
        <div 
        style={{
            'background': 'white',
            'border-radius': '5px',
            'text-align': 'left',
            'alignItems': 'left',
            'padding': '10px',
            'margin': '20px auto',
            'box-shadow': '5px 5px 8px #888888'
        }}>
            <p style={{ 'font-size':'1.2rem'}}>Team Members</p>
            <ul
            style={{
                'list-style': 'none',
                'padding': '0'
            }}>
                {teamMembers}
            </ul>
        </div>
    )
}

export default Members
