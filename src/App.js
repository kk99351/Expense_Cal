import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New Washing Machine',
      amount: 294.1,
      date: new Date(2021, 4, 4),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 34.08,
      date: new Date(2020, 6, 8),
    },
    {
      id: 'e4',
      title: 'Car Repair',
      amount: 494.12,
      date: new Date(2020, 3, 29),
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
