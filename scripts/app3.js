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
          'caseimages/jet (1).png',
          'caseimages/jet (2).png',
          'caseimages/jet (3).png',
          'caseimages/jet (4).png',],
        galleryImages2:[
          '',],
        galleryImages3:[
          '',
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
        {
        id: 9,
        heroDescription: "Get your colors right!",
        image: "color picker.jpg",
        title: "COLOR PICKER",
        tags: "Web Dev",
        info: "choose a color get a pallet",
        buttonText: "See Code",
        link : "",
        h1: "COLOR PICKER",
        background: "The Color Palette Generator (CPG) is a web application created using Vue.js and Tailwind CSS. The idea behind CPG is to provide designers and developers with a tool that can generate beautiful and harmonious color palettes for their projects. The tool utilizes algorithms to analyze color schemes and present users with curated palettes based on their preferences and needs.",
        researchText: "Before developing CPG, extensive research was conducted to understand the needs of designers and developers when it comes to color selection. Interviews, surveys, and market analysis were carried out to identify pain points and existing solutions in the market. The research revealed a demand for a user-friendly, customizable, and efficient color palette generator that integrates seamlessly into the design workflow.",
          keyFeaturesList: [
          "Color Scheme Generation",
      

        ],
          futureEnhancementsList: [
          "Customization Options",
          "Export and Integration",
          "Preview and Comparison",
        ],
        challengeText: "Algorithm Complexity: Developing robust algorithms for color scheme generation while ensuring speed and accuracy can be challenging. Cross-Browser Compatibility: Ensuring consistent performance and appearance across different web browsers and devices. User Experience Design: Balancing functionality with a clean and intuitive user interface to provide a seamless user experience for both novice and experienced users.",
      goalsList: [
        "User Satisfaction: The primary goal of CPG is to meet the diverse needs of designers and developers, enhancing their productivity and creativity in color selection.",
        "Industry Recognition: CPG aims to become a leading tool in the design community, known for its innovation, reliability, and user-centric approach.",
        "Incorporate interactive features to engage users and encourage repeat usage.",
        "Continuous Improvement: Regular updates and enhancements based on user feedback and technological advancements to stay ahead of the competition and remain relevant in the market.",
        "Provide personalized recommendations based on user preferences.",
      ],
      galleryImages1: [
        
        'caseimages/',
        'caseimages/',
        'caseimages/',],
      galleryImages2:[
        'caseimages/',
        'caseimages/',
        'caseimages/',
        'caseimages/',],
      galleryImages3:[
        'caseimages/',
        'caseimages/',
        
      ]
      },
      {
        id: 10,
        heroDescription: "Shopping at your finger tips",
        image: "color picker.jpg",
        title: "THE SHOPBAG",
        tags: "UI/UX",
        info: "A ui / ux design for a ladies shopping app",
        buttonText: "See Prototype",
        link : "",
        h1: "THE SHOPBAG APP UI/UX DESIGN",
        background: "Shop Bag is a comprehensive e-commerce platform tailored specifically for women's clothing and accessories. It aims to offer a seamless shopping experience through intuitive user interfaces and engaging user experiences. The project focuses on creating a visually appealing and user-friendly application that caters to the diverse needs of modern women shoppers.",
        researchText: "he research phase for Shop Bag involved navigating a competitive market, analyzing user preferences for effective personalization, ensuring cross-platform consistency, addressing security concerns, optimizing performance, incorporating feedback efficiently, and maintaining brand identity consistency, leading to an informed and successful design strategy for the app.",
          keyFeaturesList: [
          "Product Catalog",
          "Product Details",
          "Homepage",
          "Wishlist & Favorites",

        ],
          futureEnhancementsList: [
          "Customer Support",
          "Secure Checkout",
        ],
        challengeText: "Shop Bag faced challenges in a competitive market, ensuring user personalization, maintaining cross-platform consistency, addressing security concerns, optimizing performance, incorporating feedback effectively, and upholding brand identity consistency, yet overcame them to create an elegant, user-friendly shopping platform for women's clothing and accessories.",
      goalsList: [
        "User Engagement: Create an immersive shopping experience that keeps users engaged and encourages them to explore a wide range of products.",
        "Simplicity: Design a clean and intuitive UI/UX to simplify the shopping process and enhance user satisfaction.",
        "Personalization: Implement features like personalized recommendations and wish lists to make shopping more personalized and enjoyable for users.",
        "Brand Identity: Reflect the brand's identity through visual elements, colors, and typography that resonate with the target audience.",
      ],
      galleryImages1: [
        
        'caseimages/',
        'caseimages/',
        'caseimages/',],
      galleryImages2:[
        'caseimages/',
        'caseimages/',
        'caseimages/',
        'caseimages/',],
      galleryImages3:[
        'caseimages/',
        'caseimages/',
        
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