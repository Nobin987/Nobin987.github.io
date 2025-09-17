import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const mouseFollower = document.getElementById('mouse-follower');
    const heroBackground = document.getElementById('hero-bg');
    
    if (mouseFollower && heroBackground) {
      const handleMouseMove = (e) => {
        const rect = heroBackground.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        mouseFollower.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
      };
      
      heroBackground.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        heroBackground.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-background" id="hero-bg">
        {/* Mouse Follower Effect */}
        <div className="mouse-follower" id="mouse-follower"></div>
        
        {/* Animated Background Gradient */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        
        {/* Programming Symbols */}
        <div className="code-symbol symbol-1">if</div>
        <div className="code-symbol symbol-2">else</div>
        <div className="code-symbol symbol-3">for</div>
        <div className="code-symbol symbol-4">while</div>
        <div className="code-symbol symbol-5">var</div>
        <div className="code-symbol symbol-6">let</div>
        <div className="code-symbol symbol-7">const</div>
        <div className="code-symbol symbol-8">&#123;&#125;</div>
        <div className="code-symbol symbol-9">[]</div>
        <div className="code-symbol symbol-10">()</div>
        <div className="code-symbol symbol-11">=&gt;</div>
        <div className="code-symbol symbol-12">&&</div>
        
        {/* Animated App Icons */}
        <div className="bouncing-app-icon app-1">📱</div>
        <div className="bouncing-app-icon app-2">⚛️</div>
        <div className="bouncing-app-icon app-3">🤖</div>
        <div className="bouncing-app-icon app-4">💻</div>
        <div className="bouncing-app-icon app-5">🎨</div>
        <div className="bouncing-app-icon app-6">⚡</div>
        <div className="bouncing-app-icon app-7">🔧</div>
        <div className="bouncing-app-icon app-8">📊</div>
        
        {/* Live Code Snippets */}
        <div className="live-code-snippet snippet-1">
          <div className="code-line typing">const app = () =&gt; &#123;</div>
          <div className="code-line typing">  return &lt;View /&gt;;</div>
          <div className="code-line typing">&#125;;</div>
        </div>
        <div className="live-code-snippet snippet-2">
          <div className="code-line typing">if (mobile) &#123;</div>
          <div className="code-line typing">  develop();</div>
          <div className="code-line typing">&#125;</div>
        </div>
        <div className="live-code-snippet snippet-3">
          <div className="code-line typing">for (let i = 0; i &lt; apps.length; i++) &#123;</div>
          <div className="code-line typing">  build(apps[i]);</div>
          <div className="code-line typing">&#125;</div>
        </div>
        
        {/* Mobile UI Elements */}
        <div className="mobile-ui-element ui-slider-elem">
          <div className="animated-slider">
            <div className="slider-track"></div>
            <div className="slider-thumb"></div>
          </div>
        </div>
        <div className="mobile-ui-element ui-progress-elem">
          <div className="animated-progress">
            <div className="progress-fill"></div>
          </div>
        </div>
        <div className="mobile-ui-element ui-toggle-elem">
          <div className="animated-toggle">
            <div className="toggle-switch"></div>
          </div>
        </div>
        
        {/* Network Connection Animation */}
        <div className="network-animation network-1">
          <div className="network-node node-1"></div>
          <div className="network-node node-2"></div>
          <div className="network-node node-3"></div>
          <div className="network-connection conn-1"></div>
          <div className="network-connection conn-2"></div>
          <div className="network-pulse pulse-1"></div>
        </div>
        
        {/* Touch Ripple Effects */}
        <div className="ripple-container">
          <div className="ripple ripple-1"></div>
          <div className="ripple ripple-2"></div>
          <div className="ripple ripple-3"></div>
        </div>
        
        {/* Glitch Effects */}
        <div className="glitch-element glitch-1">
          <div className="glitch-text">MOBILE</div>
        </div>
        <div className="glitch-element glitch-2">
          <div className="glitch-text">DEV</div>
        </div>
        
        {/* Enhanced Mobile Mockup */}
        <div className="mobile-mockup">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="screen-glow"></div>
              <div className="screen-content">
                <div className="status-bar">
                  <div className="signal-indicator">
                    <div className="signal-dot"></div>
                    <div className="signal-dot"></div>
                    <div className="signal-dot"></div>
                  </div>
                  <div className="time-display">9:41</div>
                  <div className="battery-indicator">
                    <div className="battery-fill"></div>
                  </div>
                </div>
                <div className="app-showcase">
                  <div className="showcase-icon">📱</div>
                  <div className="showcase-title">Mobile Apps</div>
                  <div className="showcase-subtitle">iOS • React Native • Android</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      <div className="hero-content">
        <h1 className="typewriter">Mobile App Developer</h1>
        <p>Crafting beautiful and intuitive mobile experiences across iOS, React Native & Android with 3+ years of professional expertise at Armia Systems</p>
        <div className="hero-subtitle">
          <span className="platform-emphasis">Specializing</span> in iOS • React Native • Android
        </div>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;