'use client'
// React
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

//component
import CL from './C_login.module.css'

//method
import POST from '@/database/Method/POST';
import Shimerloading from '@/components/loading/Shimerloading'






interface OTPlikeInput_inter {
    maxLength?: any
}

export async function PostLogin(NIP: any) {
    let URL = '/Auth/api/Login'

    let res = await POST(URL, false, { body: NIP })

    if (!res.ok) {

        throw new Error('Cek Pagawai GAGAL')
    }

    return res.json()
}



export function OTPlikeInput({ maxLength = "1" }: OTPlikeInput_inter) {

    const [Load, setLoad] = useState(false)
    const [isSuccess, setIsSuccess] = useState({ success: false, name: "Proses" })

    const refNIP = useRef<null | string>(null)
    const router = useRouter()

    function InputOTP({ id, holder }: { id: number, holder: string }) {

        function onKeyDownOTP(e: any, id: number) {

            if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode === 8) {

                let NextInput = document.getElementById(`${id + 1}`)
                let BeforeInput = document.getElementById(`${id - 1}`)
                let StartInput = document.getElementById("0")

                if (e.code != "Backspace" && e.target.value.length === e.target.maxLength) {

                    NextInput?.removeAttribute("disabled")
                    NextInput?.focus()
                }

                if (e.code === "Backspace" && e.target.value.length != e.target.maxLength) {

                    BeforeInput?.focus()
                }

                if (StartInput != null && StartInput.innerText.length != e.target.maxLength) {
                    StartInput.removeAttribute("disabled")
                }

            } else {
                e.target.value = ""
            }
        }

        async function CollectOTP(e: any, id: number) {

            if (!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode === 8)) {
                e.target.value = ""
            }

            if (id + 1 === 9) {
                setLoad(true)
                let FormNode = [...e.target.parentNode]
                let FormNodeValue = []
                for (var i = 0; i < FormNode.length; i++) {
                    if (FormNode[i].value != "") {
                        FormNodeValue.push(FormNode[i].value)
                    }

                }
                refNIP.current = FormNodeValue.join("")

                let Status_Login = await PostLogin(refNIP.current)

                console.log("Status_Login", Status_Login)
                if (Status_Login.registered > 0) {
                    setIsSuccess({ success: true, name: `${Status_Login.name}` })
                    setTimeout(() => {
                        router.push('/App/KendaraanDinas')
                    }, 2000)
                } else {
                    setIsSuccess({ success: false, name: "NIP Tidak Ditemukan" })
                    setTimeout(() => {

                        setLoad(false)
                        setIsSuccess({ success: false, name: "Proses" })
                    }, 2000)
                }
            }
        }

        return (

            <input
                id={`${id}`}
                className={CL['OPTInput']}
                type='tel'

                maxLength={maxLength}
                onKeyDown={(e) => onKeyDownOTP(e, id)}
                onKeyUp={(e) => CollectOTP(e, id)}

                autoFocus
                disabled={id === 0 ? false : true}
                tabIndex={0}
                inputMode="numeric"
                placeholder={holder}
                autoComplete="off"
            />

        )

    }

    return (
        <>
            <div className={CL['OTPLayout']} >
                {
                    Load === false
                        ?
                        <></>
                        :
                        <>
                            <Shimerloading loop={0} />
                        </>

                }

                <h2 className={`
                        ${CL['Notif']}
                        ${Load === true && CL['Proses']}
                        ${isSuccess.success === true && CL['Success']}
                        ${isSuccess.success === false && isSuccess.name === "NIP Tidak Ditemukan" && CL['Error']}
                `} >
                    {isSuccess.name}
                </h2>
                <form className={CL['OTP']} >
                    <InputOTP id={0} holder={'N'} />
                    <InputOTP id={1} holder={'I'} />
                    <InputOTP id={2} holder={'P'} />
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <InputOTP id={3} holder={'P'} />
                    <InputOTP id={4} holder={'E'} />
                    <InputOTP id={5} holder={'N'} />
                    <InputOTP id={6} holder={'D'} />
                    <InputOTP id={7} holder={'E'} />
                    <InputOTP id={8} holder={'K'} />
                </form>
            </div >
        </>
    )
}




import { deleteCookie } from 'cookies-next';



export default function Logout() {
    const router = useRouter()

    function Logout() {
        deleteCookie("session", { path: '/', domain: 'localhost' });
        router.push('/Auth')
    }

    return (
        <>
            <div onClick={() => Logout()} >
                ⇽ Keluar
            </div>
        </>
    )
}
