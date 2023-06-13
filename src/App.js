


function App() {
  return (
    <div className="">
      <div>
        <nav>
          <div>
            <h1>
              <a href="/">
                <span className="">Tailwind_learning</span>
              </a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>

            <li>
              <a href="/">
                <span>About</span>
              </a>
            </li>

            <li>
              <a href="/">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div>
          <a href="/">Login</a>
          <a href="/">signup</a>
        </div>
        <header>
          <h2 className="font-bold text-6xl">Recipes</h2>
          <h3>for Ninjas</h3>
        </header>
        <div>
          <h4 className="font-bold">latest Recipes</h4>
          <div>
            <div>
              <img src="Images/images.jpg" alt=""/>
                <div>
                  <span>5 Bean chilly stew</span>
                  <span>Recipe by Pranav</span>
                </div>
            </div>
          </div>
          <h4 className="font-bold"> Most popular Recipes</h4>
          <div>

          </div>

          <div>
            <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;


