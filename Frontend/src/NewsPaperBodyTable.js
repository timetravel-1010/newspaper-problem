export default function NewsPaperBodyTable({ item, handleRemoveTopic}) {
    return (
        <tr>
            <td>{item}</td>
            <td>
                <input
                    name={`min-${item.slice(0, 3).toLowerCase()}`}
                    className="form-control"
                    type="number"
                    min="0"
                    step="1"
                    defaultValue="0"
                />
            </td>
            <td>
                <input
                    name={`max-${item.slice(0, 3).toLowerCase()}`}
                    className="form-control"
                    type="number"
                    min="0"
                    step="1"
                    defaultValue="0"
                />
            </td>
            <td>
                <input
                    name={`pot-${item.slice(0, 3).toLowerCase()}`}
                    className="form-control"
                    type="number"
                    min="0"
                    step="1"
                    defaultValue="0"
                />
            </td>
            <td>
                <button type="button" className="btn btn-outline-danger" onClick={()=>{handleRemoveTopic(item)}} >Eliminar</button>
            </td>
        </tr>
    )
}