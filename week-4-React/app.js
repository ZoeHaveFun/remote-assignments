// import menuIcon from "./style/menu.png"

const Header = () => {
  return (
    <header>
        <h5>Website Tittle/Lego</h5>
        <nav className="expand-row">
            <span>Item1</span>
            <span>Item2</span>
            <span>Item3</span>
            <span>Item4</span>
        </nav>
        <nav className="icon">
            <img src="./style/menu.png" alt="menuIcon" />
        </nav>
    </header>
  )
}
const SideMenu = () => {
  return (
    <div id="sideMenu">
        <img id="closeBtn" src="./style/close.png" alt="" />
        <nav className="expand-col">
            <span>Item 1</span>
            <span>Item 2</span>
            <span>Item 3</span>
            <span>Item 4</span>
        </nav>
    </div>
  )
}
const Section = () => {
  return (
    <section>
        <h1>Welcome Message</h1>
    </section>
  )
}
const Main = () => {
  return (
    <main>
        <header>
            <h2>Section Title</h2>
        </header>
        <section id="main">
            <article>
                <h4>Content Box 1</h4>
            </article>
            <article>
                <h4>Content Box 2</h4>
            </article>
            <article>
                <h4>Content Box 3</h4>
            </article>
            <article>
                <h4>Content Box 4</h4>
            </article>
        </section>
    </main>
  )
}
const Footer = () => {
  return (
    <footer>
        <button>Call to Action</button>
    </footer>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <SideMenu />
      <Section />
      <Main />
      <Footer />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById("app")
)