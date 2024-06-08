import React from 'react'
import './token.scss'
import TokenTable from '../../ui/TokenTable/TokenTable'

function Token() {
    return (
        <section className='token wrapper'>
            <h1 className='token__title'>Tokens</h1>
            <p className='token__description'>The Cryptop Token is the key to unlocking the full potential of Cryptop. Get even higher earning rates and our lowest borrowing rates.</p>
            <TokenTable />

        </section>
    )
}

export default Token
