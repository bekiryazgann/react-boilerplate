import React, {useState, useEffect} from "react";
import {useWords} from "@/store/useWords.js";

export default function Home() {
    const words = useWords(state => state.words);
    const [activeWord, setActiveWord] = useState(words[0]);
    const inputRefs = words.map(() => React.createRef());

    useEffect(() => {
        const activeWordIndex = words.indexOf(activeWord);
        if (inputRefs[activeWordIndex]) {
            inputRefs[activeWordIndex].current.focus();
        }
    }, [activeWord]);

    return (
        <section>
            <div className="h-[200px] !overflow-hidden">
                <div className="flex flex-wrap content-start">
                    {words.map((word, index) => (
                        <div key={word} className="relative p-2">
                            <div className="opacity-0 text-4xl font-mono">{word}</div>
                            <span className="text-gray-800 text-4xl font-medium font-mono absolute top-0 left-0">
                                {word}
                            </span>
                            <input type="text"
                                   ref={inputRefs[index]}
                                   className="absolute top-0 left-0 bg-transparent focus:outline-none font-mono text-4xl pointer-events-none"
                                   onKeyDown={event => {
                                       if (event.code === "Space") {
                                           //if (word.length === event.target.value){
                                               setActiveWord(words[index + 1]);
                                               event.preventDefault();
                                           //}
                                       }
                                       if (event.code === "Backspace" && event.target.value === "") {
                                           setActiveWord(words[index - 1]);
                                           event.preventDefault();
                                       }
                                   }}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
