import ClientesRow from "./ClientesRow";

function ClientesTable({clientes, onEdit, onDelete}){
    return(
        <table>
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Direccion</th>
                    <th>Correo</th>
                    <th>Numero</th>
                    <th>Forma de Pago</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => (
                    <ClientesRow
                    key = {cliente.clienteId}
                    cliente={cliente}
                    onEdit={onEdit}
                    onDelate={onDelete}
                    />
                ))}
            </tbody>
        </table>
    )
}
export default ClientesTable