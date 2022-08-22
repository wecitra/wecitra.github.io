import { skills } from './data.js';
skills.map((skill) => { $("#skills").append(`<span>${skill}</span>`); });

import { projects } from './data.js';
$("#all-projects").html(showProjects(projects));

$(".open").click(function () { openModal($(this).data('index')); });

function openModal(index) {
    $(".dialog").removeClass('hidden');
    $(".overlay").removeClass('hidden');

    updateDialog(projects[index]);

    $("#close").on('click', function () {
        $(".dialog").addClass('hidden');
        $(".overlay").addClass('hidden');
    });
}

import { experiences } from './data.js';
experiences.map((experience) => { $("#experiences").append(`
    <div class="experience flex mb-4 [&>*>span]:text-secondary">
        <img src="dist/img/tag.png" alt="" class="w-8 h-8 rounded-full mr-3">
        <div class="self-center mb-3">
            <span class="text-xs">${experience.when} • <a href="${experience.proof}" class="text-primary">${experience.where}</a></span>
            <h1 class="font-semibold">${experience.what}</h1>
            ${experience.detail ? `<span class="text-sm">${experience.detail}</span>` : ''}
        </div>
    </div>`);
});

function updateDialog(project) {
    $(".dialog").html(`
        <h1 class="text-xl lg:text-2xl font-semibold -mb-3">${project.title}</h1>
        <div class="mb-4 [&>.desc]:text-secondary [&>.desc]:text-sm [&>.desc]:lg:text-base">
        
        ${project.desc ? project.desc : `<p class="desc">${project.excerpt}</p>`}</div>

        <img src="dist/img/portfolios/${project.image}" alt="${project.title}">

        <div class="flex justify-end pt-3 border-t-2 border-t-light [&>a]:self-center [&>a>svg]:w-6 [&>a>svg]:h-6 [&>a>svg]:text-secondary [&>a>svg]:mr-3 [&>button]:px-4 [&>button]:py-2 [&>button]:font-semibold [&>button]:bg-primary [&>button]:text-white [&>button]:rounded-md [&>button]:cursor-pointer">

            ${project.github ? `<a href="${project.github}"><svg class="hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></a>` : ``}

            ${project.url ? `<a href="${project.url}"><svg class="hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></a>` : ``}
            
            <button id="close" class="text-sm lg:text-base">Close</button>
        </div>
    `);
}

function showProjects(projects) {
    return `
    <div class="p-5 border-b-2 border-b-light lg:flex lg:flex-wrap">
        ${projects.map((project, i) => `
            <div data-index="${i}" class="lg:w-1/2 relative cursor-pointer open">

                ${project.status ? `<div class="ml-10 lg:ml-14 text-xs text-secondary flex -mt-5 mb-1 lg:mb-0 lg:absolute"><svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-fill" viewBox="0 0 16 16"><path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"/></svg><span>Pinned project</span></div>` : ``}

                <div class="flex mb-4 border-b-2 border-b-light lg:border-b-0">
                    <img src="dist/img/profile.png" alt="Kusuma Wecitra" class="w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-3">
                    <div class="self-center mb-5">
                        <h1 class="font-semibold">${project.title}</h1>
                        <span class="text-sm lg:text-base text-secondary block pr-5">${project.excerpt}</span>
                        <span class="text-sm text-primary block mb-3">${project.tag}</span>
                        <img src="dist/img/portfolios/${project.image}" alt="${project.title}">
                    </div>
                </div>
            </div>
        `).join("")}
    </div>`
}

ScrollReveal().reveal('#skills span', { interval: 100, reset: true });
ScrollReveal().reveal('.profile', { rotate: {x: 45, y: 45, z: 0 }, duration: 1000, reset: true });
ScrollReveal().reveal(`.experience, .open, .all-projects .open`, { origin: 'left', distance: '30px', interval: 100, reset: true});