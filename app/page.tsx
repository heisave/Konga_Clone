import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import Carousel2 from "@/components/corousel2";
import Services from "@/components/services"
export default function Home() {
  return (
    <div className="bg-white">
   <div className="ng-white">
     <Navbar />
     <Carousel />
      <Carousel2 />
      <Services/>
   </div> 
   </div>
  );
}
