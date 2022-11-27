export default async function UseFileDZN({ data }) {

    async function postData(url = '', env = {}) {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(env) // body data type must match "Content-Type" header
        });

        return response.json();
    }


    const env = `Temas = {Internacional, 
        Nacional, 
        Local, 
        Deporte, 
        Cultura,
        Entretenimiento
        };
    minPaginas = [${data['inter-min']}, ${data['nat-min']}, ${data['loc-min']}, ${data['spo-min']}, ${data['cul-min']}, ${data['ent-min']}];
    maxPaginas = [${data['inter-max']}, ${data['nat-max']}, ${data['loc-max']}, ${data['spo-max']}, ${data['cul-max']}, ${data['ent-max']}];
    promLectores = [${data['inter-pot']}, ${data['nat-pot']}, ${data['loc-pot']}, ${data['spo-pot']}, ${data['cul-pot']}, ${data['ent-pot']}];
    p = 11; `
    const res = await postData('http://localhost:8000/api', { data: env })
    console.log(res);
}