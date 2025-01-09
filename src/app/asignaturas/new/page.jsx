"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

function Page() {
  const [newAsignatura, setNewAsignatura] = useState({
    name: "",
    credit_units: "",
    teacher: "",
    description: "",
    schedule: "",
    classroom: "",
    prerequisites: "",
    maximum_quota: "",
  });

  const router = useRouter();
  const params = useParams();

  const createAsignatura = async () => {
    try {
      const res = await fetch("/api/asignaturas", {
        method: "POST",
        body: JSON.stringify(newAsignatura),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (res.status == 200) {
        router.push("/");
        router.refresh();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Esta seguro de eliminar el registro?")) {
      try {
        const res = await fetch(`/api/asignaturas/${params.id}`, {
          method: "Delete",
        });
        router.push("/");
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAsignatura();
  };

  const handleChange = (e) =>
    setNewAsignatura({ ...newAsignatura, [e.target.name]: e.target.value });

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <header className="flex justify-between">
          <h1 className="font-bold text-3xl">
            {!params.id
              ? "Crear registro de asignatura"
              : "Actualizar registro de asignatura"}
          </h1>

          <button
            type="button"
            className="bg-red-500 px-3 py-1 rounded-md"
            onClick={handleDelete}
          >
            Borrar
          </button>
        </header>

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="bg-gray-100 border-2 w-full p-2 rounded-lg my-2"
          onChange={handleChange}
        />
        <input
          type="number"
          name="credit_units"
          placeholder="Unidades de crédito"
          className="bg-gray-100 border-2 w-full p-2 rounded-lg my-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="teacher"
          placeholder="Profesor"
          className="bg-gray-100 border-2 w-full p-2 rounded-lg my-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          className="bg-gray-100 border-2 w-full p-2 rounded-lg my-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="schedule"
          placeholder="Horario"
          className="bg-gray-100 border-2 w-full p-2 rounded-lg my-2"
          onChange={handleChange}
        />
        <input
          type="number"
          name="classroom"
          placeholder="Aula"
          className="bg-gray-100 border-2 w-full p-2 rounded-lg my-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="prerequisites"
          placeholder="Prerrequisitos"
          className="bg-gray-100 border-2 w-full p-2 rounded-lg my-2"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maximum_quota"
          placeholder="Cupo máximo"
          className="bg-gray-100 border-2 w-full p-2 rounded-lg my-2"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-white font-semibold 
             px-4 py-2 rounded-lg"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Page;
