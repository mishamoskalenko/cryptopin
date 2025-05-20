import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TokenItem from '../TokenItem/TokenItem'
import './tokenlist.scss'
import SkeletonTokenItem from '../SkeletonTokenItem/SkeletonTokenItem';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const CRYPTO_SYMBOLS = ['bitcoin', 'ethereum', 'tether', 'usd-coin', 'cardano', 'xrp', 'dogecoin', 'litecoin'];

function TokenList() {
    const [tokens, setTokens] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function fetchToken() {
        setIsLoading(true);
        axios.get(API_URL, {
            params: {
                vs_currency: 'usd',
                ids: CRYPTO_SYMBOLS.join(','),
            }
        })
            .then(response => {
                const data = response.data.filter(token => CRYPTO_SYMBOLS.includes(token.id));
                setTokens(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchToken();
    }, [])

    const changeColor = (change) => {
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

    function getTokenImage(symbol) {
        const images = {
            'bitcoin': 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png',
            'ethereum': 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png',
            'tether': 'https://coin-images.coingecko.com/coins/images/325/large/Tether.png',
            'dogecoin': 'https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png',
            'usd-coin': 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png',
            'cardano': 'https://coin-images.coingecko.com/coins/images/975/large/cardano.png',
            'litecoin': 'https://coin-images.coingecko.com/coins/images/2/large/litecoin.png',
        };

        return images[symbol.toLowerCase()] || '';
    }
    const SkeletonToken = Array.from({ length: 9 }, (_, index) => index);

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
                        image={getTokenImage(token.id)}
                        title={token.symbol.toUpperCase()}
                        description={`(${token.name})`}
                        price={`$${parseFloat(token.current_price).toFixed(2)}`}
                        change={`${parseFloat(token.price_change_percentage_24h).toFixed(2)}%`}
                        volume={`$${parseFloat(token.total_volume).toFixed(0)}`}
                        cap={`$${parseFloat(token.market_cap).toFixed(0)}`}
                        changeColor={changeColor(token.price_change_percentage_24h)}
                    />
                ))
            )}
        </>
    );
}

export default TokenList