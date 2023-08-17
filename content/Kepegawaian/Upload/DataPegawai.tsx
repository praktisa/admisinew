'use client';
import React from 'react'
import { read, utils } from "xlsx";

import DP from './DataPegawai.module.css'
import ButtonUpload from '@/components/CTA/ButtonUpload/ButtonUpload';
import ButtonOnClick from '@/components/CTA/CustomButton/ButtonOnClick';

export function ViewDataKepegawaian({ data }: any) {

    console.log("DATAA", data)
    let Ambil = ['NAMA PEGAWAI', 'IP Sikka',]
    let Tanggalan = ['tmt_pns', 'tgl_lahir_peg', 'tmt_gaji']

    return (
        <>
            <table className={DP['layout']} >
                <thead>
                    <tr>
                        <th>No</th>
                        {
                            Ambil.map((am, i) => {
                                return (
                                    <th key={am}>{am}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dats: any, i: number) => {

                            return (
                                <tr key={i}>
                                    <td style={{ textAlign: "center" }} >{i + 1}</td>
                                    {
                                        Ambil.map((am, o) => {
                                            let view = dats[am]
                                            if (Tanggalan.includes(am)) {
                                                let raw = new Date(dats[am])
                                                let tgl = raw.getDate()
                                                let bln = raw.getMonth()
                                                let thn = raw.getFullYear()

                                                !isNaN(tgl) ? view = tgl + "/" + bln + "/" + thn : ""

                                            }

                                            return (
                                                <td key={i + o}>{view}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

interface Stater {
    setState: any,
}

export function UploadExcelKepegawaian({ setState }: Stater) {



    const ExceltoJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation(); e.preventDefault();
        console.log("e e", e);

        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target != null) {
                    const data = e.target.result
                    const workbook = read(data, { type: "array" });
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const json = utils.sheet_to_json(worksheet, { raw: false });
                    console.log("json worksheet", worksheet);
                    setState(json)
                }
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }

    }

    return (
        <>
            <ButtonUpload onChange={ExceltoJSON} >
                Upload Data Pegawai
            </ButtonUpload>
        </>
    )
}

interface SimpanDataKepegawaianinter {
    data: any,
}

export function SimpanDataKepegawaian({ data }: SimpanDataKepegawaianinter) {

    async function Simpan(data: any) {
        let JSON_Data = JSON.stringify(data)

        try { // jika dari component fetchnya tidak perlu pakai Induk URL
            const res = await fetch('/App/Admin/api/Kepegawaian/CRUDPegawai', {
                method: "POST",
                body: JSON_Data,
            })
        } catch (error) {
            console.log("ERROR", error)
        }

    }

    return (

        <>
            <ButtonOnClick style='contained' onClick={() => Simpan(data)}>
                Simpan Pegawai
            </ButtonOnClick>

        </>

    )
}