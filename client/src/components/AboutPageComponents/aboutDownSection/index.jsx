import React, { useEffect, useState } from 'react'
import './aboutDownSection.scss'
import axios from 'axios'

function AboutDownSection() {
    const [aboutPeople, setAboutPeople] = useState('')

    async function aboutPeopleAxios() {
        const res = await axios.get('http://localhost:4001/aboutpeople')
        setAboutPeople(res.data)
    }

    useEffect(() => {
        aboutPeopleAxios()
    }, [])



    return (
        <section id='aboutDownSection'>
            <h1>Meet Our Teams</h1>
            <span>Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                ut fermentum massa justo. condimentum nibh.
            </span>
            <div className="aboutPeopleBox">
                {
                    aboutPeople && aboutPeople.map((item) => (
                        <>
                            <div className="peopleCard">
                                <div className="peopleImgBox">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="peopleTextBox">
                                    <h4>{item.name}</h4>
                                    <p>{item.job}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>


        </section>
    )
}

export default AboutDownSection