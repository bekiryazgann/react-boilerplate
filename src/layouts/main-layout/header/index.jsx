import {Button} from "@/components/ui/button.jsx";
import {Award01, InfoCircle, Keyboard01, Settings01} from "@untitled-ui/icons-react";

export default function Header(){
    return (
        <div className="h-10">
            <Button variant="ghost" size="icon" className="hover:bg-gray-900 hover:text-gray-400 text-gray-400">
                <Keyboard01 />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-900 hover:text-gray-400 text-gray-400">
                <Award01 />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-900 hover:text-gray-400 text-gray-400">
                <InfoCircle />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-900 hover:text-gray-400 text-gray-400">
                <Settings01 />
            </Button>
        </div>
    )
}