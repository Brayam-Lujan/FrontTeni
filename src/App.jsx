import { useEffect,useState } from 'react'
import './App.css'
import axios from 'axios'
import ClientesTable from './components/ClientesTable'
import ClientesRow from './components/ClientesRow'

function App() {
  const [clientes, setClientes] = useState([])
  const [editarCliente, setEditarCliente] =useState(null)

  useEffect(()=>{
    fetchClientes()
  }, [])


 
  const handleCrearOctualizarcliente = async (clienteData) =>{
    if (editarCliente){
      await axios.put(`http://localhost:8080/apiTenis/clientes/${editarCliente.clienteId}`, clienteData)
    } else {
      await axios.post(`http://localhost:8080/apiTenis/clientes`, clienteData)
    }
  }

  const fetchClientes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/apiTenis/clientes`)
      setClientes(response.data)
    } catch (error){
      console.log('error al cargar los clientes: ' ,error)
    }
  }

  const handleEditarCliente = (cliente) =>{
    setEditarCliente(cliente) 
  }

  const handelEliminarCliente = async(clienteId) => {
    await axios.delete(`http://localhost:8080/apiTenis/clientes/${clienteId}`)
    fetchClientes()
  }

  return (
      <div className='App'>
      <h1>Api Tenis</h1>
      <br/>
      <h2>Lista de Clientes</h2>
      <ClientesTable clientes={clientes} handleEditarCliente={handleEditarCliente} handelEliminarCliente={handelEliminarCliente}/>
      <h2>{editarCliente ? 'editar cliente' : 'crear cliente'}</h2>
      <ClientesRow onSubmit={handleCrearOctualizarcliente} initialcliente={editarCliente}/>
      </div>
  )
}

export default App
