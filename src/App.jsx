import 'bootstrap/dist/css/bootstrap.min.css';
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import Skills from "./components/Skills";
import AdicionalInfo from "./components/AdicionalInfo";
import Summary from "./components/Summary";
import Preview from './components/Preview';
import { DataFormat } from './dataFormat';

function App() {

  return (
    <>
    <DataFormat>
      <main>
        <section className="side01">
          <GeneralInfo/>
          <Summary/>
          <Skills/>
          <Education/>
          <Experience/>
          <AdicionalInfo/>
        </section>
        <section className="side02">
          <Preview/>
        </section>
      </main>
      </DataFormat>
    </>
  )
}

export default App
