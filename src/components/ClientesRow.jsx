const ClientesRow = ({cliente, onEdit, onDelate}) =>{
    const handleEdit = () =>{
        onEdit(cliente)
    }

    const handleDelete= () => {
        onDelate(cliente.clienteId)
    }

    return(
        <tr>
        <td>{cliente.nombre}</td>
        <td>{cliente.apellido}</td>
        <td>{cliente.direccion}</td>
        <td>{cliente.correo}</td>
        <td>{cliente.numero}</td>
        <td>{cliente.info_pago}</td>
        <td>
            <button onClick={handleEdit}>EDITAR 🔧 </button>
            <button onClick={handleDelete}>ELIMINAR 📎 </button>
        </td>
        </tr>
    )
}
export default ClientesRow