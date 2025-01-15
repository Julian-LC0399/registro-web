import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-900 py-5 mb-2">
      <div className="container flex justify-between px-10 md:px-0 mx-auto">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold "> Inicio</h1>
        </Link>
        <ul className="flex gap-x-4">
          <li>
            <Link href={"/asignaturas/new"}>Registrar asignatura</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
