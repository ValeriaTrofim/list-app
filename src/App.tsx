import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Filter from "./components/Filter";

const App = () => {
  const [selected, setSelected] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "example1",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 2,
      description: "example2",
      amount: 15,
      category: "Utilities",
    },
  ]);

  const visibleExpenses = selected
    ? expenses.filter((e) => e.category === selected)
    : expenses;

  return (
    <div>
      <Form
        onSubmit={(expense) =>
          setExpenses([
            ...expenses,
            {
              ...expense,
              id: expenses.length + 2,
              description: expense.description,
              amount: expense.amount,
              category: expense.categories,
            },
          ])
        }
      />
      <Filter onSelect={(category) => setSelected(category)} />
      <Table
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
