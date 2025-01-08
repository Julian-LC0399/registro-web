import { connectDB } from "@/utils/mongose";
import Asignatura from "@/models/Asignatura";
import AsignaturaCard from "@/components/AsignaturaCard";

async function loadasignaturas() {
  connectDB()

  const asignaturas = await Asignatura.find()
  return asignaturas
}

async function inicio() {
  const asignaturas = await loadasignaturas()
  return (
    <div className="grid grid-cols-3 gap-2">
      {asignaturas.map(asignatura => (
        <AsignaturaCard asignatura={asignatura} key={asignatura._id}/>
        
        
      ))}
    </div>
  )
}

export default inicio