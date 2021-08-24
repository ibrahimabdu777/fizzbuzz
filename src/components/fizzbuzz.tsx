import { JsxEmit } from "typescript"
import {useState} from 'react'

export default function FizzBuzz(): JSX.Element {
 
    const [count, setCount] = useState(0)
    const [history, setHistory] = useState<any[]>([])

    function handleButtonClick() {
        setCount(count => count +1)
        setHistory(updateHistory)
    }

    function updateHistory(history: any[]) {
        
        if (count % 3 === 0 && count !== 0){
            return [...history, 'fizz' ]
        }
        else if (count % 5 === 0 && count !== 0){
            return [...history, 'buzz']
        }
        else return [...history, count]
    }
 
 
    return <>
        <button onClick={handleButtonClick}>play fizzbuzz!</button>
        <p>{history.join('   ')}</p>
    
    </>
}