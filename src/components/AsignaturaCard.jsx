import Link from "next/link";

function AsignaturaCard({ asignatura }) {
  return (
    <Link href={`/asignaturas/${asignatura._id}`}>
      <div
        className="bg-blue-800 p-10 text-white rounded-md
    hover:cursor-pointer hover:bg-black-700"
      >
        <h3 className="text-2xl font-bold">{asignatura.name}</h3>
        <h3 className="text-2xl font-bold">{asignatura.credit_units}</h3>
        <h3 className="text-2xl font-bold">{asignatura.teacher}</h3>
        <p className="text-2xl font-bold">{asignatura.description}</p>
        <h3 className="text-2xl font-bold">{asignatura.schedule}</h3>
        <h3 className="text-2xl font-bold">{asignatura.classroom}</h3>
        <h3 className="text-2xl font-bold">{asignatura.prerequisites}</h3>
        <h3 className="text-2xl font-bold">{asignatura.maximum_quota}</h3>
      </div>
    </Link>
  );
}

export default AsignaturaCard;
