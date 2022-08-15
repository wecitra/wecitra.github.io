var openDialog2 = document.querySelectorAll('.open2');
openDialog2.forEach(() => { openModal(openDialog2) });

var dialog = document.querySelectorAll('.dialog');
var overlay = document.querySelectorAll('.overlay');
var allProjects = document.querySelector('#all-projects');

import { projects } from './data.js';
allProjects.innerHTML = showProjects(projects);
var openDialog = document.querySelectorAll('.open');

openDialog.forEach(() => { openModal(openDialog) });

function openModal(element) {
    element.forEach(e => e.addEventListener('click', function () {
        dialog.forEach(d => d.classList.remove('hidden'));
        overlay.forEach(o => o.classList.remove('hidden'));
    
        const index = this.dataset.index;
        const project = projects[index];
        updateDialog(project);
    
        var closeDialog = document.querySelector('#close');
        closeDialog.addEventListener('click', function () {
            dialog.forEach(d => d.classList.add('hidden'));
            overlay.forEach(o => o.classList.add('hidden'));
        });
    }));
}

function updateDialog(project) {
    dialog.forEach(d => 
        d.innerHTML = `
            <h1 class="text-xl lg:text-2xl font-semibold -mb-3">${project.title}</h1>
            <div class="mb-4">
                ${project.desc ? project.desc : `<p class="text-secondary">${project.excerpt}</p>`}
            </div>
            <img src="dist/img/portfolios/${project.image}" alt="${project.title}">

            <div class="flex justify-end pt-3 border-t-2 border-t-light">
                ${project.github ? `<a href="${project.github}" class="self-center">
                    <svg class="w-6 h-6 text-secondary hover:text-primary transition-colors mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </a>` : ``}
                ${project.url ? `<a href="${project.url}" class="self-center">
                    <svg class="w-6 h-6 text-secondary hover:text-primary transition-colors mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                </a>` : ``}
                <button id="close" class="px-4 py-2 font-semibold bg-primary text-white cursor-pointer rounded-md text-sm lg:text-base">Close</button>
            </div>
        `)
}

function showProjects(projects) {
    return `<div class="p-5 border-b-2 border-b-light lg:flex lg:flex-wrap">
        ${projects.map((project, i) => `
            <div data-index="${i}" class="lg:w-1/2 relative cursor-pointer open">
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
                        <span class="text-sm lg:text-base text-secondary block pr-5">${project.excerpt}</span>
                        <span class="text-sm text-primary block mb-3">${project.tag}</span>
                        <img src="dist/img/portfolios/${project.image}" alt="${project.title}">
                    </div>
                </div>
            </div>
        `).join("")}
    </div>`
}