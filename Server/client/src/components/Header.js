import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Header = () => {

    const params = useParams()
    const [topic, setTopic] = useState()
    const [header, setHeader] = useState()
    const [content, setContent] = useState()

    const getData = async () => {
        let result = await fetch(`http://localhost:5000/header/${params.id}`)
        result = await result.json()
        setTopic(result.topic)
        setHeader(result.header)
        setContent(result.content)

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='headerDiv'>
            <div className='innerDiv' >
                <h1>{header}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Header