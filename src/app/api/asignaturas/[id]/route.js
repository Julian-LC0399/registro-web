import Asignatura from "@/models/Asignatura";
import { connectDB } from "@/utils/mongose";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  try {
    connectDB()
    const asignaturaFound = await Asignatura.findById(params.id);

    if (!asignaturaFound)
      return NextResponse.json(
        {
          message: "Asignatura not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(asignaturaFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json()
    const asignaturaUpdated = await Asignatura.findByIdAndUpdate(params.id, body, {
      new: true
    })
    return NextResponse.json(asignaturaUpdated)
  } catch (error) {

    return NextResponse(error.message, {
      status: 400
    })

  }

}

export async function DELETE(request, { params }) {
  try {
    const asignaturaDeleted = await Asignatura.findByIdAndDelete(params.id);

    if (!asignaturaDeleted)
      return NextResponse.json(
        {
          message: "Asignatura not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(asignaturaDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}