import { useEffect, useRef } from "react";

export default function Result({response, topics}) {
    const resultadoRef = useRef(null);

    useEffect(() => {
        resultadoRef.current.style.visibility = "hidden"
    }, [])

    const findValue = (str, key) =>{
        const value = str.indexOf(key) + key.length + 3
        return value
    }

    const parserResult = (response) =>{
        const objective = "objective"

        if(Object.keys(response).length != 0) {
            resultadoRef.current.style.visibility = "visible"
            const parseResponseString =  JSON.stringify(response) 
            
            let result = ""
                        
            topics.map((topic) => {
                if(parseResponseString.includes(topic)){
                    result += `${topic}: ${parseResponseString[findValue(parseResponseString, topic)]}, `                   
                }
            })

            if(parseResponseString.includes(objective)){
                result += `Potential readers: ${parseResponseString[findValue(parseResponseString, objective)]}.`             
            }

            return result
        }    
    }

    return (
        <div ref={resultadoRef}>
            <div className="mt-4 alert alert-dark" role="alert">
                <span><strong>Results:</strong> {parserResult(response)}</span>
            </div>
        </div>
    )
}

