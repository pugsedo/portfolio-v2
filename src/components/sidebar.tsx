import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SideBar() {
    return (
        <div className="flex flex-col w-50 p-4 space-y-10 max-w-max">
            <Avatar className="w-32 h-32 shadow-lg">
                <AvatarImage src="https://avatars.githubusercontent.com/u/68355241?v=4" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <ul className="space-y-2 flex flex-col justify-start align-top">
                <a href="/portfolio-v2/"><Button variant="ghost" className="w-full text-left cursor-pointer">Home</Button></a>
                <a href="/portfolio-v2/about"><Button variant="ghost" className="w-full text-left cursor-pointer">About</Button></a>
                <a href="/portfolio-v2/projects"><Button variant="ghost" className="w-full text-left cursor-pointer">Projects</Button></a>

                <ul className="flex flex-row w-full justify-center align-middle pt-5">
                    <a href="https://github.com/pugsedo">
                        <Button variant="ghost" className="text-left cursor-pointer p-2 grow">
                            <FontAwesomeIcon icon={faGithub} size="2x" color="grey" />
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/mikhail-makarov-037997325/">
                        <Button variant="ghost" className="text-left cursor-pointer p-2 grow">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" color="grey" />
                        </Button>
                    </a>
                </ul>
            </ul>
        </div>
    );
}