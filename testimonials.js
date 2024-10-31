document.addEventListener("DOMContentLoaded", function () {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const testimonials = document.querySelectorAll(".testimonial");
  const totalTestimonials = testimonials.length;
  const testimonialsPerPage = 3; // Number of testimonials to show at a time
  let currentIndex = 0;

  function updateTestimonials() {
    const startIndex = currentIndex * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;

    // Show testimonials within the current range
    testimonials.forEach((testimonial, index) => {
      if (index >= startIndex && index < endIndex) {
        testimonial.style.display = "block";
        setTimeout(() => {
          testimonial.classList.add("visible");
        }, 50); // Slight delay to trigger the transition
      } else {
        testimonial.style.display = "none";
        testimonial.classList.remove("visible");
      }
    });

    // Apply transform to create a sliding effect
    const offset = -currentIndex * (100 / testimonialsPerPage);
    testimonialsContainer.style.transform = `translateX(${offset}%)`;
  }

  function showNextTestimonial() {
    currentIndex =
      (currentIndex + 1) % Math.ceil(totalTestimonials / testimonialsPerPage);
    updateTestimonials();
  }

  // Initialize the testimonials
  updateTestimonials();

  // Auto-scroll every 5 seconds
  setInterval(showNextTestimonial, 5000);
});
