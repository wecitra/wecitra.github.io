
let projects = [
    {
        title: 'Bekasi City Dashboard',
        url: 'https://satudata.bekasikota.go.id/CityDashboard',
        image: 'portfolio_4.png',
        desc: 'A landing page website that I made during my internship.',
        tag: '#Bootstrap #CSS',
    },
    // {
    //     title: 'Pande.log',
    //     url: 'https://www.bookio.websolutions.web.id/pande/',
    //     image: 'portfolio_7.png',
    //     desc: 'Simple travel log web that I made when trying out CodeIgniter.',
    //     tag: '#CodeIgniter #JavaScript #Bootstrap #CSS',
    // },
    {
        title: 'Web Visual Identity',
        url: 'https://wecitra.github.io/visual-identity-webpage/',
        image: 'portfolio_1.png',
        desc: 'I made it with Bootstrap and additional CSS.',
        tag: '#JavaScript #Bootstrap #CSS',
    },
    {
        title: 'API Movie',
        url: 'https://wecitra.github.io/api-movie/',
        image: 'portfolio_15.png',
        desc: 'Responsive tailwind movies app',
        tag: '#API #JavaScript #Tailwind #CSS',
    },
    {
        title: 'Creative Business Landing Page',
        url: 'https://wecitra.github.io/creative-business/',
        image: 'portfolio_9.png',
        desc: '1st trying to make a landing page with Tailwind.',
        tag: '#Tailwind #CSS',
    },
    {
        title: 'Essences for Life',
        url: 'https://wecitra.github.io/essences-for-life-perfume-webpage/',
        image: 'portfolio_10.png',
        desc: '2nd trying to make a landing page with Tailwind.',
        tag: '#Tailwind #CSS #Flowbit',
    },
    {
        title: 'Joke Maker',
        url: 'https://wecitra.github.io/joke-maker/',
        image: 'portfolio_11.png',
        desc: 'Simple project built with API, JS & CSS.',
        tag: '#API #JavaScript #CSS',
    },
    {
        title: '17\'s TV Dashboard',
        url: 'https://wecitra.github.io/svt.tv/',
        image: 'portfolio_12.png',
        desc: 'Trying to create a project with Tailwind plugin, Flowbit.',
        tag: '#Tailwind #CSS #Flowbit',
    },
    {
        title: 'Hostingin',
        url: 'https://wecitra.github.io/web-hosting/',
        image: 'portfolio_5.png',
        desc: 'Web hosting using Bootstrap.',
        tag: '#JavaScript #Bootstrap #CSS',
    },
    {
        title: 'Habits Mobile App Mockup',
        url: 'https://www.figma.com/proto/U1KNM4ydys0DZwl6UJ5NOy/HabitsAppMockup?scaling=scale-down',
        image: 'portfolio_8.png',
        desc: 'Make it with the figma tool with a bit of seriousness.',
        tag: '#Design #UI #Figma',
    },
    {
        title: 'Portfolio Web Mockup',
        url: 'https://www.figma.com/proto/WbDj9Lu5p8T3tfXhfu3Rdh/Bronze-Portfolio-Web-Design?scaling=scale-down',
        image: 'portfolio_6.png',
        desc: 'This design also was created with figma.',
        tag: '#Design #UI #Figma',
    },
    {
        title: 'Simple To Do',
        url: 'https://wecitra.github.io/simple-to-do-list/',
        image: 'portfolio_14.png',
        desc: 'This To Do is built with JS & CSS.',
        tag: '#JavaScript #CSS',
    },
];

projects.forEach(function({title,url,image,desc,tag}) {
    var allProjects = document.querySelector('#all-projects');

    let a = document.createElement('a');
    a.classList.add('lg:w-1/2');
    a.href = url;
    a.target = '_blank';

    let div = document.createElement('div');
    div.classList.add('flex', 'mb-4', 'border-b-2', 'border-b-light', 'lg:border-b-0');

    let imgProfile = document.createElement('img');
    imgProfile.classList.add('w-8', 'h-8', 'lg:w-12', 'lg:h-12', 'rounded-full', 'mr-3');
    imgProfile.src = 'dist/img/profile.png';
    imgProfile.alt = 'Kusuma Wecitra';

    let body = document.createElement('div');
    body.classList.add('self-center', 'mb-5');

    let h1 = document.createElement('h1');
    h1.classList.add('font-semibold');
    h1.innerHTML = title;

    let spanDesc = document.createElement('span');
    spanDesc.classList.add('text-sm', 'lg:text-base', 'text-secondary', 'block');
    spanDesc.innerHTML = desc;

    let spanTag = document.createElement('span');
    spanTag.classList.add('text-sm', 'text-primary', 'block', 'mb-3');
    spanTag.innerHTML = tag;

    let img = document.createElement('img');
    img.src = 'dist/img/portfolios/' + image;
    img.alt = title;

    body.appendChild(h1);
    body.appendChild(spanDesc);
    body.appendChild(spanTag);
    body.appendChild(img);
    div.appendChild(imgProfile);
    div.appendChild(body);
    a.appendChild(div);

    allProjects.appendChild(a);
});
