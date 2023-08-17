'use client';
import React from 'react'
import But from '@/app/feature/Components/Button/Button.module.css'

interface ButtonUpload_inter {
    children: React.ReactNode,
    onChange: any
}

export default function ButtonUpload({ children, onChange }: ButtonUpload_inter) {


    return (
        <>
            <div className={But['layout']} >
                <label htmlFor={"upload"} className={But['display']} >{children}</label>
                <input
                    style={{ display: "none" }}
                    type="file"
                    name="upload"
                    id="upload"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    onChange={
                        (e) => onChange(e)
                    }
                />
            </div>
        </>
    )
}
