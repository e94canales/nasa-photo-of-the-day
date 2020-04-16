import React, { useState, useEffect } from 'react';
import '../header/header.css'
import axios from 'axios'

const apiKey = '?api_key=dAywCiykRURtovd09SjXLi4aItwJ6AVNXLtZbZ3t'
const apiUrl = 'https://api.nasa.gov/'

const Header = (props) => {
    const [ctaImage, setCtaImage] = useState(null)
    const [ctaImageTitle, setCtaImageTitle] = useState(null)
    const [ctaExplanation, setCtaExplanation] = useState(null)

    useEffect( () => {

        axios.get(`${apiUrl}planetary/apod${apiKey}`)
            .then ( response => {
                // console.log(response.data); 
                setCtaImage(response.data.hdurl)
                setCtaImageTitle(response.data.title)
                setCtaExplanation(response.data.explanation)
            })
            .catch ( error => {
                console.log('ATTENTION', error); 
            })

    }, [])

    return (
        <div className='headerContainer'>
            <div className='ctaImgContainer'>
                <img className='ctaImg' src={ctaImage} alt={ctaImageTitle}/>
            </div>
            <div className='ctaInfoContainer'>
                <div className='ctaTitle'>
                    <h1 className="ctaH1">{ctaImageTitle}</h1>
                    <p>{ctaExplanation}</p>
                </div>
            </div>
            
        </div>
    )}

export default Header