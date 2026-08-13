import React, { useEffect, useState } from "react";
import { FaArrowRight, FaBolt, FaLeaf, FaMountain, FaFlask, FaInstagram, FaChevronDown } from "react-icons/fa";
import "../App.css";

import canImage from "../images/mockup-1-can.png";
import heroImage from "../images/bg-hero2.jpg";
import storyImage from "../images/Shilajit_Benefits.jpg";
import lifestyleImage from "../images/banner-1.png";
import logo from "../images/logo.svg";

const features = [
  { icon: FaBolt, number: "01", title: "Clean Energy", text: "A sharp, steady lift designed for the moments that demand more." },
  { icon: FaMountain, number: "02", title: "Himalayan Origin", text: "Inspired by one of nature's most intriguing mountain-sourced ingredients." },
  { icon: FaLeaf, number: "03", title: "Plant Powered", text: "A modern formula built around a naturally sourced hero ingredient." },
  { icon: FaFlask, number: "04", title: "Made To Move", text: "A compact 250 ml format that fits training, work and everything between." }
];

const ingredients = [
  ["01", "Purified Shilajit", "The signature mineral-rich ingredient at the heart of the formula."],
  ["02", "Electrolytes", "A refreshing addition for active days and long sessions."],
  ["03", "Modern Energy Blend", "Built for a smoother, more intentional energy experience."]
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 80, disable: "mobile" });
    }
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="brand-site">
      <header className="brand-nav">
        <div className="brand-container nav-inner">
          <a className="brand-logo" href="#top" onClick={closeMenu} aria-label="Shilajit Energy home">
            <img src={logo} alt="Shilajit Energy" />
          </a>

          <button className={`nav-toggle ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            <span /> <span /> <span />
          </button>

          <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#why" onClick={closeMenu}>Why us</a>
            <a href="#story" onClick={closeMenu}>Our story</a>
            <a href="#formula" onClick={closeMenu}>Formula</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#shop" onClick={closeMenu}>Get energized <FaArrowRight /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-noise" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-bg-image" style={{ backgroundImage: `url(${heroImage})` }} />

          <div className="brand-container hero-grid">
            <div className="hero-copy" data-aos="fade-up">
              <p className="eyebrow"><span /> Himalayan energy. Reimagined.</p>
              <h1>POWER<br /><em>YOUR</em><br />POTENTIAL.</h1>
              <p className="hero-lead">A bold energy drink inspired by the mountains, made for people who refuse to slow down.</p>
              <div className="hero-actions">
                <a className="primary-btn" href="#shop">Explore the drink <FaArrowRight /></a>
                <a className="text-link" href="#story">Discover our story <FaChevronDown /></a>
              </div>
            </div>

            <div className="hero-product" data-aos="zoom-in" data-aos-delay="180">
              <div className="product-orbit orbit-one" />
              <div className="product-orbit orbit-two" />
              <div className="product-shadow" />
              <img src={canImage} alt="Shilajit Energy drink can" />
              <div className="product-badge"><strong>250</strong><span>ML</span></div>
            </div>
          </div>

          <div className="hero-bottom brand-container">
            <span>Built for momentum</span>
            <span className="scroll-line" />
            <span>Scroll to explore</span>
          </div>
        </section>

        <section className="ticker" aria-label="Brand highlights">
          <div className="ticker-track">
            <span>SHILAJIT ENERGY</span><i>✦</i><span>FEEL THE DIFFERENCE</span><i>✦</i><span>MADE TO MOVE</span><i>✦</i><span>SHILAJIT ENERGY</span><i>✦</i><span>FEEL THE DIFFERENCE</span><i>✦</i><span>MADE TO MOVE</span><i>✦</i>
          </div>
        </section>

        <section id="why" className="section light-section why-section">
          <div className="brand-container">
            <div className="section-intro" data-aos="fade-up">
              <p className="eyebrow dark"><span /> The new energy ritual</p>
              <h2>MORE THAN<br /><em>JUST ENERGY.</em></h2>
              <p>We took a familiar category and stripped away the noise. The result is a confident, modern drink built around a distinctive Himalayan ingredient.</p>
            </div>

            <div className="feature-grid">
              {features.map(({ icon: Icon, number, title, text }, index) => (
                <article className="feature-card" key={title} data-aos="fade-up" data-aos-delay={index * 90}>
                  <div className="feature-top"><span>{number}</span><Icon /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="card-arrow"><FaArrowRight /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="section story-section">
          <div className="brand-container story-grid">
            <div className="story-media" data-aos="fade-right">
              <div className="media-frame"><img src={storyImage} alt="Himalayan shilajit inspired ingredients" /></div>
              <div className="media-note"><span>FROM THE HIMALAYAS</span><strong>Nature → Formula → Energy</strong></div>
            </div>
            <div className="story-copy" data-aos="fade-left">
              <p className="eyebrow"><span /> Where it begins</p>
              <h2>ROOTED IN<br /><em>THE MOUNTAINS.</em></h2>
              <p>For centuries, shilajit has been associated with the rugged highlands of the Himalayas. We took inspiration from that heritage and translated it into a contemporary energy experience.</p>
              <p>Every detail is intentional—from the ingredient story to the unapologetically bold can. No clutter. No gimmicks. Just a brand with a point of view.</p>
              <a className="outline-btn" href="#formula">See the formula <FaArrowRight /></a>
            </div>
          </div>
        </section>

        <section id="formula" className="section formula-section">
          <div className="brand-container">
            <div className="formula-head" data-aos="fade-up">
              <div><p className="eyebrow"><span /> Inside the can</p><h2>A FORMULA<br /><em>WITH PURPOSE.</em></h2></div>
              <p>Thoughtful ingredients. A crisp format. An energy ritual designed around how you actually live.</p>
            </div>
            <div className="formula-layout">
              <div className="ingredient-list">
                {ingredients.map(([num, title, text], index) => (
                  <div className="ingredient-row" key={num} data-aos="fade-up" data-aos-delay={index * 100}>
                    <span className="ingredient-num">{num}</span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                    <FaArrowRight />
                  </div>
                ))}
              </div>
              <div className="formula-can" data-aos="zoom-in" data-aos-delay="180"><div className="can-halo" /><img src={canImage} alt="Shilajit Energy can" /></div>
            </div>
          </div>
        </section>

        <section className="image-break">
          <div className="image-break-bg" style={{ backgroundImage: `url(${lifestyleImage})` }} />
          <div className="image-break-overlay" />
          <div className="brand-container image-break-content" data-aos="fade-up">
            <p className="eyebrow"><span /> Don't wait for the perfect moment</p>
            <h2>MAKE<br /><em>MOMENTUM.</em></h2>
            <a className="primary-btn" href="#shop">Find your energy <FaArrowRight /></a>
          </div>
        </section>

        <section id="shop" className="section shop-section">
          <div className="brand-container shop-card" data-aos="fade-up">
            <div><p className="eyebrow dark"><span /> Your next move</p><h2>READY TO<br /><em>MOVE DIFFERENT?</em></h2><p>Start with one can. Build the ritual. Keep the momentum.</p></div>
            <a className="primary-btn dark-btn" href="#contact">Get Shilajit Energy <FaArrowRight /></a>
          </div>
        </section>
      </main>

      <footer id="contact" className="brand-footer">
        <div className="brand-container footer-top">
          <div><img className="footer-logo" src={logo} alt="Shilajit Energy" /><p>Mountain-inspired energy for modern momentum.</p></div>
          <div className="footer-links"><a href="#why">Why us</a><a href="#story">Our story</a><a href="#formula">Formula</a><a href="mailto:hello@shilajitenergy.com">Email us</a></div>
          <a className="social-link" href="#contact" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <div className="brand-container footer-bottom"><span>© {new Date().getFullYear()} Shilajit Energy. All rights reserved.</span><span>Made for movement.</span></div>
      </footer>
    </div>
  );
}

export default Home;
