import React from 'react'
import "./client.scss"
import client1 from "../../../images/client-1.svg"
import client2 from "../../../images/client-2.svg"
import client3 from "../../../images/client-3.svg"
import client4 from "../../../images/client-4.svg"
import client5 from "../../../images/client-5.svg"
import client6 from "../../../images/client-6.svg"
import client7 from "../../../images/client-7.svg"
import client8 from "../../../images/client-8.svg"
import client9 from "../../../images/client-9.svg"
import client10 from "../../../images/client-10.svg"
import ClientItem from '../../ui/ClientItem/ClientItem'


function Client(props) {
    return (
        <section className={props.class}>
            <ul className='client__list client-list'>
                <ClientItem image={client1} />
                <ClientItem image={client2} />
                <ClientItem image={client3} />
                <ClientItem image={client4} />
                <ClientItem image={client5} />
                <ClientItem image={client6} />
                <ClientItem image={client7} />
                <ClientItem image={client8} />
                <ClientItem image={client9} />
                <ClientItem image={client10} />
            </ul>
        </section>
    )
}

export default Client
