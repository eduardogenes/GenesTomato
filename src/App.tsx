import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

import './styles/global.css';
import './styles/theme.css';
import { PlayIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              labelText='task'
              type='text'
              placeholder='Digite a tarefa'
              disabled
            />
          </div>

          <div className='formRow'>
            <p>Nesse ciclo foque por 25 minutos</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <button type='submit' className='buttonForm'>
              <PlayIcon />
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}
