import React, { Component } from 'react';

import icons from '../icons';
const footerTwitter = icons.footerTwitter;
const footerGithub = icons.footerGithub;
const footerLinkedin = icons.footerLinkedin;

class Footer extends Component {

    render () {
        const socialIcons = [
            {
                id: 1,
                link: 'https://twitter.com',
                name: 'footerTwitter',
                src: footerTwitter,
                width: '40',
                text: 'twitter'
            },
            {
                id: 2,
                link: 'https://github.com/friend0',
                name: 'footerGithub',
                src: footerGithub,
                width: '40',
                text: 'github'
            },
            {
                id: 3,
                link: 'https://www.linkedin.com/',
                name: 'footerLinkedin',
                src: footerLinkedin,
                width: '40',
                text: 'linkedin'
            }
        ].map((socialFooterIcon) => {
            return (<a key={socialFooterIcon.id} href={socialFooterIcon.link}>
                <img className={socialFooterIcon.name} src={socialFooterIcon.src} width={socialFooterIcon.width} alt={socialFooterIcon.text} />
            </a>)
        });

        return (
            <div>
                <footer className='site-footer'>
                    <div className='wrapper'>
                        <div className='footer-social'>
                            <ul>
                                <li>
                                    {socialIcons}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='identity'>
                        <p>© 2017 Ryan A. Rodriguez</p>
                    </div>
                </footer>
            </div>
        )
    }
};

export default Footer;