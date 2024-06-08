import React from 'react'
import TeamItem from '../../ui/TeamItem/TeamItem'
import './team.scss'
import teamImage1 from '../../../images/team-1.jpg' 
import teamImage2 from '../../../images/team-2.jpg' 
import teamImage3 from '../../../images/team-3.jpg' 
import teamImage4 from '../../../images/team-4.jpg' 
import teamImage5 from '../../../images/team-5.jpg' 

function Team() {
    return (
        <section className='team wrapper'>
            <h2 className='team__header'>Meet the leadership <b className='team__header--team'>Team</b></h2>
            <ul className='team__list'>
                <TeamItem image={teamImage1} header={"Mikki smith"} description={"Manager"}/>
                <TeamItem image={teamImage2} header={"Modesto "} description={"Designer"}/>
                <TeamItem image={teamImage3} header={"Mikki smith"} description={"Co-Founder"}/>
                <TeamItem image={teamImage4} header={"Natasha"} description={"Designer"}/>
                <TeamItem image={teamImage5} header={"John Doue"} description={"Developer"}/>
            </ul>
        </section>
    )
}

export default Team
