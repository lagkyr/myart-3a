AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzYuXSbq60ep4f-NrsVx9yOGRdWBoJoBvh87nSHioTD7FHt1_z-g2CnOIxMLb8Wh7lB/exec'
      
      const form = document.forms['contact1-form']
      
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => alert("Tank you! Your form is submitted succesfuly"))
          .then(() => { window.location.reload(); })
          .catch(error =>console.error('Error!', error.message))
      })