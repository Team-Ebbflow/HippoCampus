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
    const [club1Link, setClub1Link] = useState("#");
    const [club2Link, setClub2Link] = useState("#");
    const [club3Link, setClub3Link] = useState("#");
    const [club4Link, setClub4Link] = useState("#");

    const [club1Title, setClub1Title] = useState("");
    const [club2Title, setClub2Title] = useState("");
    const [club3Title, setClub3Title] = useState("");
    const [club4Title, setClub4Title] = useState("");
    const [club1Content, setClub1Content] = useState("");
    const [club2Content, setClub2Content] = useState("");
    const [club3Content, setClub3Content] = useState("");
    const [club4Content, setClub4Content] = useState("");
    
    const getData = async () => {
        let response = null;
        let data = "";

        try {
            response = await fetch('api/pages/link&iden=club1Image1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub1Image1(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club1Image2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub1Image2(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club1Image3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub1Image3(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club2Image1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub2Image1(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club2Image2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub2Image2(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club2Image3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub2Image3(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club3Image1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub3Image1(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club3Image2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub3Image2(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club3Image3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub3Image3(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club4Image1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub4Image1(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club4Image2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub4Image2(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club4Image3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub4Image3(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club1Link');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub1Link(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club2Link');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub2Link(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club3Link');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub3Link(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club4Link');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub4Link(data);
        }

        try {
            response = await fetch('api/pages/text&iden=club1Title');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub1Title(data);
        }

        try {
            response = await fetch('api/pages/text&iden=club2Title');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub2Title(data);
        }

        try {
            response = await fetch('api/pages/text&iden=club3Title');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub3Title(data);
        }

        try {
            response = await fetch('api/pages/text&iden=club4Title');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub4Title(data);
        }

        try {
            response = await fetch('api/pages/text&iden=club1Content');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub1Content(data);
        }

        try {
            response = await fetch('api/pages/text&iden=club2Content');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub2Content(data);
        }

        try {
            response = await fetch('api/pages/text&iden=club3Content');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub3Content(data);
        }

        try {
            response = await fetch('api/pages/text&iden=club4Content');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub4Content(data);
        }

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
                        <h2><a href={club1Link}>{club1Title}</a></h2>
                        <a href={club1Link}><img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8af381d5ed1bfd3cabdb_instagram.png' alt='socialIcon'></img></a>
                        <a href={club1Link}><img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8aea4a7c60664df4ca6a_linkedin.png' alt='socialIcon'></img></a>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8ae7186ec7a1dc419d2e_youtube.png' alt='socialIcon'></img>
                    </div>
                    <div id='two'>
                        <p>{club1Content}</p>
                    </div>
                </div>
                <div className='clubGallery'>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club1Image1} alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club1Image2} alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club1Image3} alt='clubImage'/>
                    </div>
                </div>
            </div>

            <hr className="guideSplitLine"/>

            <div className='clubLine' id='club1'>
                <div className='clubFlex'>
                    <div id='one'>
                        <h2><a href={club2Link}>{club2Title}</a></h2>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8af381d5ed1bfd3cabdb_instagram.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8aea4a7c60664df4ca6a_linkedin.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8ae7186ec7a1dc419d2e_youtube.png' alt='socialIcon'></img>
                    </div>
                    <div id='two'>
                        <p>{club2Content}</p>
                    </div>
                </div>
                <div className='clubGallery'>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club2Image1} alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club2Image2} alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club2Image3} alt='clubImage'/>
                    </div>
                </div>
            </div>

            <hr className="guideSplitLine"/>

            <div className='clubLine' id='club1'>
                <div className='clubFlex'>
                    <div id='one'>
                        <h2><a href={club3Link}>{club3Title}</a></h2>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8af381d5ed1bfd3cabdb_instagram.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8aea4a7c60664df4ca6a_linkedin.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8ae7186ec7a1dc419d2e_youtube.png' alt='socialIcon'></img>
                    </div>
                    <div id='two'>
                        <p>{club3Content}</p>
                    </div>
                </div>
                <div className='clubGallery'>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club3Image1} alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club3Image2} alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club3Image3} alt='clubImage'/>
                    </div>
                </div>
            </div>

            <hr className="guideSplitLine"/>

            <div className='clubLine' id='club1'>
                <div className='clubFlex'>
                    <div id='one'>
                        <h2><a href={club4Link}>{club4Title}</a></h2>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8af381d5ed1bfd3cabdb_instagram.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8aea4a7c60664df4ca6a_linkedin.png' alt='socialIcon'></img>
                        <img className='image' src='https://uploads-ssl.webflow.com/620e233602defed01f7d3d30/624a8ae7186ec7a1dc419d2e_youtube.png' alt='socialIcon'></img>
                    </div>
                    <div id='two'>
                        <p>{club4Content}</p>
                    </div>
                </div>
                <div className='clubGallery'>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club4Image1} alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club4Image2} alt='clubImage'/>
                    </div>
                    <div className='clubGalleryItem'>
                      <img className='clubImage' src={club4Image3} alt='clubImage'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
