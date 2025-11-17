import ActiveVideos from "../../Components/ActiveVideos/ActiveVideos";
import Clients from "../../Components/Clients/Clients";
import Section from "../../Components/Section/Section";
import Tours from "../../Components/Tours/Tours";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="Home">
      <Helmet>
        <title>
          Travel Uzbekistan – Guided Tours in Samarkand, Bukhara & Tashkent
        </title>
        <meta
          name="description"
          content="Discover Uzbekistan with expert-guided tours. Explore Samarkand’s Registan Square, Bibi Khanum Mosque, Amirsoy Ski Resort and even Tajikistan’s 7 Lakes from Samarkand."
        />
        <meta
          name="keywords"
          content="Travel Uzbekistan, Uzbekistan tours, Samarkand, Bukhara, Tashkent, Registan, Bibi Khanum, Amirsoy, 7 lakes Tajikistan, Iskanderkul, guided walking tours"
        />
      </Helmet>

      <Section />
      {/* <ActiveVideos /> */}
      <Tours />
      <Clients />
    </div>
  );
}

export default Home;
