<template>
    <div id="container">
      <span id="text1">{{ fonts[state].text }}</span>
      <span id="text2">{{ fonts[(state + 1) % fonts.length].text }}</span>

<!-- The SVG filter used to create the merging effect -->
<svg id="filters">
	<defs>
		<filter id="threshold">
			<!-- Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. -->
			<feColorMatrix in="SourceGraphic"
					type="matrix"
					values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140" />
		</filter>
	</defs>
</svg>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fonts: [
          { text: "Coming Soon...", font: "" },
          { text: "बने रहें...", font: "" },
          { text: "...دیکھتے رہنا", font: "" },
          { text: "காத்திருங்கள்...", font: "" },
          { text: "చూస్తూనే ఉండండి...", font: "" },
          { text: "ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ...", font: "" },
          { text: "ഉടൻ വരുന്നു...", font: "" }
        ],
        state: 0
      };
    },
    mounted() {
      const elts = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2")
      };
  
      const texts = this.fonts.map((font) => font.text);
  
      const morphTime = 1;
      const cooldownTime = 0.25;
      let textIndex = texts.length - 1;
      let time = new Date();
      let morph = 0;
      let cooldown = cooldownTime;
  
      function doMorph() {
        morph -= cooldown;
        cooldown = 0;
  
        let fraction = morph / morphTime;
  
        if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
        }
  
        setMorph(fraction);
      }
  
      function setMorph(fraction) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
      }
  
      function doCooldown() {
        morph = 0;
  
        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";
  
        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
      }
  
      function animate() {
        requestAnimationFrame(animate);
  
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;
        cooldown -= dt;
  
        if (cooldown <= 0) {
          if (shouldIncrementIndex) {
            textIndex++;
          }
  
          doMorph();
        } else {
          doCooldown();
        }
      }
  
      animate();
    }
  };
  </script>
  
  <style>
    /* Explanation in JS tab */

/* Cool font from Google Fonts! */
@import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');

body {
	margin: 0px;
}

#container {
	/* Center the text in the viewport. */
	position: absolute;
	margin: auto;
	width: 100vw;
	height: 80pt;
	top: 0;
	bottom: 0;
	
	/* This filter is a lot of the magic, try commenting it out to see how the morphing works! */
	filter: url(#threshold) blur(0.6px);
}

/* Your average text styling */
#text1, #text2 {
	position: absolute;
	width: 100%;
	display: inline-block;
	
	font-family: Canopee,sans-serif;
	font-size: 80pt;
	
	text-align: center;
	
	user-select: none;
}
  </style>
  