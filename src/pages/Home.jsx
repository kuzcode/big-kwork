import React from 'react';
import './Home.css';
import { linearGradient } from 'framer-motion/client';
import server from '../assets/server.png'

function Home() {
  const tarifs = [
    {
      title: 'CPU Platinum Processor',
      filled: '1 Core',
      right: '256GB',
      bg: {
        start: '#ff7e5f',
        end: '#feb47b'
      }
    },
    {
      title: 'RAM DDR4 MEMORY',
      filled: '8 GB',
      right: '4048 GB',
      bg: {
        start: '#6a11cb',
        end: '#2575fc'
      }
    },
    {
      title: 'NVMe SSD',
      filled: '256 GB',
      right: '1 GB',
      bg: {
        start: '#11998e',
        end: '#38ef7d'
      }
    },
    {
      title: 'GPU AI + GAME',
      filled: '1 GB',
      right: '256 GB',
      bg: {
        start: '#f7971e',
        end: '#ffd200'
      }
    },
    {
      title: 'VPS / VDS',
      filled: '1 GB',
      right: '256 GB',
      bg: {
        start: '#56ab2f',
        end: '#a8e063'
      }
    },
    {
      title: 'Price / DAY',
      filled: '18.28 USDT',
      right: '',
      bg: {
        start: '#ff4e50',
        end: '#f9d423'
      }
    }
  ];

  function linearGradient(color) {
    return `linear-gradient(to right, ${color.start}, ${color.end})`;
  }

  return (
    <div className="home-container">
      <div className="menu">
        <p>Server</p>
        <p>Domain</p>
        <p>Cloud</p>
        <p>Ai +</p>
        <p>Wallet</p>
        <button>GET FREE 1 DAY</button>
      </div>
      <div className="main-content">

        <h1>Big <span>Perfect</span><br />Data & Domain.</h1>
        <section className="domain-section">
          <div className="domain-list">
            <div>
              <div>.com</div>
              <div>$13.5/Yearly</div>
            </div>
            <div>
              <div>.net</div>
              <div>$13.5/Yearly</div>
            </div>
            <div>
              <div>.biz</div>
              <div>$13.5/Yearly</div>
            </div>
            <div>
              <div>.co</div>
              <div>$13.5/Yearly</div>
            </div>
          </div>
        </section>
      </div>
      <h1 className='right'><span>Server</span></h1>

      <div className="panel">
        {tarifs.map(t =>
          <li>
            <p>{t.title}</p>
            <div className="block">
              <div className="filled" style={{
                background: linearGradient(t.bg)
              }}>
                <p>{t.filled}</p>
              </div>
              <p>{t.right}</p>
            </div>
          </li>
        )}
      </div>

      <div className="container gradient-bg">
        <h2 className="title">
          QUICK SETUP <span className="highlight">VPS / VDS</span>
        </h2>
        <h1 className="main-title">
          <strong>Friendly</strong> Control Panel
        </h1>
        <div className="panel-row">
          <div className="icon-card">
            <div className="icon-placeholder">
              <img src="https://img.icons8.com/ios/50/000000/chat.png" alt="Free Chat" />
            </div>
            <div className="icon-title">FREE CHAT</div>
            <div className="icon-subtitle">ONE-CLICK DEPLOY</div>
            <div className="icon-desc">Your Ultimate Tool To Conquer Overwhelming Tasks — Break Big Goals Into Small Steps, Check Them Off One By One, And Watch Your Progress Reach 100%</div>
          </div>
          <div className="server-image">
            <img src={server} alt="Server Image" />
          </div>
          <div className="icon-card">
            <div className="icon-placeholder">
              <img src="https://img.icons8.com/ios/50/000000/database.png" alt="Real Time Database" />
            </div>
            <div className="icon-title">Real Time Database</div>
            <div className="icon-subtitle">We Build The Future</div>
            <div className="icon-desc">Neural Core 4048 GB CPU AI W — Extreme AI Power<br/>Multi Super App — Social, Marketplace, AI & Fintech<br/>Data Center — 1 PB NVMe Ultra-Fast Storage<br/>19-100 GB/s</div>
          </div>
        </div>
        <div className="card-container dots-bg">
          <div className="status-summary">
            <div className="status-text">
              <h2>CONNECT SOCKET BIG DATA</h2>
              <div className="numbers">
                <span>11 278 620</span>
              </div>
              <div className="status-indicator">ONLINE</div>
            </div>
          </div>
          <div className="status-details">
            <div className="detail-item">
              <div className="icon">
                <div className="icon-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                </div>
              </div>
              <div className="text">
                <p>24/7/365 Online</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="icon">
                <div className="icon-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2" /></svg>
                </div>
              </div>
              <div className="text">
                <p>Secure Your Files With <b>Automatic Backups</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CHARACTERISTIC SECTION --- */}
      <section className="characteristic-section">
        <div className="characteristic-header-row">
          <div className="characteristic-header-left">
            <span className="characteristic-subtitle">REALIBLE & QUICK SETUP</span>
            <h2 className="characteristic-title">CHARACTERISTIC</h2>
          </div>
          <div className="characteristic-header-right">
            <span className="characteristic-rating">5.0</span>
            <img src="src\assets\js.png" alt="js" className="characteristic-js-icon" />
          </div>
        </div>
        <div className="characteristic-gallery">
          <img src="https://avatars.mds.yandex.net/get-altay/9707320/2a0000018b1a239570a5bea1a63d1b89bae7/XXXL" alt="char1" />
          <img src="https://avatars.mds.yandex.net/i?id=8afa1ff2bc541d62440e8c95e86c2bdb_l-8231149-images-thumbs&n=13" alt="char2" />
          <img src="src\assets\img1.png" alt="char3" />
        </div>
        <div className="characteristic-gallery characteristic-gallery-bottom">
          <img src="src\assets\img2.png" alt="char5" />
          <img src="src\assets\img3.png" alt="char6" />
          <img src="src\assets\img4.png" alt="char7" />
        </div>
        <div className="characteristic-cluster-row">
          <span className="characteristic-cluster">CLUSTER</span>
          <span className="characteristic-highspeed">HIGH SPEED</span>
          <span className="characteristic-uptime">24/7/365</span>
        </div>
        <ul className="characteristic-list">
          <li><span className="char-dot cpu"></span> CPU Power 128-Core Gold / <b>Platinum</b> Processors</li>
          <li><span className="char-dot ram"></span> 512 GB DDR4 ECC Registered RAM</li>
          <li><span className="char-dot ssd"></span> 1.04/1.28 TB NVMe SSD</li>
        </ul>
      </section>

      {/* --- SIGN UP BANNER --- */}
      <section className="signup-banner-section">
        <div className="signup-banner">
          <div className="signup-banner-left">
            <span className="signup-banner-title">Sign Up For <span className="yellow">Big Data</span> Today</span>
          </div>
          <div className="signup-banner-right">
            <div className="signup-banner-price">Start GB<br/><span className="signup-banner-price-value">$ 0.99/<b>Day</b></span></div>
            <button className="signup-banner-btn">CONFIGURATION</button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <div className="footer-title">BIG DATA</div>
            <div className="footer-desc">National Reserve System Of Resource Funding<br/>All Rights Reserved</div>
          </div>
          <div className="footer-col">
            <div className="footer-title">DATA CENTER</div>
            <div className="footer-link">Web Hosting</div>
            <div className="footer-link">Cloud Hosting</div>
            <div className="footer-link">Dedicated Server</div>
            <div className="footer-link">VPS Hosting</div>
          </div>
          <div className="footer-col">
            <div className="footer-title">Domain Search</div>
            <div className="footer-link">New Domains</div>
            <div className="footer-link">Search Domains</div>
            <div className="footer-link">Club & .io Only</div>
          </div>
          <div className="footer-col">
            <div className="footer-title">Hello</div>
            <div className="footer-link">Customer</div>
            <div className="footer-link">Support Portal</div>
            <div className="footer-link">Usage Tutorials</div>
            <div className="footer-link">Live Chat</div>
          </div>
        </div>
        <div className="footer-bottom-row">
          <span className="footer-bottom-link">BIG DATA</span>
          <span className="footer-bottom-link">WALLET</span>
          <span className="footer-bottom-link">LICENSE</span>
        </div>
      </footer>
    </div>
  );
}

export default Home; 