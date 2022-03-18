const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mans",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          <div className="backgroun-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>SHOP NOW</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;