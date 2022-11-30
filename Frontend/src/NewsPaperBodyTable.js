export default function NewsPaperBodyTable({ item, handleRemoveTopic}) {
    return (
        <tr>
            <th scope="row">{item}</th>
            <td>
                <input
                    name={`min-${item.toLowerCase()}`}
                    className="form-control"
                    type="number"
                    min="0"
                    step="1"
                    defaultValue="0"
                />
            </td>
            <td>
                <input
                    name={`max-${item.toLowerCase()}`}
                    className="form-control"
                    type="number"
                    min="0"
                    step="1"
                    defaultValue="0"
                />
            </td>
            <td>
                <input
                    name={`pot-${item.toLowerCase()}`}
                    className="form-control"
                    type="number"
                    min="0"
                    step="1"
                    defaultValue="0"
                />
            </td>
            <td>
                <button type="button" className="btn btn-outline-danger" onClick={()=>{handleRemoveTopic(item)}}>Delete</button>
            </td>
        </tr>
    )
}