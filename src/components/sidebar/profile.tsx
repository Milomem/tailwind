import { LogOut } from "lucide-react";
import { Button } from '@/components/Button'

export function Profile() {
    return (
        <div className=" flex items-center gap-3">
            <img src="https://github.com/milomem.png" className=" h-10 w-10 rounded-full" alt=""/>

            <div className=" flex truncate flex-col">
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Fellipe Nogueira </span>
                <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">fellipemilomem@hotmail.com</span>
            </div>
            <Button type="button" variant="ghost">
                <LogOut className=" h-5 w-5 text-zinc-500"/>
            </Button>
        </div>
    )
}