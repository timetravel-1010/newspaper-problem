import { useEffect, useRef } from "react";

export default function Result({response}) {
    const resultadoRef = useRef(null);
    
    

    useEffect(() => {
        resultadoRef.current.style.visibility = "hidden"
    }, []);

    if(Object.keys(response).length != 0) {
        resultadoRef.current.style.visibility = "visible"
        console.log(typeof(response))
        console.log(response)
        //response = JSON.stringify(response)
        //const obj = JSON.parse(response)
        //console.log(obj)
        //console.log("temas: ", obj.temas);
    }

    return (
        <div ref={resultadoRef}>
            <div className="mt-4 alert alert-primary" role="alert">
                Resultado: Aqui iran los resultados
            </div>
        </div>
    )

}

