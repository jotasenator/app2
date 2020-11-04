import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

    return (
        <div className='footer'>
            Desde el martes 20 de octubre del 2020
            <div className='icons'>

                <a href='https://github.com/jotasenator' target='_blank' rel="nofollow noopener noreferrer">
                    <GitHubIcon /></a>

                <a href='https://www.linkedin.com/in/maykel-contreras-camacho-7a1545110/'
                    target='_blank' rel="nofollow noopener noreferrer">
                    <LinkedInIcon /></a>

            </div>

        </div >

    )
}

export default Footer