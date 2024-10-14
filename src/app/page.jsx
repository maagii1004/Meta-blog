
import { HomeP }  from "./components/HomePage";
import { HomeB } from "./components/HomeBlog";

export default function Home() {
  return (
    <div>
       <div className="flex justify-center">
        <HomeP/>
       </div>
       <div className="flex justify-center">
        <HomeB/>
       </div>
        
    </div>
   
  );
}
