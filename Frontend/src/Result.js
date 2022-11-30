import { useEffect, useRef } from "react";

export default function Result({response}) {
    const resultadoRef = useRef(null);

    console.log(response);

    useEffect(() => {
        resultadoRef.current.style.visibility = "hidden"
    }, []);

    if(Object.keys(response).length != 0)
        resultadoRef.current.style.visibility = "visible"
        

    return (
        <div ref={resultadoRef}>
            <div className="mt-4 alert alert-primary" role="alert">
                Resultado: Aqui iran los resultados
            </div>
        </div>
    )
}

