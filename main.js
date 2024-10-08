function showProjectDetails(title, projectDocs, demoLink) {
    if (!projectDocs) {
        window.location.href = demoLink;
    } else {
        $("#projectModalLabel").text(title);
        $("#pdfIframe").attr("src", "assets/docs/" + projectDocs + "#toolbar=0");
        $("#projectModal").modal("show");
    }
}
function closeModal() {
    $("#projectModal").modal("hide");
}
fetch("https://65f8066fb4f842e80886a484.mockapi.io/api/v1/projects")
    .then((response) => response.json())
    .then((projects) => {
        const displayError = $("#display-error");
        displayError.css("display", "none");
        const projectsContainer = $("#projects-container");
        projects.reverse().sort((a, b) => b.info.year - a.info.year);
        projects.forEach((project) => {
            const projectDiv = $("<div>").addClass("project");
            projectDiv.html(
                `<div class="col ${project.projectDocs || project.linkDemo ? "clickable" : ""
                }"${project.projectDocs || project.linkDemo
                    ? `onclick="showProjectDetails('${project.projectName}', '${project.projectDocs}', '${project.linkDemo}')"`
                    : ""
                }><div class="card border-0 bg-transparent"><img src="assets/images/${project.projectImg
                }"class="card-img-top rounded-0 mb-3"alt="${project.projectName
                }"/><h6 class="card-title fw-bold text-uppercase">${project.projectName
                }─</h6><p class="card-text text-uppercase font-xs">${project.info.year
                } / ${project.info.stack.join(" / ")}</p></div></div>`
            );
            projectsContainer.append(projectDiv);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        const displayData = $("#display-data");
        displayData.css("display", "none");
        const displayError = $("#display-error");
        displayError.css("display", "table");
        const errorImage = $("<img>")
            .attr("src", "assets/images/error.png")
            .attr("alt", "Whoopsie");
        displayError.append(errorImage);
        const errorMessage = $("<h3>").text(
            "Whoopsie! Data was not found! I am too tired to load the data."
        );
        errorMessage.append(
            '<br>Please check back soon or report to <a class="text-dark text-decoration-none" href="mailto:wecitra49@gmail.com">Citra</a> 😭🙏'
        );
        displayError.append(errorMessage);
    });
