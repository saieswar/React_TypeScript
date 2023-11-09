import { useState } from "react";
import produce from "immer";
import { ExpenseList } from "./components/expense-tracker/components/ExpenseList";
import { ExpenseFilter } from "./components/expense-tracker/components/ExpenseFilter";
import { ExpenseForm } from "./components/expense-tracker/components/ExpenseForm";
import categories from "./components/expense-tracker/categories";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 40, category: "utilities" },
    { id: 3, description: "ccc", amount: 30, category: "utilities" },
    { id: 4, description: "ddd", amount: 50, category: "utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibilityExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  if (visibilityExpenses.length === 0) return null;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibilityExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </>
  );
}

export default App;
