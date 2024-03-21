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

  const app3 = Vue.createApp({});
  app3.component('my-gallery', Gallery);
  app3.mount('#app3');