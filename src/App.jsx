

import Header from "./components/Header"
import Button from "./components/Button"
import ButtonSvg from "./assets/svg/ButtonSvg";
import ButtonGradient from './assets/svg/ButtonGradient'
import Hero from './components/Hero'
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      </div>
      
    <ButtonGradient></ButtonGradient>
    </>
  );
};

export default App;
