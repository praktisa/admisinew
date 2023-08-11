'use client'
import CustomLink from '@/components/CTA/CustomLink/CustomLink'
import React, { Fragment } from 'react'
import { usePathname } from 'next/navigation'

export default function C_NavContainer() {

  let Menu: any = [
    {
      href: "Dashboard",
      display: "Dashboard"
    },
    {
      href: "Kepegawaian",
      display: "Kepegawaian"
    },
    {
      href: "KendaraanDinas",
      display: "Kendaraan Dinas"
    },
    {
      href: "BMN",
      display: "Barang Milik Negara"
    },
    {
      href: "Keuangan",
      display: "Keuangan"
    },
    {
      href: "Kepatuhan",
      display: "Kepatuhan"
    },
  ]


  return (
    <>
      {
        Menu.map((men: any, i: number) => {

          return (
            <Fragment key={i}>
              <CustomLink
                href={`/App/${men.href}`}
                style='navigation'
                activePath={usePathname()}
              >
                {men.display}
              </CustomLink>
            </Fragment>
          )
        })
      }

    </>
  )
}
