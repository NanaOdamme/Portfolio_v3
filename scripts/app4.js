// portfolio page filtering and template

const app4 = Vue.createApp({
    data() {
        return {
            categories: ["All", "Web Dev", "UI/UX", "Graphic Design"],
            cards: [
                {
                    id: 1,
                    image: "images/Frame 61.jpg",
                    alt: "Image 1",
                    title: "JetServices Landing Page",
                    tags: "UI/UX",
                    info: "This is a ui/ux design of an IT service company website. click here to view case study and designs",
                    link: "#",
                },
                {
                    id: 2,
                    image: "images/404.jpg",
                    alt: "Image 1",
                    title: "404 page",
                    tags: "Web Dev",
                    info: "I created this 404 web page with vue and bootstap",
                    link: "#",
                },
                {
                    id: 3,
                    image: "images/Frame 62.jpg",
                    alt: "Image 1",
                    title: "E-commerce UI/UX",
                    tags: "UI/UX",
                    info: "This is a ui/ux design of an perfume online store. click here to view case study and designs",
                },
                { 
                  id: 4,
                  image: "images/tracker.jpg",
                  alt: "Image 1",
                  title: "Step Tracker",
                  tags: "Web Dev",
                  info: "I created this 404 template with vue and bootstrap. click here to view code and templates",
                  link: "#",
                },
                {
                  id: 5,
                  image: "images/shelf.jpg",
                  alt: "Image 1",
                  title: "The Book Shelf App",
                  tags: "UI/UX",
                  info: "This is a ui/ux design of a novel or book reading app calles the shelf. click here to view case study and designs",
                  link: "#",
                },
                {
                  id: 6,
                  image: "images/Afro Yard.jpg",
                  alt: "Image 1",
                  title: "Afro Yard Logo",
                  tags: "Graphic Design",
                  info: "This logo was created for Afro Yard Ghana",
                  link: "#",
                },
                {
                  id: 7,
                  image: "images/Trifold Brochure.png",
                  alt: "Image 1",
                  title: "Brochure Design",
                  tags: "Graphic Design",
                  info: "A brochure design for a pastry shop",
                  link: "#",
                },
                {
                    id: 8,
                    image: "images/dota.png",
                    alt: "Image 1",
                    title: "DOTA",
                    tags: "UI/UX",
                    info: "An app design for an art shop",
                    link: "#",
                  },
                  {
                    id: 9,
                    image: "images/color picker.jpg",
                    alt: "Image 1",
                    title: "COLOR PICKER",
                    tags: "Web Dev",
                    info: "A color pallet generator",
                    link: "#",
                  },

        
                ],
                selectedCategory: "All",
            };
        },

        //main filtering algorithm
        computed: {
            filteredCards() {
                if (this.selectedCategory === "All") {
                    return this.cards;
                } else {
                    return this.cards.filter((card) => card.tags.includes(this.selectedCategory));
                }
            },
        },
        methods: {
            filterCards(category) {
                this.selectedCategory = category;
            },
        },
    });
    
    app4.mount('#app4');