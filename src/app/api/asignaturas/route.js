import { NextResponse } from "next/server";
import { connectDB} from '@/utils/mongose'
import Asignatura from '@/models/Asignatura'

export async function GET() {
  connectDB()

  const asignatura = await Asignatura.find();
  return NextResponse.json(asignatura);

}

export async function POST(request) {

  try {
  const data = await request.json()
  const newAsignatura = new Asignatura(data)
  const savedAsignatura = await newAsignatura.save()
  return NextResponse.json(savedAsignatura)
  
  } catch(error) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }

}
