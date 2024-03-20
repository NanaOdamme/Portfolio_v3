const NavigationBar = {
    template: `
    <header>
    <nav class="navbar navbar-expand-lg shadow fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand px-3" href="#home"><h2>NanA</h2></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar-expand-sm justify-content-end" id="navbarNavAltMarkup">
            
            <div class="navbar-nav px-3 ">
              <a class="nav-link" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#about">About Me</a>
              <a class="nav-link" href="#portfolio">Portfolio</a>
              <a class="nav-link" href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
   `
};
const HeroSection = {
    template: `
    
    <section class="hero " id="home">
    <div class="container-md">
    
        <div class="row">
            
          <div class="col-sm-6 order-2 order-sm-1">   
            <h2 class="hero-h2 fw-bold display-6"> --I am<br> <span>Nana 
                                                     Akosua.</span></h2>         
            <p class="hero-p">  {{ p1 }}</p>
            <p class="hero-text"> {{ p2 }}<br>
                {{ p3 }}<br>
                {{ p4 }}</p>
                     <button class="mx-5 mt-2 mb-5 rounded-2"><a href="portfolio.html">My works</a></button>
                </div>
          <div class="col order-1 order-sm-2">
            <img src="images/profile.png" class="img-fluid">
          </div>
        </div>
    </div>
    </section>
    <section class="socials">

        <div class="row text-center">
            <div class="col mt-3">
              
              <a href="https://github.com/NanaOdamme">
                <p>Github  
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </p>
              </a>
              
            </div>
            <div class="col mt-3">
              <a href="http://www.linkedin.com/in/nana-akosua-odame-addae-3b5bb8206">
<p>LinkedIn
 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
</p>
              </a>  
          </div>
          <div class="col mt-3">
            <a href="https://github.com/NanaOdamme">
<p>Instagram
 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
</p>
            </a>
        </div>
        <div class="col mt-3">
          <a href="https://github.com/NanaOdamme">
<p>Twitter

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>  
</p>
          </a>
      </div>
        </div>
    </section>

    `,
    data() {
      return{
        p1: ' ui/ux designer/front-end developer',
        p2: ' I craft visually stunning interfaces and',
        p3: '  write clean, efficient code to  create',
        p4: ' seamless user experiences.',
        images: 'images/profile.png'
      }
    }
};
const AboutMe = {
    template: `
    <section class="about_me pt-5" id="about">
    <h1 class="mb-5 mt-5 text">{{ mainh }}</h1>
    <div class="container-md contain pt-4 px-4 mt-5">
      <div class="row">
        
        <div class="col-sm-4">
           <img src="images/aboutme.png" class="img-fluid mb-5 mt-2" alt="">
        </div>
        
        <div class="col mx-5">
          
          
          <p class="hidden about-p"> {{ text }} </p>
            <span class="read-more-button mb-5 mx-3" onclick="toggleReadMore()">Read More</span>
            
            <button onclick="window.open('AkosuaCV.pdf', '_blank')" class="rounded-2 mt-3 mb-5 btn1">Download CV</button>
            
        </div>
      </div>
    </div>
  </section>
    `,
    data() {
      return{
        mainh: 'About Me',
        text: ' Hello! I’m an experienced professional in UI/UX design and front-end development. I blend creativity with technical skills to create smooth digital experiences. In design, I use tools like Figma and Adobe Illustrator. I pay attention to every pixel, making sure it serves a purpose. My designs are not only visually appealing but also easy to use. For development, I work with HTML, CSS, Bootstrap, and Tailwind CSS. These help me build strong and responsive user interfaces. I also use JavaScript and Vue.js for dynamic web features. On the server side, I’m familiar with Flask and database management using MySQL and Microsoft SQL Server. Beyond coding, I solve problems practically and efficiently. I’m always learning and adapting to new technologies and trends. Let’s create great digital experiences together!',
      }
    }
};

