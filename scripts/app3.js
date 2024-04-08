// case study page, dynamic rendering

//get id of each project to open its case study
const params = new URLSearchParams(window.location.search);
const cardId = parseInt(params.get('id'));

  const app = Vue.createApp({
    data() {
      return {
        cards: [
          {
            id: 1,
            heroDescription: "We dey for you",
            image: "Frame 61.jpg",
            title: "JetServices Landing Page",
            tags: "UI/UX",
            info: "This is a ui/ux design of an IT service company website. click here to view case study and designs",
            buttonText: "See Prototype",
            link : "",
            researchText: " ",
            keyFeaturesList: [
            "Personalized Recommendations",
            "Reading Progress Tracking",
            "Social Sharing",
            "Customization Options",
          ],
            futureEnhancementsList: [
            "Personalized Recommendations",
            "Reading Progress Tracking",
            "Social Sharing",
            "Customization Options",
          ],
          challengeText: "The digital reading landscape is saturated with various platforms and apps, making it challenging for readers to find a seamless and engaging experience. The Shelf aimed to address this challenge by creating a novel reading app that combines functionality, aesthetics, and user experience.",
        goalsList: [
          "Develop a user-friendly interface for easy navigation and accessibility.",
          "Create a visually appealing design to enhance the reading experience.",
          "Implement features such as personalized recommendations and social sharing to increase user engagement.",
          "Optimize performance and responsiveness across different devices and platforms.",
        ],
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
          },
          {
            id: 2,
            heroDescription: "Opps page not loading",
            image: "404.jpg",
            title: "404 page",
            tags: "Web Dev",
            info: "I created this 404 web page with vue and bootstap",
            buttonText: "Check Code",
            link : "",
            researchText: " ",
            keyFeaturesList: [
            "1",
            "2",
            "3",
          ],
            futureEnhancementsList: [
            "1",
            "2",
            "3",
          ],
          challengeText: "The digital reading landscape is saturated with various platforms and apps, making it challenging for readers to find a seamless and engaging experience. The Shelf aimed to address this challenge by creating a novel reading app that combines functionality, aesthetics, and user experience.",
        goalsList: [
          "Develop a user-friendly interface for easy navigation and accessibility.",
          "Create a visually appealing design to enhance the reading experience.",
          "Implement features such as personalized recommendations and social sharing to increase user engagement.",
          "Optimize performance and responsiveness across different devices and platforms.",
        ],
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
          },
          {
            id: 3,
            heroDescription: "Shop at your finger tips",
            image: "Frame 62.jpg",
            title: "E-commerce UI/UX",
            tags: "UI/UX",
            info: "This is a ui/ux design of an perfume online store. click here to view case study and designs",
            buttonText: "See Prototype",
            link : "",
            researchText: "",
            keyFeaturesList:[
            "1",
            "2",
            "3",
          ],
            futureEnhancementsList: [
            "1",
            "2",
            "3",
          ],
          challengeText: "The digital reading landscape is saturated with various platforms and apps, making it challenging for readers to find a seamless and engaging experience. The Shelf aimed to address this challenge by creating a novel reading app that combines functionality, aesthetics, and user experience.",
        goalsList: [
          "Develop a user-friendly interface for easy navigation and accessibility.",
          "Create a visually appealing design to enhance the reading experience.",
          "Implement features such as personalized recommendations and social sharing to increase user engagement.",
          "Optimize performance and responsiveness across different devices and platforms.",
        ],
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
        },
        { 
          id: 4,
          heroDescription: "Track every step along the way",
          image: "tracker.jpg",
          title: "Step Tracker",
          tags: "Web Dev",
          info: "I created this 404 template with vue and bootstrap. click here to view code and templates",
          buttonText: "Check Code",
          link : "",
          researchText: "",
          keyFeaturesList: [
          "1",
          "2",
          "3",
        ],
          futureEnhancementsList: [
          "1",
          "2",
          "3",
        ],
        challengeText: "The digital reading landscape is saturated with various platforms and apps, making it challenging for readers to find a seamless and engaging experience. The Shelf aimed to address this challenge by creating a novel reading app that combines functionality, aesthetics, and user experience.",
        goalsList: [
          "Develop a user-friendly interface for easy navigation and accessibility.",
          "Create a visually appealing design to enhance the reading experience.",
          "Implement features such as personalized recommendations and social sharing to increase user engagement.",
          "Optimize performance and responsiveness across different devices and platforms.",
        ],
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
        },
        {
          id: 5,
          heroDescription: "Revolutionizing the way you read novels",
          image: "shelf.jpg",
          title: "The Book Shelf App",
          tags: "UI/UX",
          info: "This is a ui/ux design of a novel or book reading app calles the shelf. click here to view case study and designs",
          buttonText: "See Prototype",
          link : "",
          researchText: "",
          keyFeaturesList: [
          "1",
          "2",
          "3",
        ],
          futureEnhancementsList:[
          "1",
          "2",
          "3",
        ],
        challengeText: "The digital reading landscape is saturated with various platforms and apps, making it challenging for readers to find a seamless and engaging experience. The Shelf aimed to address this challenge by creating a novel reading app that combines functionality, aesthetics, and user experience.",
        goalsList: [
          "Develop a user-friendly interface for easy navigation and accessibility.",
          "Create a visually appealing design to enhance the reading experience.",
          "Implement features such as personalized recommendations and social sharing to increase user engagement.",
          "Optimize performance and responsiveness across different devices and platforms.",
        ],
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
        },
        {
          id: 6,
          heroDescription: "logo designs for your business",
          image: "Afro Yard.jpg",
          title: "Afro Yard Logo",
          tags: "Graphic Design",
          info: "This logo was created for Afro Yard Ghana",
          buttonText: "See MoodBoard",
          link : "",
          researchText: "",
            keyFeaturesList: [
            "1",
            "2",
            "3",
          ],
            futureEnhancementsList:[
            "1",
            "2",
            "3",
          ],
          challengeText: "The digital reading landscape is saturated with various platforms and apps, making it challenging for readers to find a seamless and engaging experience. The Shelf aimed to address this challenge by creating a novel reading app that combines functionality, aesthetics, and user experience.",
        goalsList: [
          "Develop a user-friendly interface for easy navigation and accessibility.",
          "Create a visually appealing design to enhance the reading experience.",
          "Implement features such as personalized recommendations and social sharing to increase user engagement.",
          "Optimize performance and responsiveness across different devices and platforms.",
        ],
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
        },
        {
          id: 7,
          heroDescription: "A brand identity is always good",
          image: "Trifold Brochure.png",
          title: "Brochure Design",
          tags: "Graphic Design",
          info: "A brochure design for a pastry shop",
          buttonText: "See MoodBoard",
          link : "",
          researchText: "",
            keyFeaturesList: [
            "1",
            "2",
            "3",
          ],
            futureEnhancementsList: [
            "1",
            "2",
            "3",
          ],
          challengeText: "The digital reading landscape is saturated with various platforms and apps, making it challenging for readers to find a seamless and engaging experience. The Shelf aimed to address this challenge by creating a novel reading app that combines functionality, aesthetics, and user experience.",
        goalsList: [
          "Develop a user-friendly interface for easy navigation and accessibility.",
          "Create a visually appealing design to enhance the reading experience.",
          "Implement features such as personalized recommendations and social sharing to increase user engagement.",
          "Optimize performance and responsiveness across different devices and platforms.",
        ],
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
        },
        {
          id: 8,
          heroDescription: "Buy, sell and bid",
          image: "dota.png",
          title: "DOTA",
          tags: "UI/UX",
          info: "An app design for an art shop",
          buttonText: "See MoodBoard",
          link : "",
          h1: "DOTA",
          background: "DOTA is an innovative mobile application designed to revolutionize the art market by combining art sales with a bidding system. The app aims to provide a seamless and engaging experience for both artists and art enthusiasts, allowing them to discover, buy, and bid on unique artworks from around the world.",
          researchText: "The research and analysis phase for the DOTA art selling and bidding app involved comprehensive market research, competitor analysis, and user feedback collection. We delved into understanding the diverse needs of artists, art collectors, and bidders while studying current art market trends and competitor offerings. Through user surveys, interviews, and data analysis, we identified key pain points and preferences, informing our design decisions for creating an intuitive and engaging UI/UX. Additionally, we explored emerging technologies and legal considerations to ensure the app's compliance and integration of cutting-edge features for a seamless art buying and bidding experience.",
            keyFeaturesList: [
            "Artwork Showcase",
            "Bidding System",
            "Artist Profiles",
            "Personalized Recommendations",
            "Secure Transactions",

          ],
            futureEnhancementsList: [
            "Live Auctions and Events",
            "Community Engagement Features",
            "Advanced Analytics and Insights",
          ],
          challengeText: "The primary challenge was to create a user interface (UI) and user experience (UX) design that caters to the diverse needs of artists, buyers, and bidders while ensuring a visually appealing and intuitive platform.",
        goalsList: [
          "Create a visually stunning interface that highlights artwork effectively.",
          "Ensure seamless navigation and user flow for browsing, buying, and bidding",
          "Incorporate interactive features to engage users and encourage repeat usage.",
          "Implement secure and efficient payment and bidding systems.",
          "Provide personalized recommendations based on user preferences.",
        ],
        galleryImages1: [
          
          'caseimages/dota1 (2).png',
          'caseimages/dota1 (3).png',
          'caseimages/dota1 (4).png',],
        galleryImages2:[
          'caseimages/dota1 (5).png',
          'caseimages/dota1 (6).png',
          'caseimages/dota1 (7).png',
          'caseimages/dota1 (8).png',],
        galleryImages3:[
          'caseimages/dota1 (9).png',
          'caseimages/dota1 (1).png',
          
        ]
        },
        
        ],
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
        ],
        card: {},
      };
    },
    mounted() {
      this.card = this.cards.find(c => c.id === cardId);
    }
  });

  app.mount('#app3');