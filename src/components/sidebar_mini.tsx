import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SideBarMini() {
    return (
        <div className="flex flex-row">
        <ul className="space-y-2 flex flex-row justify-start align-top">
            <Button variant="ghost" className="text-left"><a href="/">Home</a></Button>
            <Button variant="ghost" className="text-left"><a href="/achievements">Achieve.</a></Button>
            <Button variant="ghost" className="text-left"><a href="/projects">Projects</a></Button>
        </ul>
        <ul className="flex flex-row justify-end align-middle">
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
        </div>
    );
}