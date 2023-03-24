const Todo=(props)=>{

    return(
    <tr>
    <td>{props.id}</td>
    <td>{props.title}</td>
    <td>{props.completed? 'true': 'false'}</td>
</tr>
    )
};

export default Todo;