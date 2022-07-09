$('.owl-carousel').owlCarousel({
    startPosition: 0,
    pagination: true,
    responsiveClass: true,
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='bx bxs-chevron-left'></i>", "<i class='bx bxs-chevron-right' ></i>"],
    autoplay: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

const sr = ScrollReveal({
    distance: '30px',
    duration: 1000,
    reset: true,
});

sr.reveal(`.btn, .carousel-wrap, .all-projects .card`, {
    origin: 'bottom',
    interval: 200,
});

sr.reveal(`.hero-text, .skill, .stepprogress`, {
    interval: 200,
    origin: 'left'
})

sr.reveal('.title', {
    rotate: {
        x: 45,
        y: 45,
        z: 0
    },
    duration: 1000
});

let projects = [
    {
        title: 'Bekasi City Dashboard',
        url: 'https://satudata.bekasikota.go.id/CityDashboard',
        img: 'portfolio_4.png',
        desc: 'A landing page website that I made during my internship.',
    },
    {
        title: 'Pande.log',
        url: 'https://www.bookio.websolutions.web.id/pande/',
        img: 'portfolio_7.png',
        desc: 'Simple travel log web that I made when trying out CodeIgniter.',
    },
    {
        title: 'Web Visual Identity',
        url: 'https://wecitra.github.io/visual-identity-webpage/',
        img: 'portfolio_1.png',
        desc: 'I made it with Bootstrap and additional CSS.',
    },
    {
        title: 'Creative Business Landing Page',
        url: 'https://wecitra.github.io/creative-business/',
        img: 'portfolio_9.png',
        desc: '1st trying to make a landing page with Tailwind.',
    },
    {
        title: 'Essences for Life',
        url: 'https://wecitra.github.io/essences-for-life-perfume-webpage/',
        img: 'portfolio_10.png',
        desc: '2nd trying to make a landing page with Tailwind.',
    },
    {
        title: 'Hostingin',
        url: 'https://wecitra.github.io/web-hosting/',
        img: 'portfolio_5.png',
        desc: 'Web hosting using Bootstrap.',
    },
    {
        title: 'Joke Maker',
        url: 'https://wecitra.github.io/joke-maker/',
        img: 'portfolio_11.png',
        desc: 'Simple project built with API, JS & CSS.',
    },
    {
        title: '17\'s TV Dashboard',
        url: 'https://wecitra.github.io/svt.tv/',
        img: 'portfolio_12.png',
        desc: 'Trying to create a project with Tailwind plugin, Flowbit.',
    },
    {
        title: 'Habits Mobile App Mockup',
        url: 'https://www.figma.com/proto/U1KNM4ydys0DZwl6UJ5NOy/HabitsAppMockup?scaling=scale-down',
        img: 'portfolio_8.png',
        desc: 'Make it with the figma tool with a bit of seriousness.',
    },
    {
        title: 'Portfolio Web Mockup',
        url: 'https://www.figma.com/proto/WbDj9Lu5p8T3tfXhfu3Rdh/Bronze-Portfolio-Web-Design?scaling=scale-down',
        img: 'portfolio_6.png',
        desc: 'This design also was created with figma.',
    },
    {
        title: 'Simple To Do',
        url: 'https://wecitra.github.io/simple-to-do-list/',
        img: 'portfolio_14.png',
        desc: 'This To Do is built with JS & CSS.',
    },
];

projects.forEach(function({title,url,img,desc}) {
    var allProjects = document.querySelector('#all-projects');

    let card = document.createElement('div');
    card.classList.add('card', 'item', 'mb-3', 'shadow-sm');
    card.style.width = '400px';

    let image = document.createElement('img');
    image.src = 'assets/img/portfolios/' + img;
    image.classList.add('card-img-top');
    image.style.width = '100%';
    image.alt = title;

    let body = document.createElement('div');
    body.classList.add('card-body');

    let href = document.createElement('a');
    href.classList.add('text-decoration-none', 'text-dark');
    href.href = url;
    href.target = '_blank'
    
    let h5 = document.createElement('h5');
    h5.classList.add('card-title', 'fs-4');
    h5.innerHTML = title;

    let p = document.createElement('p');
    p.classList.add('card-text', 'fs-5');
    p.innerHTML = desc;

    body.appendChild(href);
    href.appendChild(h5);
    body.appendChild(p);
    card.appendChild(image);
    card.appendChild(body);

    allProjects.appendChild(card);
});
