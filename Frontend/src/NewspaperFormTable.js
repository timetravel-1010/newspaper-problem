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
        setTopics(['International', 'National', 'Local', 'Sport', 'Culture'])
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

    const handleRemoveTopic = (item) => {
        setTopics(prev => prev.filter(topic => topic !== item ))
    }

    return <>
        <div className="mt-4 d-flex justify-content-end">
            <div>
                <input name="new-topic" className="form-control" type="text" ref={newTopicRef} required />
            </div>
            
            <div>
                <button type="button" className="btn btn-secondary" onClick={handleAddTopic}>Add new topic</button>
            </div>
        </div>

        <form
            onSubmit={handleSubmit}
            target="_blank"
            ref={formElementRef}
        >
            <table className="table table-striped mt-4">
                <thead style={{backgroundColor: "#212529"}}>
                    <tr style={{color: "white"}}>
                        <th  scope="col">Topics</th>
                        <th scope="col">Min nb of page</th>
                        <th scope="col">Max nb of page</th>
                        <th scope="col">Potential readers -per page-</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((item, i) => {
                        return <NewsPaperBodyTable key={i} item={item} handleRemoveTopic={handleRemoveTopic}/>
                    })}
                </tbody>
            </table>

            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-secondary">Solve Problem</button>
            </div>

        </form>

        <Result response={result} topics = {topics} />
    </>
}