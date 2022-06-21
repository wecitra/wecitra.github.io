$.getJSON('assets/projects.json', function (result) {
    let projects = result;
    $.each(projects, function (i, data) {
        $('#all-projects').append(`
            <div class="card  item mb-3 shadow-sm" style="width: 400px;">
                <img src="assets/img/portfolios/`+ data.image +`" class="card-img-top" width="100%" alt="`+ data.title +`">
                <div class="card-body">
                    <a href="`+ data.url +`" target="_BLANK" class="text-decoration-none text-dark">
                        <h5 class="card-title fs-4">`+ data.title +`</h5>
                    </a>
                    <p class="card-text fs-5">`+ data.desc +`</p>
                </div>
            </div>
        `)
    })
})

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

// document.oncontextmenu = new Function("return false");