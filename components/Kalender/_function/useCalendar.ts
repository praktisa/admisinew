// 'use client'



import React, { useMemo, useState } from 'react'

export default function useCalendar(dateData: Date) {

  const [CurrentDate, setTanggal] = useState<Date>(dateData)
  const [ChosenDate, setChosenDate] = useState<string[]>([])




  const DateArrayContructor = (bulan: any, tahun: any) => {
    let ArrayTanggal = []
    let index = 1
    let TesTanggal = new Date(tahun, bulan, index).getDay()

    if (TesTanggal != 0) {
      index = index - TesTanggal
    }
    for (var i = 0; i < 42; i++) {
      let CreateTanggal = new Date(tahun, bulan, index).toString()
      ArrayTanggal.push(CreateTanggal)
      index++
    }
    console.log("BUAT KALENDER", bulan, tahun)

    return ArrayTanggal
  }

  const CreateCalendar = useMemo(() => {

    let Calendar = DateArrayContructor(CurrentDate.getMonth(), CurrentDate.getFullYear())

    return Calendar

  }, [CurrentDate])


  function ChangeMonth(jml: any) {
    let NewDate = new Date(CurrentDate.setMonth(CurrentDate.getMonth() + jml))
    setTanggal(NewDate)
  }

  function HeadCalendar() {
    const NamaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]


    let Judulkalender = NamaBulan[CurrentDate.getMonth()] + " " + CurrentDate.getFullYear()

    return Judulkalender
  }


  function ChoseDate(e: Event, id: string) {
    const { target } = e

    setChosenDate((target as HTMLInputElement).checked === true
      ? [...ChosenDate, id]
      : ChosenDate.filter(e => e !== id))

  }



  return {
    // value
    CurrentDate,
    ChosenDate,
    HeadCalendar,
    CreateCalendar,

    // function 
    ChangeMonth,
    ChoseDate,

  }
}
