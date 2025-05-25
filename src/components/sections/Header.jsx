import React from "react"

import App from "../../App"
const Header = () => {
    return (
    <header className="header">
        <section>
            {/* banner texts*/}
            <div className="banner">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <navigate to="/booking"><button aria-label='On Click'>Reserve Table</button></navigate>
            </div>

{/*banner image*/}
<div className="banner-img">
<img src="src\images\restauranfood.jpg" alt="restaurant food" />
</div>
        </section>
    </header>
    )
}
export default Header;