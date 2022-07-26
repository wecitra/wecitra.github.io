const projects = [
    {
        title: 'Build A Blog App With Laravel',
        url: 'https://github.com/doobeedoobeedam/b-log',
        image: 'portfolio_13.png',
        desc: 'B-log is a website that allows to post, edit, save and view blog posts, created to completed learning Laravel Basic.',
        tag: '#Laravel #JavaScript #CSS #Bootstrap',
        // status: '&#9888 Under Development',
    },
    {
        title: 'Bekasi City Dashboard',
        url: 'https://satudata.bekasikota.go.id/CityDashboard',
        image: 'portfolio_4.png',
        desc: 'Bekasi City Dashboard is landing page and also my first assignment during my internship at PT. Ciptadra Softindo.',
        tag: '#Bootstrap #CSS',
    },
    {
        title: 'Pande.log',
        url: 'https://www.bookio.websolutions.web.id/pande/',
        image: 'portfolio_7.png',
        desc: 'Pande.log is a travel log web application that created to finished Uji Kompetensi Keahlian 2022.',
        tag: '#CodeIgniter #JavaScript #Bootstrap #CSS',
    },
    {
        title: 'Web Visual Identity',
        url: 'https://wecitra.github.io/visual-identity-webpage/',
        image: 'portfolio_1.png',
        desc: 'I made this to fulfill a Pemrograman Web dan Perangkat Bergerak assignment.',
        tag: '#JavaScript #Bootstrap #CSS',
    },
    {
        title: 'API Movie',
        url: 'https://wecitra.github.io/api-movie/',
        image: 'portfolio_15.png',
        desc: 'Responsive tailwind movies app.',
        tag: '#API #JavaScript #Tailwind #CSS',
    },
    {
        title: 'Random Quotes API',
        url: 'https://doobeedoobeedam.github.io/random-quote-generator/',
        image: 'portfolio_19.png',
        desc: 'An API full of quotes to bring some joy to your day!',
        tag: '#API #JavaScript #CSS',
    },
    {
        title: 'Creative Business Landing Page',
        url: 'https://wecitra.github.io/creative-business/',
        image: 'portfolio_9.png',
        desc: '1st trying to make a landing page with Tailwind.',
        tag: '#Tailwind #CSS',
    },
    {
        title: 'Old Personal Website',
        url: 'https://wecitra.github.io/old-personal-web//',
        image: 'portfolio_16.png',
        desc: 'My old website.',
        tag: '#JavaScript #Bootstrap #CSS #OwlCarousel #ScrollReveal',
    },
    {
        title: 'Joke Maker',
        url: 'https://wecitra.github.io/joke-maker/',
        image: 'portfolio_11.png',
        desc: 'Simple project built with API, JS & CSS.',
        tag: '#API #JavaScript #CSS',
    },
    {
        title: 'Essences for Life',
        url: 'https://wecitra.github.io/essences-for-life-perfume-webpage/',
        image: 'portfolio_10.png',
        desc: '2nd trying to make a landing page with Tailwind.',
        tag: '#Tailwind #CSS #Flowbit',
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
        title: 'ScissorsRockPaper.js',
        url: 'https://doobeedoobeedam.github.io/ScissorsPaperRock.js/',
        image: 'portfolio_17.png',
        desc: 'This is mini projects for me to learn basic of JS DOM.',
        tag: '#JavaScript #CSS',
    },
    {
        title: 'Simple Calculator',
        url: 'https://doobeedoobeedam.github.io/simple-calculator/',
        image: 'portfolio_18.png',
        desc: 'Simple calculator made in vanilla JS and HTML.',
        tag: '#JavaScript #CSS',
    },
    {
        title: 'Simple To Do',
        url: 'https://wecitra.github.io/simple-to-do-list/',
        image: 'portfolio_14.png',
        desc: 'This To Do is built with JS & CSS.',
        tag: '#JavaScript #CSS',
    },
];

const el = `
    <div class="p-5 border-b-2 border-b-light lg:flex lg:flex-wrap">
        ${projects.map(project => `
            <a href="${project.url}" target="_blank" class="lg:w-1/2 relative">
                ${project.status ? 
                    `<div class="ml-10 lg:ml-14 text-xs text-secondary flex -mt-5 mb-1 lg:mb-0 lg:absolute">
                        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-fill" viewBox="0 0 16 16">
                            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"/>
                        </svg>
                        <span>Pinned project</span>
                    </div>`
                : ``}
                <div class="flex mb-4 border-b-2 border-b-light lg:border-b-0">
                    <img src="dist/img/profile.png" alt="" class="w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-3">
                    <div class="self-center mb-5">
                        <h1 class="font-semibold">${project.title}</h1>
                        ${project.status ? 
                            `<span class="text-sm lg:text-base text-danger block">${project.status}</span>` 
                        : `<span class="text-sm lg:text-base text-secondary block pr-5">${project.desc}</span>`}
                        <span class="text-sm text-primary block mb-3">${project.tag}</span>
                        <img src="dist/img/portfolios/${project.image}" alt="${project.title}">
                    </div>
                </div>
            </a>
        `).join("")}
    </div>`
;

var allProjects = document.querySelector('#all-projects');
allProjects.innerHTML = el;