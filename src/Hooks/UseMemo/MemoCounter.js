import React, {useState, useMemo} from 'react'

// useCallback cache the provider function itselt
// whereas usememo invokes provider function and cache it's result.

// If you want to cache a function use useCallBack
// If you want to cache result of an invoked function use useMemo

function MemoCounter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementCountOne = () => {
        setCountOne(countOne + 1)
    }

    const incrementCountTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const IsEven = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++
        return countOne % 2 === 0
    }, [countOne]) 

    return (
        <div>
            Memo Counter
            <div>
                <button onClick={incrementCountOne}>
                    Increment Count One - {countOne}
                </button>
                <span>{IsEven ? 'Event' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementCountTwo}>
                    Increment Count Two - {countTwo}
                </button>
            </div>
        </div>
    )
}

export default MemoCounter
