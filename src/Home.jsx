import Home_Hero from "./Home/Home_Hero";
import Home_Work from "./Home/Home_Work";
import Home_Visual from "./Home/Home_Visual";
import Home_Contact from "./Home/Home_Contact.jsx";

export default function Home(params) {
  return (
    <>
      <Home_Hero></Home_Hero>
      <Home_Work></Home_Work>
      <Home_Visual></Home_Visual>
      <Home_Contact></Home_Contact>
    </>
  );
}
