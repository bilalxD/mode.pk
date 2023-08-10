import Banners from "./components/Banners";
import Dealoftheweek from "./components/Dealoftheweek";
import Herosection from "./components/Herosection";
import Womenbanner from "./components/Womenbanner";
import Manbanner from "./components/Manbanner";


export default function Home() {
  return (
    <>
    <Herosection />
    <Banners />
    <Womenbanner />
    <Dealoftheweek />
    <Manbanner />
    </>
  )
}
