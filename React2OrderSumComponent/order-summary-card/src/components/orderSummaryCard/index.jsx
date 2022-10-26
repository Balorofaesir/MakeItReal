import './OrderSummaryCard.css'
import icon from './assets/icon-music.svg'
import hero from "./assets/illustration-hero.svg"

function OrderSummaryCard ()  {
    return(
        <main>
            <img src={hero} alt="hero" className="hero" />
            <section className='container'>
                <h2 className='title'>Order Summary</h2>
                <p className='info'>You can now listen to millions of songs, audiobooks, and podcasts on any
                    device anywhere you like!</p>
                <div className='plan'>
                    <img className = "icon" src={icon} alt="icon"/>
                    <p className = "conText"><span className='span1'>Annual Plan</span><br/>$59.99/year</p>
                    <p className = "HyperText" href='#'>Change</p>
                </div>
                <button className='payment'>Proceed to Payment</button>
                <button className='cancel'>Cancel Order</button>
            </section>  
        </main>
    );
};

export default OrderSummaryCard;