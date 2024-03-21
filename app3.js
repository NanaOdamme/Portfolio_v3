const HeadernHero ={
template:`
<header>
<nav class="navbar navbar-expand-lg shadow fixed-top">
  <div class="container-fluid">
    <router-link class="navbar-brand px-3" to="/home"><h2>NanA</h2></router-link>
    <div class="navbar-nav px-3 ">
    <a class="nav-link" aria-current="page" href="portfolio.html">Go Back</a>
    </div>
  </div>
</nav>
</header>
<section class="hero containder-md text-center pt-5 mb-5">
<video autoplay loop muted plays-line class="background-clip">
  <source :src="videoSource" type="video/mp4">
</video>
<div class="content">
  <h1 class="display-6">{{ title }}</h1>
  <p class="lead">{{ leadText }}</p>
</div>
</section>

`,
data() {
    return {
        videoSource: "caseimages/reading.mp4",
        title: "The Shelf",
        leadText: "Revolutionizing the way you read novels",
    };
  }
}

const Gallery = {
    template: `
      <section class="gallery pt-5">
        <div class="row mb-5">
          <div class="col mb-3" v-for="(image, index) in galleryImages1" :key="index">
            <img :src="image" class="img-fluid" alt="">
          </div>
        </div>
        <div class="row mb-5">
        <div class="col mb-3" v-for="(image, index) in galleryImages2" :key="index">
          <img :src="image" class="img-fluid" alt="">
        </div>
        </div>
        <div class="row mb-3">
        <div class="col mb-3" v-for="(image, index) in galleryImages3" :key="index">
          <img :src="image" class="img-fluid" alt="">
        </div>
      </section>
    `,
    data() {
      return {
        galleryImages1: [
          'caseimages/shelf (11).png',
          'caseimages/shelf (12).png',
          'caseimages/shelf (10).png',
          'caseimages/shelf (13).png',],
        galleryImages2:[
          'caseimages/shelf (9).png',
          'caseimages/shelf (8).png',
          'caseimages/shelf (7).png',
          'caseimages/shelf (6).png',],
        galleryImages3:[
          'caseimages/shelf (5).png',
          'caseimages/shelf (4).png',
          'caseimages/shelf (3).png',
          'caseimages/shelf (2).png'
        ]
      };
    }
  };

const designProcess = {
    template: `
      <div class="designprocess text-center mb-5">
        <h3>Design Process</h3>
        <div class="row mt-5 p-4">
          <div v-for="(step, index) in designSteps" :key="index" class="col mb-5">
            <i class="process" :class="step.icon"></i>
            <h5 class="mt-4">{{ step.title }}</h5>
            <p class="text-center">{{ step.description }}</p>
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        designSteps: [
          {
            title: 'Research',
            icon: 'bi bi-search',
            description: 'User Interview, User Research, Competitive Analysis.'
          },
          {
            title: 'Define',
            icon: 'bi bi-person',
            description: 'Affinity Mapping, Personas, Empathy Map, Journey Map.'
          },
          {
            title: 'Ideate',
            icon: 'bi bi-lightbulb-fill',
            description: 'User Flow, Card Sorting, inspirations, Information Architecture.'
          },
          {
            title: 'Design',
            icon: 'bi bi-bezier',
            description: 'User Fidelity, Hard Fidelity, Prototype Design.'
          },
          {
            title: 'Testing',
            icon: 'bi bi-ui-checks',
            description: 'Prototyping, User Testing (not yet), Feedback.'
          }
        ]
      };
    }
  };
  

const mainCase ={
    template:`
    
   `
}
const ChallengeGoalsSection = {
    template: `
      <div class="row p-3">
        <div class="col mb-3">
          <h3>Challenge</h3>
          <p>{{ challengeText }}</p>
        </div>
        <div class="col mb-3">
          <h3>Goals</h3>
          <p>
            <ol>
              <li v-for="goal in goalsList" :key="goal">{{ goal }}</li>
            </ol>
          </p>
        </div>
      </div>
    `,
    data() {
      return {
        challengeText: "The digital reading landscape is saturated with various platforms and apps, making it challenging for readers to find a seamless and engaging experience. The Shelf aimed to address this challenge by creating a novel reading app that combines functionality, aesthetics, and user experience.",
        goalsList: [
          "Develop a user-friendly interface for easy navigation and accessibility.",
          "Create a visually appealing design to enhance the reading experience.",
          "Implement features such as personalized recommendations and social sharing to increase user engagement.",
          "Optimize performance and responsiveness across different devices and platforms.",
        ],
      };
    },
  };

  const ResearchAnalysisSection = {
     template: `
      <div class="row mb-5 p-4">
        <h3>Research & Analysis</h3>
        <p class="mb-5">{{ researchText }}</p>
        <div class="col mb-3">
          <h3>Key Features</h3>
          <ul>
            <li v-for="feature in keyFeaturesList" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        <div class="col mb-3">
          <h3>Future Enhancements</h3>
          <ul>
            <li v-for="enhancement in futureEnhancementsList" :key="enhancement">{{ enhancement }}</li>
          </ul>
        </div>
      </div>
    `,
    data() {
      return {
        researchText: "Before diving into design, extensive research was conducted to understand user preferences, pain points, and expectations from a novel reading app. Surveys, interviews, and competitor analysis were carried out to gather insights and identify opportunities for improvement.",
        keyFeaturesList: [
          "Personalized Recommendations",
          "Reading Progress Tracking",
          "Social Sharing",
          "Customization Options",
        ],
        futureEnhancementsList: [
          "Audio Narration",
          "Community Features",
          "Integration with E-Book Stores",
        ],
      };
    },
  };
  
  const VisitButton = {
    template: `
      <div class="col-lg-12 mt-5 mb-5">
        <p class="text-center mt-4">
        <span class="link button" @click="redirect"> {{ buttonText }}</span>
        </p>
      </div>
    `,
    data() {
      return {
        buttonText: "See Prototype",
        link: "https://example.com",
      };

    },
    methods: {
        redirect() {
            // Replace "https://example.com" with the actual link to The Shelf
            window.open("https://www.figma.com/proto/DmNzXfh8NmOwfIaWHOWtDY/working-bord?page-id=5%3A2&type=design&node-id=120-464&viewport=1020%2C1705%2C0.17&t=SAezLZD1T2kN3MJP-1&scaling=scale-down&starting-point-node-id=54%3A1374&show-proto-sidebar=1&mode=design", "_blank"); 
    }
  }
  };
  const app3 = Vue.createApp({});
  app3.component('case-header', HeadernHero);
  app3.component('my-gallery', Gallery);
  app3.component('design-process', designProcess);
  app3.component('challenge-goals', ChallengeGoalsSection);
  app3.component('research-analysis', ResearchAnalysisSection);
  app3.component('visit-button', VisitButton);
  app3.mount('#app3');