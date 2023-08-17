import { NextRequest, NextResponse } from 'next/server'
import GetListKDAll from '@DB_KendaraanDinas/GetListKDAll';



export async function GET(request: NextRequest, response: NextResponse) {

    let result = await GetListKDAll(false)

    return NextResponse.json({ data: result[0] })

}