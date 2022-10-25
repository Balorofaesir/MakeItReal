import "./style.css"

const SinglePriceGrid = () => (
  <main id="cardInfo">
    <section className="gridOne">
      <h1>join our community</h1>
      <h3>30-day, hassle-free money back gurantee</h3>
      <p>
        gain access to our full library of tutorials along with expert code
        reviews. perfect for any developers who are serious about honning their
        skills.
      </p>
    </section>
    <section className="gridTwo">
      <h3 className="subs">monthly subscription</h3>
      <div className="price">
        <p>
          <span className="priceStyle">$29</span> per month
        </p>
      </div>
      <p className="infoPrice">full access for less than $1 a day</p>
      <button className="singUp">sing up</button>
    </section>
    <section className="gridThree">
      <h3>why us</h3>
      <ul>
        <li>tutorials by industry experts</li>
        <li>peer & expert code review</li>
        <li>coding exercises</li>
        <li>access to our GitHub repos</li>
        <li>community forum</li>
        <li>flashcard decks</li>
        <li>new videos every week</li>
      </ul>
    </section>
  </main>
)
export default SinglePriceGrid