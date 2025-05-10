import { Button } from "@/components/ui/button"

export default function SideBarMini() {
    return (
        <ul className="space-y-2 flex flex-row justify-start align-top">
            <Button variant="ghost" className="text-left"><a href="/">Home</a></Button>
            <Button variant="ghost" className="text-left"><a href="/about">About</a></Button>
            <Button variant="ghost" className="text-left"><a href="/projects">Projects</a></Button>
        </ul>
    );
}