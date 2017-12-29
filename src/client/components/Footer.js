import React, { Component } from 'react';

import icons from '../icons';
const footerTwitter = icons.footerTwitter;
const footerGithub = icons.footerGithub;
const footerLinkedin = icons.footerLinkedin;

class Footer extends Component {

    render () {
        return (
            [
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
            })
        )
    }
};

export default Footer;