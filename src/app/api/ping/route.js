import { NextResponse } from "next/server";
import { connectDB} from '@/utils/mongose'


export function GET() {

 connectDB()

  return NextResponse.json({
    message: "En linea",
  });
}