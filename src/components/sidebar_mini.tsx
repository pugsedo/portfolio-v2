import { Button } from "@/components/ui/button"

export default function SideBarMini() {
    return (
        <ul className="space-y-2 flex flex-row justify-start align-top">
            <Button variant="ghost" className="text-left"><a href="/portfolio-v2/">Home</a></Button>
            <Button variant="ghost" className="text-left"><a href="/portfolio-v2/about">About</a></Button>
            <Button variant="ghost" className="text-left"><a href="/portfolio-v2/projects">Projects</a></Button>
        </ul>
    );
}