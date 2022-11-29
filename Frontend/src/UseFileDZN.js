export default async function UseFileDZN({ data, topics }) {

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

    function parseNumReadersDZN(data, value){
        let parseNumReaders = ""
    
        for (var key in data) {
            if (key.includes(value)) {
                parseNumReaders += data[key] + ","
            }
        }

        return parseNumReaders.substring(0, parseNumReaders.length -1)
    }

    function parseTopicsDZN(topics){
        let parseTopics = ""
        topics.map((item) => {
            parseTopics += item + ","
        })
        return parseTopics.substring(0, parseTopics.length -1)
    }

    const env = `Temas = {${parseTopicsDZN(topics)}
        };
    minPaginas = [${parseNumReadersDZN(data, "min")}];
    maxPaginas = [${parseNumReadersDZN(data, "max")}];
    promLectores = [${parseNumReadersDZN(data, "pot")}];
    p = 11; `
    const response = await postData('http://localhost:8000/api', { data: env })

    return response
}