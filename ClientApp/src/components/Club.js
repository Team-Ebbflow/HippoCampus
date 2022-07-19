import React from 'react';
import './Club.css';
import ImageGallery from 'react-image-gallery';

const galleryImages = [
  {
    original: 'https://sea3381808.blob.core.windows.net/images/MMP0043.jpg',
    thumbnail: 'https://sea3381808.blob.core.windows.net/images/MMP0043.jpg',
    description: 'Our uni is beautiful',
  },
  {
    original: 'https://sea3381808.blob.core.windows.net/images/gayUONhehe.png',
    description: 'We love gays',
  },
  {
    original: 'https://sea3381808.blob.core.windows.net/images/students_studying.png',
    description: 'You study till you die',
  },
];

export default function Club() {
    return (
        <div>
            <h1 style={{ marginLeft: '10%', marginTop: 50 }}>Clubs</h1>
            <div className='clubLine'>
                <div className='clubFlex'>
                    <div id='one'>
                        <h2>Engineers Australia</h2>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8af381d5ed1bfd3cabdb_instagram.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8aea4a7c60664df4ca6a_linkedin.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8ae7186ec7a1dc419d2e_youtube.png' alt='socialIcon'></img>
                    </div>
                    <div id='two'>
                        <p>Asfguhigksjgeqiqqhkhetguwiethuhgigbhw gher ghre tyds hfus if wuteurgwruqhr</p>
                        <p>Asfguhigksjgeqiqqhruqhr</p>
                    </div>
                </div>
                <div className='clubGallery'>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src='https://media.discordapp.net/attachments/989084273522909234/989097236363374642/WelcomeBG.jpg?width=725&height=484' alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src='https://media.discordapp.net/attachments/989084273522909234/989097236363374642/WelcomeBG.jpg?width=725&height=484' alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src='https://media.discordapp.net/attachments/989084273522909234/989097236363374642/WelcomeBG.jpg?width=725&height=484' alt='clubImage'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
