import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }


  import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 font-sans text-slate-800">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">Cuyahoga Bubbles</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#shows" className="hover:text-blue-500">The Shows</a>
          <a href="#booking" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">Book Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <span className="uppercase tracking-widest text-blue-500 font-semibold text-sm">Cleveland's Premier Bubble Artist</span>
          <h2 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            Magic You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">See Through</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Bringing giant bubbles, foam parties, and interactive bubble science to birthday parties and events across 
            <strong> Cuyahoga County, Ohio.</strong>
          </p>
          <button className="mt-10 bg-blue-600 text-white text-lg px-8 py-4 rounded-full shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
            Check Availability
          </button>
        </div>
      </header>

      {/* Show Types Grid */}
      <section id="shows" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Performance Packages</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Giant Bubbles", desc: "Hand-crafted wands creating bubbles the size of cars.", icon: "🫧" },
            { title: "Foam Parties", desc: "Eco-friendly, non-toxic foam for summer backyard fun.", icon: "☁️" },
            { title: "Bubble Science", desc: "Interactive educational shows for schools and libraries.", icon: "🧪" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-blue-50">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local Social Proof / Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-white text-xl font-bold mb-2">Service Area</h4>
            <p>Proudly serving Cleveland, Lakewood, Westlake, Beachwood, and the surrounding Cuyahoga County area.</p>
          </div>
          <div className="text-md md:text-right">
            <p>© 2026 Cuyahoga Bubbles • Fully Insured</p>
            <p className="text-blue-400 font-mono mt-2">Northeast Ohio's Favorite Bubble Performer</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
    <main>
      <h1>My to-dos</h1>  
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  
}

export default App;