const Portfolio = {
  template:`
  <section class="portfolio pt-5" id="portfolio">
    <div class="container-md p-5">
      <h1 class="mb-5 text">My Projects</h1>
      <div class="row">
        <div v-for="(project, index) in projects" :key="index" class="col-md-6">
          <div class="card mb-4">
            <img :src="project.image" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.tags }}</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <div class="col">
              <button class="rounded mt-3"><a href="portfolio.html">See More...</a></button>
            </div>
      </div>
    </div>
  </section>
`,
  data() {
    return {
      projects: [
        {
          title: 'Landing Page & Login',
          tags: '#UI/UX #landing Page',
          image: 'images/Frame 59.jpg'
        },
        {
          title: 'PayCashco',
          tags: '#UI/UX # MakePayment Page',
          image: 'images/Frame 60.jpg'
        },
        {
          title: 'Jetservice- a Landing Page',
          tags: '#UI/UX #landingpage',
          image: 'images/Frame 61.jpg'
        },
        {
          title: 'Fragrance World - website ui',
          tags: '#UI/UX #ecommerce',
          image: 'images/Frame 62.jpg'
        },
      ]
    };
  }
};


const SkillSet = {
  template: `
  <section class="skills pt-5 mb-5">
    <div class="container text-center">
      <h2 class="mb-5 text">{{ mainh1 }}</h2>
      <div class="row hidden">
        <div v-for="image in imageList" :key="image.id" class="col-3 mb-3">
          <img :src="image.src" class="img-fluid custom_img" :alt="image.alt">
        </div>
      </div>
    </div>
  </section>
`,

  data() {
    return {
      mainh1: 'What I Know',
      imageList: [
        { id: 1, src: 'images/skills (1).jpg', alt: 'Image 1' },
        { id: 2, src: 'images/skills (2).jpg', alt: 'Image 2' },
        { id: 3, src: 'images/skills (3).jpg', alt: 'Image 3' },
        { id: 4, src: 'images/skills (4).jpg', alt: 'Image 4' },
        { id: 5, src: 'images/skills (5).jpg', alt: 'Image 5' },
        { id: 6, src: 'images/skills (6).jpg', alt: 'Image 6' },
        { id: 7, src: 'images/skills (7).jpg', alt: 'Image 7' },
        { id: 8, src: 'images/skills (8).jpg', alt: 'Image 8' },
        { id: 9, src: 'images/skills (9).jpg', alt: 'Image 9' },
        { id: 10, src: 'images/skills (10).jpg', alt: 'Image 10' },
        { id: 12, src: 'images/skills (12).jpg', alt: 'Image 11' },
        { id: 13, src: 'images/skills (13).jpg', alt: 'Image 12' },
        
      ]

      }
    }
};

const Services = {
  template: `
  <section class="services" id="services">
    <div class="container-md p-3 contain text-center">
      <h1 class="text-center mb-5 text">Services I Provide</h1>
      <div class="row mb-5">
        <div v-for="(service, index) in services" :key="index" class="col">
          <div class="serve" @click="showPopup(service.name)">
            <i :class="service.icon"></i>
            <h2>{{ service.name }}</h2>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="popup" id="popup">
  <div class="popup-content">
      <span class="close" onclick="closePopup()">&times;</span>
      <div id="popup-content-inner"></div>
  </div>
</div>
  </section>
  <div class="popup" id="popup">
  <div class="popup-content">
      <span class="close" onclick="closePopup()">&times;</span>
      <div id="popup-content-inner"></div>
  </div>
</div>
`,
  data() {
    return {
      services: [
        {
          name: 'Web Design',
          icon: 'fas fa-pen-nib',
          description: 'I create intuitive and user-friendly interfaces tailored to my audience\'s needs.',
        },
        {
          name: 'Web Dev',
          icon: 'fas fa-laptop-code',
          description: 'I transform ideas into dynamic and responsive digital experiences.',
        },
        {
          name: 'Branding',
          icon: 'fas fa-chart-line',
          description: 'Developing a unique brand identity that resonates with your target audience and sets you apart from the competition.',
        },
        {
          name: 'UI/UX Design',
          icon: 'fas fa-bezier-curve',
          description: 'Creating seamless and engaging user experiences that prioritize usability and functionality.',
        },
        {
          name: 'Graphic Design',
          icon: 'fas fa-pen',
          description: 'Elevating brands with visually stunning and impactful design solutions.',
        },
      ],
      
    };
  },
  methods: {
    showPopup(serviceName) {
      const service = this.services.find((s) => s.name === serviceName);
      document.getElementById('popup-content-inner').innerHTML = `<h3>${service.name}</h3>
      <p>${service.description}</p>`;

      document.getElementById('popup')
      .style.display = 'block';
    
    },
    closePopup() {
      const popup = document.getElementById("popup");
      popup.style.display = "none";
  }
  }
  
};


