
import Logo from "../../images/logo";


export default function Header(){
    return (
        <header className="w-full flex items-center bg-primary">
        <Logo/>  

        <ul className="flex">
            <li>Tech Talents</li>
            <li>Employer</li>
            <li>About</li>
            <li>Contact-us</li>
        </ul>
        <button className="border-none px-4 py-3 bg-primary">Apply For A Job</button>
        </header>
    )
}