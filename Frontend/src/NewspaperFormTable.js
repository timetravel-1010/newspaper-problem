import { useEffect, useRef, useState } from "react";
import NewsPaperBodyTable from "./NewsPaperBodyTable";
import Result from "./Result";
import useFileDZN from "./UseFileDZN";

export default function NewspaperFormTable() {
    const formElementRef = useRef(null);
    const newTopicRef = useRef(null);

    const [topics, setTopics] = useState([])
    const [result, setResult] = useState({})

    useEffect(() => {
        setTopics(['Internacional', 'Local', 'Deporte', 'Cultura', 'Entretenimiento'])
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = Array.from(formElementRef.current.elements)
            .filter((input) => input.name)
            .reduce(
                (obj, input) => Object.assign(obj, { [input.name]: input.value }),
                {}
            );
        const response = await useFileDZN({ data, topics })
        setResult(response)
    }

    const handleAddTopic = (e) => {
        setTopics([...topics, newTopicRef.current.value])
    }

    return <>
        <div className="mt-4 d-flex justify-content-center">
            <h3>Newspaper Problem</h3>
        </div>
        <div className="d-flex justify-content-end">
            <div>
                <input name="new-topic" className="form-control " type="text" ref={newTopicRef} />
            </div>
            <div>
                <button type="button" className="btn btn-success" onClick={handleAddTopic}>Agregar nuevo tema</button>
            </div>
        </div>

        <form
            onSubmit={handleSubmit}
            target="_blank"
            ref={formElementRef}
        >
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>Temas</th>
                        <th>Min nb de paginas</th>
                        <th>Max nb of pages</th>
                        <th>Potential Readers -per page-</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((item, i) => {
                        return <NewsPaperBodyTable key={i} item={item} />
                    })}
                </tbody>
            </table>

            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">Solve Problem</button>
            </div>

        </form>

        <Result response={result} />
    </>
}