import { useState } from "react";

function ClientesForm({onSubmit}) {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [direccion, setDireccion] = useState('')
    const [correo, setCorreo] = useState('')
    const [numero, setNumero] = useState('')
    const [info_pago, setInfo_pago] = useState('')

    const handleNombreChange = (event) =>{setNombre(event.target.value)};
    const handleApellidoChange = (event) =>{setApellido(event.target.value)};
    const handleDireccionChange = (event) =>{setDireccion(event.target.value)};
    const handleCorreoChange = (event) =>{setCorreo(event.target.value)};
    const handleNumeroChange = (event) =>{setNumero(event.target.value)};
    const handleInfo_PagoChamse = (event) =>{setInfo_pago(event.target.value)};

    const handleSubmit = (event) => {
        event.preventDefaul(); 
        onSubmit({nombre, apellido, direccion, correo, numero, info_pago})
        setNombre('')
        setApellido('')
        setDireccion('')
        setCorreo('')
        setNumero('')
        setInfo_pago('')
        }

        return(
            <form onSubmit={handleSubmit}>
            <input type="texto" placeholder="Nombres" value={nombre} onChange={handleNombreChange} required />
            <input type="texto" placeholder="Apellido" value={apellido} onChange={handleApellidoChange} required />
            <input type="texto" placeholder="Diereccion" value={direccion} onChange={handleDireccionChange} required />
            <input type="texto" placeholder="Correo" value={correo} onChange={handleCorreoChange} required />
            <input type="Texto" placeholder="Numero" value={numero} onChange={handleNumeroChange} required />
            <input type="texto" placeholder="Informacion del pago" value={info_pago} onChange={handleInfo_PagoChamse} required />
            <button type="submit">Save</button>
        </form>
        )
    }
    export default ClientesForm   