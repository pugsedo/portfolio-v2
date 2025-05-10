import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import TerminalText from "./terminal_text";

export default function Profile() {
  return (
    <div className="text-foreground flex items-center justify-center justify-space-between ml-5 pt-12 pb-15 gap-5">
        <div className="block md:hidden">
          <Avatar className="w-28 h-28 shadow-lg">
              <AvatarImage src="https://avatars.githubusercontent.com/u/68355241?v=4" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col items-left justify-center">
            <h1 className="text-4xl font-bold font-mono">Mikhail Makarov</h1>
            <TerminalText/>
        </div>
    </div>
  );
}
