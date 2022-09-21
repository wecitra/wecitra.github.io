import { skills } from './data.js';
skills.map((skill) => { $("#skills").append(`<span>${skill}</span>`); });

import { experiences } from './data.js';

// Experiences
experiences.map((experience) => { $("#experiences").append(`
    <div class="experience flex mb-4 [&>*>span]:text-secondary">
        <img src="dist/img/tag.png" alt="Experience" class="w-6 h-6 rounded-full mr-3 bg-primary mt-2">
        <div class="self-center mb-3">
            <span class="text-xs">${experience.when} • <a href="${experience.proof}" class="text-primary">${experience.where}</a></span>
            <h1 class="font-semibold text-sm">${experience.what}</h1>
            ${experience.detail ? `<span class="text-sm text-justify">${experience.detail}</span>` : ''}
        </div>
    </div>`);
});

import { projects } from './data.js';
$("#all-projects").html(showProjects(projects));

ScrollReveal().reveal('#skills span', { interval: 100, reset: true });
ScrollReveal().reveal('.img-profile', { rotate: {x: 45, y: 45, z: 0 }, duration: 1000, reset: true });
ScrollReveal().reveal(`.open`, { origin: 'left', distance: '30px', interval: 100, reset: true});
ScrollReveal().reveal(`.experience`, { origin: 'right', distance: '30px', interval: 100, reset: true});

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
        ${projects.map((project, i) => `
            <div data-index="${i}" class="relative cursor-pointer open project mix ${project.category}">
                <div class="mb-3 lg:mb-0 border border-light rounded-md overflow-hidden">
                        <img src="dist/img/portfolios/${project.image}" alt="${project.title}">
                        <div class="px-3 py-3">
                            <h1 class="font-semibold">${project.title}</h1>
                            <span class="text-sm text-primary block">${project.tag}</span>
                        </div>
                </div>
            </div>
        `).join("")}`
}

mixitup('.projects', {
    selectors: { target: '.project' },
    animation: { duration: 300 }
});

$(".mixitup-filter").click(function() {
    $(".mixitup-filter").removeClass('text-white font-semibold bg-primary rounded-t-md');
    $(".mixitup-filter").addClass('text-secondary');
    
    $(this).removeClass('text-secondary');
    $(this).addClass('text-white font-semibold bg-primary rounded-t-md');
});