const ContactMe = {
     template:`
     <section class="contact-me p-4 m-1" id="contact">
     <h1 class="text pb-5 pt-5">Contact Me</h1>
     <div class="container-md">
       <div class="row">
        
         <div class="col p-2 mb-5  mx-5">
           <h2>Feel free to contact me</h2>
           <p>I will get back to you as soon as possible!</p>
           <p>icon here</p>
           <p class="text1 p-2 rounded-2">THANKS FOR YOUR PATIENCE!</p>
           
         </div>
         <div class="col-lg-6">
       <form action="https://api.web3forms.com/submit" method="POST">
         <input type="hidden" name="access_key" value="54a53885-24ac-4745-9aca-59f3cc24c134">
       
         <div class="col mx-auto">
           <div class="card">
             <div class="card-body">
               <div class="row">
                 <div class="col-lg-8">
                     <div class="head text-center text-white py-3">
                       <h3>Get In Touch</h3>
                     </div>
                 </div>
               </div>
               
               <div class="form-group row mt-5 py-3">
                 <label for="name" class="col-sm-3 col-form-label">Name:</label>
                 <div class="col-sm-9"> 
                   <input name="name" type="text" class="effect-1 p-2" id="name" placeholder="Your Name" required>
                   <span class="Focus-border"></span>
                 </div>
                 
               </div>

               <div class="form-group row py-3">
                 <label for="email" class="col-sm-3 col-form-label">Email:</label>
                 <div class="col-sm-9">
                     <input name="email" type="email" class="effect-1 p-2" id="email" placeholder="Your Email" required>
                     <span class="Focus-border"></span>
                   </div>
                 </div>         

           <div class="form-group row py-3">
             <label for="message" class="col-sm-3 col-form-label">Message:</label>
             <div class="col-sm-9">
                 <textarea name="message" class="effect-1 p-2" id="message" rows="4" placeholder="Your Message"></textarea>
                 <span class="Focus-border"></span>
             </div>
             <div class="col text-end mt-4"> 
               <button type="submit" class="px-5 mx-5 rounded-2">Send</button>
           </div>
         </div>
       
           </div>
         </div>
       </div>
       
       </form>
       </div>
       
       </div>
     </div>

   </section>
     `
};

const Footer = {
  template: `
  <footer class=" text-light text-white py-4">
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h5>Follow Me</h5>
        <div class="social-links">
          <a href="https://github.com/NanaOdamme" class="text-light mx-2" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
          <a href="http://www.linkedin.com/in/nana-akosua-odame-addae-3b5bb8206" class="text-light mx-2" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/" class="text-light mx-2" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
          </a>
          <a href="https://twitter.com/" class="text-light mx-2" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <hr class="my-4 text-light">
    <p class="small">&copy; 2024 Nana Akosua. All Rights Reserved.</p>
    </div>
  
    </footer>

   `
};
  //main vue app
  const app = Vue.createApp({
      
  });
  app.component('header-navigation', NavigationBar);
  app.component('hero-section', HeroSection);
  app.component('about-me', AboutMe);
  app.component('my-portfolio', Portfolio);
  app.component('skill-set', SkillSet);
  app.component('my-services', Services);
  app.component('contact-me', ContactMe);
  app.component('my-footer', Footer);
  app.mount('#app');