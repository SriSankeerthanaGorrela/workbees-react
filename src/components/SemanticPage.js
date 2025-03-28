import React from "react";
import "./style.css";
const Semantic=()=>{
    return(
        <>
<header>
   <h1>Semantic Website</h1>
   <nav>
    <ul>
       <li><a href="home">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">service</a></li>
       <li><a href="#">contact</a></li>
    </ul>
   </nav>
</header>
        <section id="home" className="hero">
        <h2>Your Success, Our Commitment</h2>
        <p>We build modern and scalable web applications.</p>
      </section>

    
      <div className="container">
        <main>
          <article>
            <h2>About Our Company</h2>
            <p>We provide cutting-edge solutions for web and mobile development.</p>
          </article>
          <article>
            <h2>Our Services</h2>
            <p>We offer software development, cloud solutions, and more.</p>
          </article>
        </main>

        {/* 🔹 Sidebar */}
        <aside>
          <h3>Latest News</h3>
          <ul>
            <li><a href="#">New product launch</a></li>
            <li><a href="#">Upcoming webinar</a></li>
            <li><a href="#">Tech insights</a></li>
          </ul>
        </aside>
      </div>

      {/* 🔹 Footer */}
      <footer>
        <p>© 2025 Our Company. All rights reserved.</p>
      </footer>

      </>
    );
};
export default Semantic;