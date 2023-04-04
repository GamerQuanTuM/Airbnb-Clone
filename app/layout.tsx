import { Poppins } from "next/font/google"
import './globals.css'
import Navbar from "../components/navbar/Navbar"
import ClientOnly from "../components/ClientOnly"
import RegisterModal from "../components/modal/RegisterModal"
import ToasterProvider from "@/providers/ToasterProvider"


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const font = Poppins({
  subsets: ["devanagari"],
  weight: "300"
})

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
