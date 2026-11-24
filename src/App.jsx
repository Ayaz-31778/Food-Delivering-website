import React from 'react';

function App() {
  const foods = [
    { id: 1, name: 'Pizza', price: 199, emoji: '🍕' },
    { id: 2, name: 'Burger', price: 99, emoji: '🍔' },
    { id: 3, name: 'Biryani', price: 180, emoji: '🍛' }
  ];

  return (
    <div>
      <header>
        <h1>🍴 Foodie</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="home" id="home">
        <h2>Welcome to Foodie</h2>
        <p>Delicious food delivered to your doorstep!</p>
        <a className="button" href="#menu">Order Now</a>
      </section>

      <section className="menu" id="menu">
        <h2>Our Food Menu</h2>
        <div className="food-list">
          {foods.map((food) => (
            <div className="food-card" key={food.id}>
              <div className="food-emoji">{food.emoji}</div>
              <h3>{food.name}</h3>
              <p>Price: ₹{food.price}</p>
              <button type="button">Order</button>
            </div>
          ))}
        </div>
      </section>

      <footer id="about">
        <p>© 2026 Foodie. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
