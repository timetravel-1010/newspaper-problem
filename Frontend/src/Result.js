import { useEffect, useRef } from "react";

export default function Result({response, topics}) {
    const resultadoRef = useRef(null);

    let parseJSON = {}
    
    if(Object.keys(response).length != 0) {
        resultadoRef.current.style.visibility = "visible"
        parseJSON = JSON.parse(response);
    }   

    useEffect(() => {
        resultadoRef.current.style.visibility = "hidden"
    }, [])

    const getTopicsResults = (topics, parseJSON) => {
        let result = ""
        if(Object.keys(response).length != 0){
            topics.map((topic) => {
                result += `${topic}: ${parseJSON.temas[topic]} `      
            })
        }
        return result
    }   

    return (
        <div ref={resultadoRef}>
            <div className="mt-4 alert alert-dark" role="alert">
                <span><strong>Results:</strong> {(parseJSON.objective === 0 ? "It could not include any topic " : getTopicsResults(topics, parseJSON))}</span>
                <span><strong>Potential Readers:</strong> {parseJSON.objective}</span>
            </div>
        </div>
    )
}

