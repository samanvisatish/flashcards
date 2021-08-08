import React, {useState} from 'react';

export default function Flashcard({flashcard}) {
    const [flip, setflip] = useState(false)

    return (
        <div onClick= {() => setflip(!flip)}>
            {flip ? flashcard.answer : flashcard.question}
        </div>
    )
}
