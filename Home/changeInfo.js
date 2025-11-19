//data
const contentMap = {
    haidua: {
        title: 'Về <span>tụi mình</span>',
        img: 'img/DG_home.png',
        text: `Hai đứa mình đã yêu nhau từ cái nhìn đầu tiên trong ngày đầu gặp mặt, từ những ngày đầu yêu cho đến hiện
            tại thì hai đứa mình đang rất hạnh phúc trong mối quan hệ ngày
            nhiều lúc làm nhau buồn hay là giận dỗi nhau nhưng rồi tụi mình vẫn làm hoà lại với nhau và đồng hành
            cùng nhau cho đến hiện tại
            và sau này nữa. Hãy là một phần trong cuộc sống của Cục Mỡ nha Cục Dàng ❤️❤️❤️`,

        buttons: [
            { id: 'mo', label: 'Cục Mỡ' },
            { id: 'dang', label: 'Cục Dàng' }
        ]
    },
    mo: {
        title: 'Về <span>Cục Mỡ</span>',
        img: 'img/Duck.jpg',
        text: `Mình là Lê Quốc Hoài Đức <br/>
            Mình yêu Ngọc Giang rất nhiều, từ lần đầu gặp mặt mình đã rung động trước nụ cười và sự đáng yêu của ẻm mình mê ẻm mất thôi <br/>
            Mình rất hậu đậu hay làm Cục dàng của mình buồn nhưng mà ẻm vẫn yêu thương mình hết mực <br/>
            Từ ngày có em bên đời thì cuộc sống của mình như được thay đổi theo hướng tích cực, mình rất hạnh phúc vì điều đó<br/>
            Mục tiêu của mình là trở nên đủ bản lĩnh và tự tin hơn để là chỗ dựa vững chắc cho em để có thể là người chồng của em trong tương lai<br/>
            From HoaiDuc with love🐏❤️`,
        buttons: [
            { id: 'haidua', label: 'Hai đứa' },
            { id: 'dang', label: 'Cục Dàng' }
        ]
    },
    dang: {
        title: 'Về <span>Cục Dàng</span>',
        img: 'img/Zann.jpg',
        text: `Mình là Nguyễn Thị Ngọc Giang <br/>
            Mình là Cục Dàng của Hoài Đức<br/>
            Mình là cô gái xinh đẹp, nấu ăn ngon, và là một người tốt bụng <br/>
            Mình luôn được mọi người xung quanh yêu quý <br/>
            Mình thích ăn kem đặc biệt là kem matcha, Hoài Đức hay dẫn mình đi lắm <br/>
            Nhiều lúc mình giận Cục mỡ vì ảnh hay quên, hay vô tâm không để ý tới mình, những lúc đó mình im lặng nhưng mà Cục Mỡ luôn dỗ mình làm mình vui trở lại<br/>
            Mình rất yêu Cục Mỡ của mình và mong rằng cả hai sẽ mãi bên nhau, cùng nhau trải qua những chuyện trong cuộc sống ❤️🦀<br/>
            From Cục Dàng with love`,
        buttons: [
            { id: 'haidua', label: 'Hai đứa' },
            { id: 'mo', label: 'Cục Mỡ' }
        ]
    }
};

// declare const for into content
const aboutWrapper = document.querySelector('.about-container');

//render content into HTML
function renderContent(type) {
    const data = contentMap[type];
    if (!data) return;

    //create buttons from array buttons
    const buttonsHTML = data.buttons
        .map(
            (btn) =>
                `<a href="#${btn.id}" class="btn" id="${btn.id}">${btn.label}</a>`
        )
        .join('');

    //attach new content into aboutWrapper
    aboutWrapper.innerHTML = `
    <div class="about-img">
      <img src="${data.img}" alt="">
    </div>
    <div class="about-content">
      <h2 class="heading">${data.title}</h2>
      <p>${data.text}</p>
      <div class="btn-group">${buttonsHTML}</div>
    </div>
    `;
}

// animation by gsap
function animateContent() {
    const img = aboutWrapper.querySelector('.about-img');
    const heading = aboutWrapper.querySelector('.heading');
    const paragraph = aboutWrapper.querySelector('p');
    const buttons = aboutWrapper.querySelector('.btn');

    //first state

    /* global gsap */

    gsap.fromTo(
        img,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 }
    );
    gsap.to(heading, { opacity: 1, y: 0, duration: 0.5, delay: 0.2 });
    gsap.to(paragraph, { opacity: 1, y: 0, duration: 0.5, delay: 0.4 });
    gsap.to(buttons, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 0.8,
        stagger: 0.1
    });
}

// function change content smooth
function changeContent(type) {
    /* global gsap */
    gsap.to(aboutWrapper, {
        opacity: 1,
        y: 20,
        duration: 0.4,
        onComplete: () => {
            renderContent(type);
            animateContent();
        }
    });
}

// event click
aboutWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        e.preventDefault(); // không cho nhảy thẳng đến #id
        changeContent(e.target.id);
    }
});

renderContent('haidua');
animateContent();
