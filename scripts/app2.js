//templates for portfolio.html

//header template with navbar
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
    // go back to home page
    window.location.href = 'index.html';
  }
}
}


    // declaring the vue components
    const app2 = Vue.createApp({
    });
    app2.component('portfolio-header', portfolioHeader);
    app2.mount('#app2');