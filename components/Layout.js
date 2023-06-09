import Nav from "@/components/Nav"
import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session) {
    return <>
      <div className='bg-stone-600 h-screen flex items-center'>
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
    </>
  }
  return (
    <>
      <div className='bg-white h-screen flex overflow-hidden'>
        <Nav/>
        <main className="w-full overflow-y-scroll">
          <div className="flex justify-end items-center gap-2 w-full p-4 bg-stone-300">
            {session?.user?.name}
            <Image className="rounded-full" src={session?.user?.image} width={35} height={35} alt="user picture"/>
          </div>
          <div className="p-4 ">
            {children}
          </div>  
        </main>
      </div>
    </>
  )
}
