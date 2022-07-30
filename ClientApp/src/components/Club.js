import React, { useState, useEffect } from 'react';
import './Club.css';

export default function Club() {
    useEffect(() => {
        getData();
    }, []);

    const [isLoading, setLoading] = useState(true);

    const [club1Image1, setClub1Image1] = useState("");
    const [club1Image2, setClub1Image2] = useState("");
    const [club1Image3, setClub1Image3] = useState("");
    const [club2Image1, setClub2Image1] = useState("");
    const [club2Image2, setClub2Image2] = useState("");
    const [club2Image3, setClub2Image3] = useState("");
    const [club3Image1, setClub3Image1] = useState("");
    const [club3Image2, setClub3Image2] = useState("");
    const [club3Image3, setClub3Image3] = useState("");
    const [club4Image1, setClub4Image1] = useState("");
    const [club4Image2, setClub4Image2] = useState("");
    const [club4Image3, setClub4Image3] = useState("");

    const [club1Title, setClub1Title] = useState("");
    const [club2Title, setClub2Title] = useState("");
    const [club3Title, setClub3Title] = useState("");
    const [club1Content, setClub1Content] = useState("");
    const [club2Content, setClub2Content] = useState("");
    const [club3Content, setClub3Content] = useState("");
    
    const getData = async () => {
        const response = await fetch('api/pages/link&iden=homeTopVideo');
        const data = await response.text();

        setLoading(false);
    };

    if (isLoading) {
        return (
            <div>
                <h1> Loading page, we'll bring you there soon... </h1>
            </div>
        )
    }
    return (
        <div>
            <h1 style={{ marginLeft: '10%', marginTop: 50 }}>Clubs</h1>
            <div className='clubLine' id='club1'>
                <div className='clubFlex'>
                    <div id='one'>
                        <h2>Engineers Australia</h2>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8af381d5ed1bfd3cabdb_instagram.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8aea4a7c60664df4ca6a_linkedin.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8ae7186ec7a1dc419d2e_youtube.png' alt='socialIcon'></img>
                    </div>
                    <div id='two'>
                        <p>Asfguhigksjgeqiqqhkhetguwiethuhgigbhw gher ghre tyds hfus if wuteurgwruqhr</p>
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

            <hr className="guideSplitLine"/>

            <div className='clubLine' id='club2'>
                <div className='clubFlex'>
                    <div id='one'>
                        <h2>Engineers Australia</h2>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8af381d5ed1bfd3cabdb_instagram.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8aea4a7c60664df4ca6a_linkedin.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8ae7186ec7a1dc419d2e_youtube.png' alt='socialIcon'></img>
                    </div>
                    <div id='two'>
                        <p>Asfguhigksjgeqiqqhkhetguwiethuhgigbhw gher ghre tyds hfus if wuteurgwruqhr</p>
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

            <hr className="guideSplitLine"/>

            <div className='clubLine' id='club3'>
                <div className='clubFlex'>
                    <div id='one'>
                        <h2>Engineers Australia</h2>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8af381d5ed1bfd3cabdb_instagram.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8aea4a7c60664df4ca6a_linkedin.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8ae7186ec7a1dc419d2e_youtube.png' alt='socialIcon'></img>
                    </div>
                    <div id='two'>
                        <p>Asfguhigksjgeqiqqhkhetguwiethuhgigbhw gher ghre tyds hfus if wuteurgwruqhr</p>
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

            <hr className="guideSplitLine"/>

            <div className='clubLine' id='club4'>
                <div className='clubFlex'>
                    <div id='one'>
                        <h2>Engineers Australia</h2>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8af381d5ed1bfd3cabdb_instagram.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8aea4a7c60664df4ca6a_linkedin.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8ae7186ec7a1dc419d2e_youtube.png' alt='socialIcon'></img>
                    </div>
                    <div id='two'>
                        <p>Asfguhigksjgeqiqqhkhetguwiethuhgigbhw gher ghre tyds hfus if wuteurgwruqhr</p>
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
