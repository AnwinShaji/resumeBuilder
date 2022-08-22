import logo from './logo.svg';
import './App.css';
import SampleDesign from './components/SampleDesign';
import CandidateForm from './components/CandidateForm';
import ResumePreview from './components/ResumePreview';

function App() {
  return (
    <div className="App">
      <SampleDesign/>
      <div style={{display:"flex"}}>
      <CandidateForm/>
      <ResumePreview/>
      </div>
    </div>
  );
}

export default App;
