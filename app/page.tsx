import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import Quality from "@/components/sections/quality";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <>
<Navbar />
<Hero />
<Quality />
<Services />
<Testimonials />
<FAQ/>
<Footer/>
    </>
  );
}