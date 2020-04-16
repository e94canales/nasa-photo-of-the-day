import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../spotlight/spotlight.css'

const apiKey = '?api_key=dAywCiykRURtovd09SjXLi4aItwJ6AVNXLtZbZ3t'
const apiUrl = 'https://images-api.nasa.gov/'

function Spotlight (props) {
    const [titleOne, setTitleOne] = useState(null)
    const [titleTwo, setTitleTwo] = useState(null)
    const [titleThree, setTitleThree] = useState(null)

    const [imgOne, setImgOne] = useState(null)
    const [imgTwo, setImgTwo] = useState(null)
    const [imgThree, setImgThree] = useState(null)
    
    const [descOne , setDescOne] = useState(null)
    const [descTwo , setDescTwo] = useState(null)
    const [descThree , setDescThree] = useState(null)

    useEffect (() => {
        axios.get(`${apiUrl}search?q=earth`)
            .then ( response => {
                // console.log(response.data);
                console.log(response.data);
                
                setTitleOne(response.data.collection.items[2].data[0].title)
                setImgOne(response.data.collection.items[2].links[0].href)
                setDescOne(response.data.collection.items[2].data[0].description)

                setTitleTwo(response.data.collection.items[4].data[0].title)
                setImgTwo(response.data.collection.items[4].links[0].href)
                setDescTwo(response.data.collection.items[4].data[0].description)

                setTitleThree(response.data.collection.items[11].data[0].title)
                setImgThree(response.data.collection.items[11].links[0].href)
                setDescThree(response.data.collection.items[11].data[0].description)
                
            })
            .catch ( error => {
                console.log('ATTENTION', error);
                
            })
    }, [])
    return (
        <div className='spotlightContainer'>
            <div className='spotlight one'>
                <h2 className='spotlightTitle'>{titleOne}</h2>
                <img className='spotlightImg' src={imgOne} alt={titleOne} />
                <p className='desc'>{descOne}</p>

            </div>

            <div className='spotlight two'>
                <h2 className='spotlightTitle'>{titleTwo}</h2>
                <img  className='spotlightImg' src={imgTwo} alt={titleTwo} />
                <p className='desc'>{descTwo}</p>
            </div>

            <div className='spotlight three'>
                <h2 className='spotlightTitle'>{titleThree}</h2>
                <img className='spotlightImg'  src={imgThree} alt={titleThree} />
                <p className='desc'>{descThree}</p>
            </div>
        </div>
    )
}

export default Spotlight