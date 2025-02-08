const testimonials = [
  {
    name: "Resot RQ",
    urlphoto:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "With Apple, we have finally accomplished things that have been waiting forever to get done.",
  },
  {
    name: "Bat Man RQ",
    urlphoto:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I highly recommend Apple. It has been so important for us as we continue to grow our company.",
  },
  {
    name: "HOLK AVG",
    urlphoto:
      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "We can't understand how we've been living without Apple.",
  },
  {
    name: "THOR AVG",
    urlphoto:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I have tried a few software of this kind, and Apple is the best by far!",
  },
];

const photoEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userEl = document.querySelector(".username");

let count = 0;

function testimonialSlide() {
  const { name, urlphoto, text } = testimonials[count];

  photoEl.src = urlphoto;
  textEl.innerText = text;
  userEl.innerText = name;

  count = (count + 1) % testimonials.length;

  setTimeout(testimonialSlide, 2000);
}

testimonialSlide();
