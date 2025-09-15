//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

//typed js
const typed = new Typed(".multiple-text", {
  strings: ["cặp đôi đáng iu", "cặp đôi siêu quậy", "cặp đôi hoàn hảo"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// change information at about

const aboutInfo = document.getElementById("about");

const haiDua = `
<div class="about-img">
    <img src="img/DG_home.png" alt="">
</div>
<div class="about-content">
    <h2 class="heading">Về <span>tụi mình</span></h2>
    <p>
        Hai đứa mình đã yêu nhau từ cái nhìn đầu tiên trong ngày đầu gặp mặt, từ những ngày đầu yêu cho đến hiện tại thì hai đứa mình đang rất hạnh phúc trong mối quan hệ ngày
                nhiều lúc làm nhau buồn hay là giận dỗi nhau nhưng rồi tụi mình vẫn làm hoà lại với nhau và đồng hành cùng nhau cho đến hiện tại
                và sau này nữa. Hãy là một phần trong cuộc sống của Cục Mỡ nha Cục Dàng ❤️❤️❤️
    </p>
    <div class="btn-group">
        <a href="#mo" class="btn" id="mo">Cục Mỡ</a>
        <a href="#dang" class="btn" id="dang">Cục Dàng</a>
    </div>
</div>
`;

const cucMo = `
<div class="about-img">
            <img src="img/DG_home.png" alt="">
        </div>

        <div class="about-content">
            <h2 class="heading">Về <span>Cục Mỡ</span></h2>
            <p>
            Mình là Lê Quốc Hoài Đức <br/>
            Mình yêu Ngọc Giang rất nhiều, từ lần đầu gặp mặt mình đã rung động trước nụ cười và sự đáng yêu của ẻm mình mê ẻm mất thôi <br/>
            Mình rất hậu đậu hay làm Cục dàng của mình buồn nhưng mà ẻm vẫn yêu thương mình hết mực <br/>
            Từ ngày có em bên đời thì cuộc sống của mình như được thay đổi theo hướng tích cực, mình rất hạnh phúc vì điều đó<br/>
            Mục tiêu của mình là trở nên đủ bản lĩnh và tự tin hơn để là chỗ dựa vững chắc cho em để có thể là người chồng của em trong tương lai<br/>
            From HoaiDuc with love🐏❤️
            </p>
            <div class="btn-group">
            <a href="#haidua" class="btn">Về hai đứa</a>
            <a href="#dang" class="btn">Cục Dàng</a>
        </div>
`;

const cucDang = `
<div class="about-img">
            <img src="img/DG_home.png" alt="">
        </div>

        <div class="about-content">
            <h2 class="heading">Về <span>Cục Dàng</span></h2>
            <p>
            Mình là Nguyễn Thị Ngọc Giang <br/>
            Mình là Cục Dàng của Hoài Đức<br/>
            Mình là cô gái xinh đẹp, nấu ăn ngon, và là một người tốt bụng <br/>
            Mình luôn được mọi người xung quanh yêu quý <br/>
            Mình thích ăn kem đặc biệt là kem matcha, Hoài Đức hay dẫn mình đi lắm <br/>
            Nhiều lúc mình giận Cục mỡ vì ảnh hay quên, hay vô tâm không để ý tới mình, những lúc đó mình im lặng nhưng mà Cục Mỡ luôn dỗ mình làm mình vui trở lại<br/>
            Mình rất yêu Cục Mỡ của mình và mong rằng cả hai sẽ mãi bên nhau, cùng nhau trải qua những chuyện trong cuộc sống ❤️🦀<br/>
            From Cục Dàng with love
            </p>
            <div class="btn-group">
            <a href="#mo" class="btn">Cục Mỡ</a>
            <a href="#haidua" class="btn">Về hai đứa</a>
        </div>
`;


const aboutWrapper = document.querySelector("#about .about-container");

aboutWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        e.preventDefault();
        const target = e.target.id;
        if (target === "mo") changeContent(cucMo);
        if (target === "dang") changeContent(cucDang);
        if (target === "haidua") changeContent(haiDua);
    }
});
function changeContent(newContent) {
    gsap.to(aboutWrapper, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        onComplete: () => {
            aboutWrapper.innerHTML = newContent;
            const img = aboutWrapper.querySelector(".about-img");
            const heading = aboutWrapper.querySelector("h2");
            const paragraphs = aboutWrapper.querySelectorAll("p");
            const buttons = aboutWrapper.querySelectorAll(".btn");

            gsap.set([img, heading, paragraphs, buttons], {opacity: 0, y: 20});
            gsap.fromTo(img, {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 0.6});
            gsap.to(heading, {opacity: 1, y: 0, duration: 0.5, delay: 0.2});
            gsap.to(paragraphs, {opacity: 1, y: 0, duration: 0.5, stagger: 0.05, delay: 0.4});
            gsap.to(buttons, {opacity: 1, y: 0, duration: 0.4, delay: 0.8, stagger: 0.1});
        }
    });
}
