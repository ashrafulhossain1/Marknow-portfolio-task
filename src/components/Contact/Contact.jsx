import React from 'react';

const Contact = ({ name, title, email, github, linkedIn, twitter, instagram, youtube, medium }) => {
    return (
        <div
        id='contact' 
        className="bg-gradient-to-bl from-[#101113dd] to-[#090301] p-6 shadow-md text-center">
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 mb-4">
                {/* Email */}
                {email && (
                    <a href={`mailto:${email}`} className="hover:opacity-75 transition-opacity">
                        <img
                            src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg"
                            alt="Email"
                            className="w-6 h-6"
                        />
                    </a>
                )}
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                        <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="GitHub" className="w-6 h-6" />
                    </a>
                )}
                {linkedIn && (
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                        <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                )}
                {twitter && (
                    <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                        <img src="https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
                    </a>
                )}
                {instagram && (
                    <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                        <img src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
                    </a>
                )}
                {youtube && (
                    <a href={youtube} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                        <img src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
                    </a>
                )}
                {medium && (
                    <a href={medium} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                        <img src="https://www.vectorlogo.zone/logos/medium/medium-icon.svg" alt="Medium" className="w-6 h-6" />
                    </a>
                )}
            </div>

            {/* Name and Title */}
            <div>
                <p className="text-[#2A2422] font-bold text-sm">
                   <span className='text-gray-200 font-normal'>Developed By</span>{' '}
                    {name && <span className="text-white">{`${name} `}</span>}
                    {title && <span className="text-gray-400 text-xs">({title})</span>}
                </p>
            </div>
        </div>
    );
};

export default Contact;