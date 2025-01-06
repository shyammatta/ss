const menuButton = document.getElementById('menuButton');
        const closeButton = document.getElementById('closeButton');
        const navbar = document.getElementById('navbar');

        // Open the navbar
        menuButton.addEventListener('click', () => {
            navbar.classList.add('open'); // Add the 'open' class
            const dd=document.getElementById('mainscreen');
            dd.style.backgroundColor='rgb(11, 11, 11)';
            dd.style.Zindex= '1103';

        });

        // Close the navbar
        closeButton.addEventListener('click', () => {
            navbar.classList.remove('open'); // Remove the 'open' class
            const dd=document.getElementById('mainscreen');
            dd.style.backgroundColor='white';
            dd.style.Zindex= '1000';

        });
        function navchange(){
        document.getElementById('navvv').style.backgroundColor='white';
        

        }
        const navbarscroll = document.getElementById('navvv');
// playing video
function playvideo(){
  document.getElementById('ss').style.display='block';


  document.getElementById('dd').innerHTML='<video src="./Paradox Marketing_ Have Our Team Become Your Team (1).mp4" controls autoplay ></video>';
  document.getElementById('dd').style.zIndex='2000';
  
}
function notplay(){
  document.getElementById('ss').style.display='none';
  document.getElementById('dd').innerHTML='';
  document.getElementById('dd').style.zIndex='995';


  
}


    // Add a scroll event listener
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        // Add the 'scrolled' class when scrolled
        navbarscroll.classList.add('scrolled');
      } else {
        // Remove the 'scrolled' class when at the top
        navbarscroll.classList.remove('scrolled');
      }
    });


    // Data for persons
    const persons = [
      { name: "BernaBeth", role: "Graphic Designer", image: "https://paradoxmarketing.io/wp-content/uploads/2023/04/bernabeth.png" },
      { name: "Glyzel ", role: "CRM Specialist", image: "https://paradoxmarketing.io/wp-content/uploads/2023/09/glyzel.png" },
      { name: "Abon", role: "Video Content Specialist", image: "https://paradoxmarketing.io/wp-content/uploads/2023/09/abon.png" },
      { name: " Bethany", role: "Account Manager", image: "https://paradoxmarketing.io/wp-content/uploads/2024/05/bethany.png" },
      { name: "Joshua", role: "Chief Exceutive Officier", image: "https://paradoxmarketing.io/wp-content/uploads/2021/06/joshua.png" },
      { name: "Aaron", role: "Chief Marketing Officier", image: "https://paradoxmarketing.io/wp-content/uploads/2022/02/aiden.png" },
      { name: "Aiden", role: "Chief Operating Officier", image: "https://paradoxmarketing.io/wp-content/uploads/2022/02/aiden.png" },
      { name: "Deepak", role: "Chief Technology Officier", image: "https://paradoxmarketing.io/wp-content/uploads/2024/07/deepak.png" },
      { name: "BernaBeth", role: "Graphic Designer", image: "https://paradoxmarketing.io/wp-content/uploads/2023/04/bernabeth.png" },
      { name: "Glyzel ", role: "CRM Specialist", image: "https://paradoxmarketing.io/wp-content/uploads/2023/09/glyzel.png" },
      { name: "Abon", role: "Video Content Specialist", image: "https://paradoxmarketing.io/wp-content/uploads/2023/09/abon.png" },
      { name: " Bethany", role: "Account Manager", image: "https://paradoxmarketing.io/wp-content/uploads/2024/05/bethany.png" },
      { name: "Joshua", role: "Chief Exceutive Officier", image: "https://paradoxmarketing.io/wp-content/uploads/2021/06/joshua.png" },
      { name: "Aaron", role: "Chief Marketing Officier", image: "https://paradoxmarketing.io/wp-content/uploads/2022/02/aiden.png" },
      { name: "Aiden", role: "Chief Operating Officier", image: "https://paradoxmarketing.io/wp-content/uploads/2022/02/aiden.png" },
      { name: "Deepak", role: "Chief Technology Officier", image: "https://paradoxmarketing.io/wp-content/uploads/2024/07/deepak.png" },
    ];

    let currentIndex = 0; // Current index of the first visible person
    const cardsContainer = document.getElementById("cards");
    visibleCards1=4

    // Function to render cards
    function renderCards() {
      cardsContainer.innerHTML = ""; // Clear existing cards
      // Handle wrapping around the array
      const visiblePersons1 = [];
      for (let i = 0; i < visibleCards1; i++) {
        const index = (currentIndex + i) % persons.length; // Wrap around using modulo
        visiblePersons1.push(persons[index]);
      }
    
      // Render the visible cards
      visiblePersons1.forEach(person => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${person.image}" alt="Technology Image">
          <div class="info">
             <h2>${person.name}</h2>
            <p>${person.role}</p>
          </div>
        `;
        cardsContainer.appendChild(card);
        
      });
    }

    
    // Event listeners for buttons
    document.getElementById("prev-btn").addEventListener("click", () => {
      currentIndex = (currentIndex - 4 + persons.length) % persons.length; // Navigate to the previous 4 persons
      renderCards();
    });

    document.getElementById("next-btn").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % persons.length; // Navigate to the next 4 persons
      renderCards();
    });

    // Initial render
    renderCards();

    const technlogies = [
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/hubspot-logo.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/07/logo-salesforce.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/wp-icon.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/ontraport.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/googleads.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/ga-logo-2.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/google-search-console-icon-1.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/google-tag-managera.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/page-optimizer-logo.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/sitebulb-logo-1.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/woocommerce-logo.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/ahref.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/asana-png.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/elementor.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/gravity-forms-logo.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/05/hubstaff.png.webp" },
      { image: "https://paradoxmarketing.io/wp-content/webp-express/webp-images/uploads/2021/07/shopify.png.webp" },
    ];
    
    const cardsContainer1 = document.getElementById("cards_tech");
    const dotsContainer = document.getElementById("dots");
    let currentIndex1 = 0; // Current index of the first visible image
    
    const visibleCards = 4; // Number of visible images on the screen
    
    // Function to render cards
    function renderCards1() {
      cardsContainer1.innerHTML = ""; // Clear existing cards
    
      // Handle wrapping around the array
      const visiblePersons = [];
      for (let i = 0; i < visibleCards; i++) {
        const index = (currentIndex1 + i) % technlogies.length; // Wrap around using modulo
        visiblePersons.push(technlogies[index]);
      }
    
      // Render the visible cards
      visiblePersons.forEach(person => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${person.image}" alt="Technology Image">
        `;
        cardsContainer1.appendChild(card);
        
      });
    }
    
    // Function to render dots
    function renderDots() {
      dotsContainer.innerHTML = ""; // Clear existing dots
      const numDots = Math.ceil(technlogies.length / visibleCards); // Total number of slides
    
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        if (i === Math.floor(currentIndex1 / visibleCards)) {
          dot.classList.add("active");
        }
        dotsContainer.appendChild(dot);
    
        // Add click event to navigate to specific slide
        dot.addEventListener("click", () => {
          currentIndex1 = i * visibleCards; // Update index
          renderCarousel();
        });
      }
    }
    
    // Function to render the entire carousel
    function renderCarousel() {
            renderCards1();

      renderDots();
    }
    
    document.getElementById("prev-btn2").addEventListener("click", () => {
      currentIndex1 = (currentIndex1 - 1 + technlogies.length) % technlogies.length; // Move to the previous image
      renderCarousel();
    });
    
    document.getElementById("next-btn2").addEventListener("click", () => {
      currentIndex1 = (currentIndex1 + 1) % technlogies.length; // Move to the next image
      renderCarousel();
    });
    
    // Initial render
    renderCarousel();
    