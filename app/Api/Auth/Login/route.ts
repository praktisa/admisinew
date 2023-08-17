// import { ReadFileJSON } from '@/app/feature/Kepegawaian/Upload/CRUDJSON';
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { AmbilDataPegawaiDariJSON, AmbilDataPegawaiDariJSONDirectory, CekNIP, TokenNIP, BuatSession, HapusSession } from './_function/function';



export async function POST(request: NextRequest, response: NextResponse) {

    const res = await request.json()
    let NIP: string = JSON.stringify(res)


    let Result = AmbilDataPegawaiDariJSONDirectory(NIP)

    let ApakahAda = Object.keys(Result).length

    if (ApakahAda > 0) {
        let Token_NIP = TokenNIP(NIP)
        let ApakahSudahLogin = await CekNIP(NIP)

        if (ApakahSudahLogin > 1 || ApakahSudahLogin === 1) {
            await HapusSession(NIP)
            await BuatSession(NIP, Token_NIP)

        } else {
            await BuatSession(NIP, Token_NIP)
        }

        cookies().set({
            name: 'session',
            value: Token_NIP,
            expires: new Date('2024-01-01'),
            path: '/', // For all paths
        })

        return NextResponse.json({ registered: ApakahAda })
    } else {
        return NextResponse.json({ registered: 0 })
    }


}

export async function GET(request: NextRequest, response: NextResponse) {



}