import { skills } from './data.js';
skills.map((skill) => { $("#skills").append(`<span>${skill}</span>`); });

import { experiences } from './data.js';

// Experiences
experiences.map((experience) => { $("#experiences").append(`
    <div class="experience flex mb-4 [&>*>span]:text-secondary">
        <img src="dist/img/tag.png" alt="Experience" class="w-6 h-6 rounded-full mr-3 bg-primary mt-2">
        <div class="self-center mb-3">
            <span class="text-xs">${experience.when} • <a href="${experience.proof}" class="text-primary">${experience.where}</a></span>
            <h1 class="font-semibold text-sm text-dark dark:text-soft">${experience.what}</h1>
            ${experience.detail ? `<span class="text-sm text-justify text-soft">${experience.detail}</span>` : ''}
        </div>
    </div>`);
});

import { projects } from './data.js';
$("#all-projects").html(showProjects(projects));

ScrollReveal().reveal('#skills span', { interval: 100, reset: true });
ScrollReveal().reveal('.img-profile, #switch-theme', { rotate: {x: 45, y: 45, z: 0 }, duration: 1000, reset: true });
ScrollReveal().reveal(`.open`, { origin: 'left', distance: '30px', duration: 1000, reset: true});
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
        <h1 class="text-xl lg:text-2xl font-semibold -mb-3 text-primary">${project.title}</h1>
        <div class="mb-4 [&>p]:text-secondary [&>p]:dark:text-soft [&>p]:text-sm [&>p]:lg:text-base [&>span]:font-semibold [&>span]:text-dark [&>span]:dark:text-primary [&>p]:tracking-wide">
        
        ${project.desc ? project.desc : `<p class="desc">${project.excerpt}</p>`}</div>

        <img src="dist/img/portfolios/${project.image}" alt="${project.title}">

        <div class="flex justify-end pt-3 border-t border-t-light dark:border-t-secondary [&>a]:self-center [&>a>svg]:w-6 [&>a>svg]:h-6 [&>a>svg]:text-secondary [&>a>svg]:mr-3 [&>button]:px-4 [&>button]:py-2 [&>button]:font-semibold [&>button]:bg-primary [&>button]:text-white [&>button]:rounded-md [&>button]:cursor-pointer">

            ${project.github ? `<a href="${project.github}"><svg class="hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></a>` : ``}

            ${project.url ? `<a href="${project.url}"><svg class="hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></a>` : ``}
            
            <button id="close" class="text-sm lg:text-base">Close</button>
        </div>
    `);
}

function showProjects(projects) {
    return `
        ${projects.map((project, i) => `
            <div data-index="${i}" class="relative cursor-pointer open project mix ${project.category} overflow-hidden rounded-md border border-light dark:border-0 dark:bg-soft-dark">
                <div class="mb-3 lg:mb-0">
                        <img src="dist/img/portfolios/${project.image}" alt="${project.title}">
                        <div class="px-3 py-3">
                            <h1 class="font-semibold text-dark dark:text-soft tracking-wide">${project.title}</h1>
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

// Ubah tema sesuai setting sebelumnya
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

$('#switch-theme').click(() => {

    // kalo sebelumnya diset via local storage
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // kalo TIDAK diset via local storage sebelumnya
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});