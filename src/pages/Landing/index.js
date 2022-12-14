import Header from "../../components/Header";
import HeroImg from "../../images/hero.jpg";

export default function LandingPage(){
    return (
        <div className="">
            <Header/>
            <main className="flex">
                <div>
                    <h1 className="">This is going to be the Header of the Hero Section</h1>
                </div>
                <img src={HeroImg} alt="Hero section" className="block w-1/2" />
            </main>
            <footer className="bg- bg-cyan-800 h-[2222px]"></footer>
        </div>
    )
}