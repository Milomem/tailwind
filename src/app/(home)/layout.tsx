import { Sidebar } from "@/components/sidebar";

export default function HomeLayout({children} : {children : React.ReactNode}) {
    return (
        <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
            <Sidebar/>
            <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
    )
}