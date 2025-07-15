import './styles/global.css';
import './styles/theme.css';
import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';


export function App() {
  return (
    <>
      <Heading>
        GenesTomato 
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <div>
        <p>00:00:00</p>
      </div>
    </>
  );
}
