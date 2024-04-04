// add vue templates

// navigation bar template
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
              <a class="nav-link" href="portfolio.html">Portfolio</a>
              <a class="nav-link" href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
   `
};

//hero section template
const HeroSection = {
    template: `
    
    <section class="hero " id="home">
    <div class="container-md my-hero">
    
        <div class="row">
            
          <div class="col-sm-6 order-2 order-sm-1 ">   
            <h2 class="hero-h2 fw-bold display-6"> --I am<br> <span>Nana 
                                                     Akosua.</span></h2>         
            <p class="hero-p">  {{ p1 }}</p>
            <p class="hero-text"> {{ p2 }}<br>
                {{ p3 }}<br>
                {{ p4 }}</p>
                     <button class="mx-5 mt-2 mb-5 rounded-2"><a href="portfolio.html">My works</a></button>
                    
                     <a  class="icon" href="https://github.com/NanaOdamme">
                     <i class="bi bi-github"></i>
                     </a>
                     <a class="icon" href="http://www.linkedin.com/in/nana-akosua-odame-addae-3b5bb8206">
                     <i class="bi bi-linkedin"></i>
                     </a>  
                     <a class="icon" href="https://github.com/NanaOdamme">
                     <i class="bi bi-instagram"></i>
                     </a>
                     <a class="icon" href="https://github.com/NanaOdamme">
                     <i class="bi bi-twitter-x"></i>
                     </a>
                    
          </div>
          <div class="col order-1 order-sm-2 ">
            <img src="images/profile (2).png" class="img-fluid">
          </div>
        </div>
    </div>
    </section>
    <section class="socials">

        <div class="row text-center">
            
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

//about me section template
const AboutMe = {
    template: `
    <section class="about_me pt-5" id="about">
    <h1 class="mb-5 mt-5 text">{{ mainh }}</h1>
    <div class="container-md contain pt-4 px-3 mt-5">
      <div class="row">
        
        <div class="col-sm-4">
           <img src="images/about.png" class="img-fluid mb-4 mt-2" alt="">
        </div>
        
        <div class="col mx-5">
          
          
          <p class="hidden about-p"> {{ text }} </p>
            <span class="read-more-button mb-5 mx-3" onclick="toggleReadMore()">Read More</span>
            
            <button onclick="window.open('AkosuaCV.pdf', '_blank')" class="rounded-2 mt-3 mb-3 btn1">Download CV</button>
            
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

// portfolio gallery template
const Portfolio = {
  template:`
  <section class="portfolio pt-5" id="portfolio">
    <div class="container-md p-5">
      <h1 class="mb-5 text">My Projects</h1>
      <div class="row">
        <div v-for="(project, index) in projects" :key="index" class="col-md-6">
          <div class="gallery-container mb-4">
            <a :href="project.image" target="_blank"> <!-- Added anchor tag around image -->
              <div class="gallery-item">
                <img :src="project.image" class="image" alt="...">
                <div class="overlay">
                  <div class="overlay-content">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.tags }}</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </a>
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
          title: 'Novel Reading App Design',
          tags: '#UI/UX #appdesign',
          image: 'images/shelf.jpg'
        },
        {
          title: 'Step Tracker',
          tags: '#UI/UX # MakePayment Page',
          image: 'images/tracker.jpg'
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


// my skilld section template
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

// services section template
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

// contact me form template
const ContactMe = {
     template:`
     <section class="contact-me" id="contact">
     <h1 class="text pb-5 pt-5">Contact Me</h1>
     <div class="container-md mt-5 ">
       <div class="row contact-b">
         <div class="col text-center mb-5 picture-area">
           <h2 class="c-h2">Feel free to contact me</h2>
           <p class="c-p">I will get back to you as soon as possible!</p>
           <p class="contact">
           <!--link to contact -->
             <a :href="'tel:' + phoneNumber"><i class="icon mx-4 bi bi-telephone" title="Call"></i></a>
             <a :href="'https://wa.me/' + phoneNumber"><i class="icon mx-4 bi bi-whatsapp" title="WhatsApp"></i></a>
             <a :href="'mailto:' + emailAddress"><i class="icon mx-4 bi bi-envelope" title="Email"></i></a>
           </p>
         </div>
         <div class="col-lg-6 mx-auto">
         <!--web3 api for form submission to gmail-->
           <form @submit.prevent="submitForm" class="position-relative">
             <input type="hidden" name="access_key" v-model="accessKey">
             <div class="card mt-4">
               <div class="card-body">
                 <div class="head text-center text-white py-1">
                     <h3>Get In Touch</h3>
                   </div>
                 <div class="form-group mt-5">
                   <label for="name">Name:</label>
                   <input v-model="formData.name" type="text" class="effect-1 p-2" id="name" placeholder="Your Name" required>
                 </div>
                 <div class="form-group">
                   <label for="email">Email:</label>
                   <input v-model="formData.email" type="email" class="effect-1 p-2" id="email" placeholder="Your Email" required>
                 </div>
                 <div class="form-group">
                   <label for="message">Message:</label>
                   <textarea v-model="formData.message" class="effect-1 p-2" id="message" rows="4" placeholder="Your Message"></textarea>
                 </div>
                 <div class="text-center mt-4">
                   <button type="submit" class="submit rounded-2 px-5">Send</button>
                 </div>
               </div>
             </div>
           </form>
         </div>
         
       </div>
       <p class="text1 mt-5 rounded-2 p-2">{{ confirmationMessage }}</p>
     </div>
   </section>
     `,
     data() {
      return {
        phoneNumber: '+233203817652', 
        emailAddress: 'eronastyles@gmail.com', 
        accessKey: '54a53885-24ac-4745-9aca-59f3cc24c134', //access key from web3 forms
        formData: {
          name: '',
          email: '',
          message: ''
        },
        confirmationMessage: ''
      };
    },
    methods: {
      // algorithm to fetch api
      async submitForm() {
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              access_key: this.accessKey,
              ...this.formData
            })
          });
          // message success or failure
          const data = await response.json();
          if (data.success) {
            this.confirmationMessage = 'THANKS FOR YOUR PATIENCE!';
            this.formData = {
              name: '',
              email: '',
              message: ''
            };
          } else {
            this.confirmationMessage = 'There was an error. Please try again later.';
          }
        } catch (error) {
          this.confirmationMessage = 'There was an error. Please try again later.';
        }
      }
    }
  };

//footer section template
const Footer = {
  template: `
  <footer class=" text-light text-white py-4">
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h5>Follow Me</h5>
        <div class="social-links">
        <a  class="icon" href="https://github.com/NanaOdamme">
        <i class="bi bi-github"></i>
        </a>
        <a class="icon" href="http://www.linkedin.com/in/nana-akosua-odame-addae-3b5bb8206">
        <i class="bi bi-linkedin"></i>
        </a>  
        <a class="icon" href="https://instagram.com">
        <i class="bi bi-instagram"></i>
        </a>
        <a class="icon" href="https://twitter.com/">
        <i class="bi bi-twitter-x"></i>
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