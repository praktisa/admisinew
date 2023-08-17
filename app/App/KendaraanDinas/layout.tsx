import Layout_KendaraanDinas from '@/content/KendaraanDinas/S_KendaraanDinas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admisi | TURT',
    description: 'Kendaraan Dinas',
}

interface children {
    children: React.ReactNode
    modal: React.ReactNode
    riwayat: React.ReactNode
}

// Riwayat Pararel
// Pinjam Intercept

export default function KendaraanDinasLayout(props: children) {


    return (
        <>
            {/* <div style={{ position: "relative", left: "0", padding: "10px", background: "red" }} > */}
            {props.modal}
            {/* </div> */}


            <h1>Kendaraan Dinas</h1>
            <div>
                woi {props.riwayat}
            </div>

            <Layout_KendaraanDinas>
                {props.children}
            </Layout_KendaraanDinas>

        </>


    )
}
