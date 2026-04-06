import React, { useState } from 'react'

const Calculator = () => {
    const [data, setData] = useState("");

    const getValue = (event) => {
        setData(data.concat(event.target.value))
    }

    const calculation = () => {
        try {
            // eval का इस्तेमाल करते समय try-catch लगाना अच्छा होता है
            setData(eval(data).toString())
        } catch (error) {
            setData("Error")
        }
    }

    const back = () => {
        setData(data.slice(0, -1))
    }

    const clear = () => {
        setData("")
    }

    return (
        <div className='calculator'>
            {/* स्क्रीन वाला हिस्सा */}
            <div className='screen-container'>
                <input 
                    placeholder='0' 
                    value={data} 
                    readOnly // ताकि कीबोर्ड से टाइप न हो, सिर्फ बटन से चले
                />
            </div>

            {/* बटन्स को इस 'buttons-grid' के अंदर रखने से वो 4-4 की लाइन में आएंगे */}
            <div className='buttons-grid'>
                <button onClick={getValue} value="(">(</button>
                <button onClick={getValue} value=")">)</button>
                <button onClick={getValue} value="%">%</button>
                <button onClick={clear} className="clear-btn">AC</button>

                <button onClick={getValue} value="7">7</button>
                <button onClick={getValue} value="8">8</button>
                <button onClick={getValue} value="9">9</button>
                <button onClick={getValue} value="*">*</button>

                <button onClick={getValue} value="4">4</button>
                <button onClick={getValue} value="5">5</button>
                <button onClick={getValue} value="6">6</button>
                <button onClick={getValue} value="-">-</button>

                <button onClick={getValue} value="1">1</button>
                <button onClick={getValue} value="2">2</button>
                <button onClick={getValue} value="3">3</button>
                <button onClick={getValue} value="+">+</button>

                <button onClick={getValue} value="0">0</button>
                <button onClick={back}>Back</button>
                <button onClick={calculation} className="equal-btn">=</button>
                <button onClick={getValue} value="/">/</button>
            </div>
        </div>
    )
}

export default Calculator