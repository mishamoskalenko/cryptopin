import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TokenItem from '../TokenItem/TokenItem'
import './tokenlist.scss'
import SkeletonTokenItem from '../SkeletonTokenItem/SkeletonTokenItem';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';

function TokenList() {
    const [tokens, setTokens] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    function fetchToken() {
        setIsLoading(true);
        axios.get(API_URL, {
            params: {
                vs_currency: 'usd'
            }
        })
            .then(response => {
                const data = response.data
                setTokens(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(true);
                setIsError(true);
            });
    }

    useEffect(() => {
        fetchToken();

        const interval = setInterval(() => {
            fetchToken();
        }, 60000);

        return () => clearInterval(interval);
    }, [])

    const changeColor = (change) => {
        change = change.toFixed(2)
        if (change > 0) {
            return 'tokenitem-item__change--positive';
        }
        else if (change < 0) {
            return 'tokenitem-item__change--negative';
        }
        else {
            return 'tokenitem-item__change--neutral';
        }
    }

    const SkeletonToken = Array.from({ length: 100 }, (_, index) => index);

    if (isError) {
        return (
            <h1 className='token__title-error'>Error has occured, try reload the page</h1>
        );
    }

    return (
        <>
            {isLoading ? (
                SkeletonToken.map((token) => (
                    <SkeletonTokenItem key={token} />
                ))
            ) : (
                tokens.map(token => (
                    <TokenItem
                        id={token.id}
                        key={token.id}
                        image={token.image}
                        title={token.symbol.toUpperCase()}
                        description={`(${token.name})`}
                        price={`$${parseFloat(token.current_price).toFixed(2)}`}
                        change={`${parseFloat(token.price_change_percentage_24h).toFixed(2)}%`}
                        volume={`$${new Intl.NumberFormat('de-DE').format(parseFloat(token.total_volume))}`}
                        cap={`$${new Intl.NumberFormat('de-DE').format(parseFloat(token.market_cap))}`}
                        changeColor={changeColor(token.price_change_percentage_24h)}
                    />
                ))
            )}
        </>
    );
}

export default TokenList