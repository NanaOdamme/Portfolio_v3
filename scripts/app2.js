const portfolioHeader={
template: `
<section class="hero containder-md text-center pt-5">
        
<nav class="navbar navbar-expand-lg shadow fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand px-3" href="#home"><h2>{{ appName }}</h2></a>
     
        <div class="navbar-nav px-3 ">
        <a class="nav-link" aria-current="page" href="index.html" @click.prevent="goBack">Go Back</a>
          
        </div>
      </div>
    
  </nav>

  <video autoplay loop muted plays-line class="background-clip">
  <source :src="videoSource" type="video/mp4">
</video>
<div class="content">


<h1 class="h1 text-white mb-5">{{ pageTitle }}</h1>
        <a :href="githubLink" class="btn mb-5 border border-2 border-warning rounded-5">{{ githubButtonText }}</a>
      </div>
</section>
`,
data() {
  return {
    appName: 'NanA',
    pageTitle: 'Explore my work',
    githubButtonText: 'Check my github',
    githubLink: 'https://github.com/NanaOdamme',
    videoSource: 'images/vid.mp4'
  };
},
methods: {
  goBack() {
    window.location.href = 'index.html';
  }
}
}
const Filters = {
    template:`
   
        <section class="filters">
          <div class="container-md p-5 text-center">
            <button
              v-for="(category, index) in categories"
              :key="index"
              class="btn1 px-4 mb-2 mx-1"
              @click="filterCards(category)"
            >
              {{ category }}
            </button>
          </div>
        </section>
    
        <section class="portfolio" id="portfolio">
          <div class="container-md mb-5">
            <div class="row">
              <div
                v-for="(card, index) in filteredCards"
                :key="index"
                class="col-md-4 mb-4"
              >
                <div class="card border border-warning border-2">
                  <div class="card-body">
                    <div class="image-container">
                      <img :src="card.image" :alt="card.alt" class="img-fluid">
                      <a :href="card.link">
                        <div class="image-text">
                          <h3 class="pt-lg-5">{{ card.title }}</h3>
                          <p>{{ card.tags }}</p>
                          <p class="pt-lg-2">{{ card.info }}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
         
    `,

    data() {
      return {
        categories: ["All", "Web Dev", "UI/UX", "Graphic Design"],
        cards: [
          {
            image: "images/Frame 61.jpg",
            alt: "Image 1",
            title: "JetServices Landing Page",
            tags: "UI/UX",
            info: "This is a ui/ux design of an IT service company website. click here to view case study and designs",
            link: "#",
          },
          {
            image: "images/404.jpg",
            alt: "Image 1",
            title: "404 page",
            tags: "Web Dev",
            info: "I created this 404 web page with vue and bootstap",
            link: "#",
          },
          {
            image: "images/Frame 62.jpg",
            alt: "Image 1",
            title: "E-commerce UI/UX",
            tags: "UI/UX",
            info: "This is a ui/ux design of an perfume online store. click here to view case study and designs",
            link: "#",
          },
          {
            image: "images/tracker.jpg",
            alt: "Image 1",
            title: "Step Tracker",
            tags: "Web Dev",
            info: "I created this 404 template with vue and bootstrap. click here to view code and templates",
            link: "#",
          },
          {
            image: "images/shelf.jpg",
            alt: "Image 1",
            title: "The Book Shelf App",
            tags: "UI/UX",
            info: "This is a ui/ux design of a novel or book reading app calles the shelf. click here to view case study and designs",
            link: "casestudy.html",
          },
          {
            image: "images/Afro Yard.jpg",
            alt: "Image 1",
            title: "Afro Yard Logo",
            tags: "Graphic Design",
            info: "This logo was created for Afro Yard Ghana",
            link: "#",
          },
          {
            image: "images/Trifold Brochure.png",
            alt: "Image 1",
            title: "Brochure Design",
            tags: "Graphic Design",
            info: "A brochure design for a pastry shop",
            link: "#",
          },
          
        ],
        selectedCategory: "All",
      };
    },
    computed: {
      filteredCards() {
        if (this.selectedCategory === "All") {
          return this.cards;
        } 
        else {
          return this.cards.filter((card) => card.tags.includes(this.selectedCategory));
        }
      },
    },
    methods: {
        filterCards(category) {
          this.selectedCategory = category;
        },
      },
    };

    const app2 = Vue.createApp({
    });
    app2.component('portfolio-header', portfolioHeader);
    app2.component('image-filters', Filters);
    app2.mount('#app2');