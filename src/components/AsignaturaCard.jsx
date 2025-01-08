import Link from "next/link"

function AsignaturaCard({asignatura}) {

  return (
    < Link href={`/asignaturas/${asignatura._id}`}>
    <div className="bg-grey-800 p-10 text-black rounded-md
    hover:cursor-pointer hover:bg-black-700">
       <h3>{asignatura.name}</h3>
          <h3>{asignatura.credit_units}</h3>
          <h3>{asignatura.teacher}</h3>
          <p>{asignatura.description}</p>
          <h3>{asignatura.schedule}</h3>
          <h3>{asignatura.classroom}</h3>
          <h3>{asignatura.prerequisites}</h3>
          <h3>{asignatura.maximum_quota}</h3> 
    </div>
    </Link>
  )
}

export default AsignaturaCard