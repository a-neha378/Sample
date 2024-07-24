import React from 'react'

function Example() {
    const a = 3, b = 3;
    return (
        <div>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
            </ul>
            <h1 data-testid="mytestid">Hello</h1>
            <span title="sum">{a + b}</span>
        </div>
    )
}

export default Example