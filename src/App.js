import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>

      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value="2,500.53" size="small" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="Something" value="$10,00" isExpense={true} />
      <EntryLine description="Something else" value="$12,00" isExpense={false} />
      <EntryLine description="Something hai" value="$8,00" isExpense={true} />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
    </Container >
  );
}

export default App;
