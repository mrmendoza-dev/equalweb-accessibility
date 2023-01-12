import "./App.css";
import AccessibilityScript from './AccessibilityScript '

function App() {

  AccessibilityScript();

  return (
    <div className="App">
      <header>
        <h1>EqualWeb Accessibility Test</h1>
      </header>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://github.com/mrmendoza171/equalweb-accessibility">
              About
            </a>
          </li>
          <li>
            <a href="https://github.com/mrmendoza171/equalweb-accessibility">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <p className="summary-headline">
          Module for Testing EqualWeb's Accessibility Solutions
        </p>

        <p className="summary-paragraph">
          The importance of accessibility in web design cannot be overstated.
          With the increasing use of the internet as a primary means of
          communication and access to information, it is crucial that websites
          are accessible to all users, regardless of their abilities. The
          implementation of accessibility solutions, such as those provided by
          EqualWeb, ensures that users with disabilities can easily navigate and
          access the content on a website.
        </p>
        <p className="summary-paragraph">
          EqualWeb's accessibility solutions cover a wide range of accessibility
          needs, including those related to visual, auditory, and cognitive
          impairments. The solutions include features such as text-to-speech,
          keyboard navigation, and high-contrast mode, among others. These
          features not only make the website more accessible to users with
          disabilities, but they also improve the overall user experience for
          all users.
        </p>
        <p className="summary-paragraph">
          One of the benefits of using EqualWeb's accessibility solutions is
          that they are easy to integrate into existing websites. The solutions
          can be implemented through a simple code snippet, which can be added
          to any website with minimal effort. Additionally, EqualWeb offers a
          comprehensive testing tool that allows developers to test the
          accessibility of their website and identify any potential issues. This
          makes it easy for developers to ensure that their website is fully
          accessible to all users.
        </p>
      </main>

      <footer>
        <p>Copyright ©2022</p>
      </footer>
    </div>
  );


}

export default App;
