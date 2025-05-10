import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SideBar() {
    return (
        <div className="flex flex-col w-50 p-4 space-y-10 max-w-max">
            <Avatar className="w-32 h-32 shadow-lg">
                <AvatarImage src="https://avatars.githubusercontent.com/u/68355241?v=4" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <ul className="space-y-2 flex flex-col justify-start align-top">
                <Button variant="ghost" className="w-full text-left cursor-pointer"><a href="/">Home</a></Button>
                <Button variant="ghost" className="w-full text-left cursor-pointer"><a href="/about">About</a></Button>
                <Button variant="ghost" className="w-full text-left cursor-pointer"><a href="/projects">Projects</a></Button>
            </ul>
        </div>
    );
}