
import { checkUser } from "@/lib/checkUser"

export default function NarBar()  {
    const user = checkUser();
    return <div>NarBar</div>
}