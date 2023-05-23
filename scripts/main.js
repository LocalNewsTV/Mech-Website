newE = (type) => document.createElement(type);
/******************************************************************************* 
 * @param {Object} project - Object containing the information for each project  
 * @return {Object} - returns card object to append to the Dom
 * @description - Creates project cards to be used on the dom
********************************************************************************/
const projectCardMaker = (project) => {
    const cardMain = newE('div');
    $(cardMain).addClass('projectCard');

    const card = newE('div');
    card.id = project.id;
    $(card).addClass('content');

    const cardBody = newE('div');
    $(cardBody).addClass('contentText');
    $(card).append(cardBody);

    const cardTitle = newE('h2');
    $(cardTitle).html(project.title);
    $(cardBody).append(cardTitle);

    const cardText = newE('p');
    $(cardText).html('');
    $(cardBody).append(cardText);

    const button = newE('button');
    $(button).html("More");
    const buttonCont = newE('div');
    $(buttonCont).addClass('buttonCont');
    $(buttonCont).append(button);
    // $(cardBody).append(button);
    $(cardMain).append(card, buttonCont);
    return cardMain;
}
/******************************************************************************* 
 * @description - runs an interval updating the clock displayed in PDT 
********************************************************************************/
const startNavBarTime = () => {
    const theTime = () => {
        const date = new Date();
        $('#time').html(date.toLocaleTimeString('en-US', contact.timeZone));
    }
    theTime();
    setInterval(theTime, 1000);
}
/******************************************************************************* 
 * @description - Iterates through each element in the projects array and appends the 
 * returned value from projectCardMaker() to the Projects Body
********************************************************************************/
const loadProjects = () => {
    projects.forEach((project) => {
        $('#projectsBody').append(projectCardMaker(project));
    });
}
/******************************************************************************* 
 * @description Document Ready function that calls everything needed to fill in the content and run API calls
********************************************************************************/
$(document).ready(()=>{
    loadProjects();
});

/******************************************************************************* 
 * Event Listeners / Anonymous Functions
********************************************************************************/
/** @description - Smooth scrolling functionality */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/** @description - Resize event that will Render in / Remove the Alexandra Falls video depending on size of viewports */ 
$(window).resize(()=>{
    pixelWidth = 900;
    background = $('#background-video').css('background') == 'url(images/bgVid.m4v)' ? true : false; 
    if(parseInt(window.innerWidth) >= pixelWidth && !background){
        $('#background-video').css('background', 'url(images/bgVid.m4v)')
        $('#background-video').attr("src", 'images/bgVid.m4v')
    }
    else if(parseInt(window.innerWidth) < pixelWidth && background){
        $('#background-video').css('background', '');
        $('#background-video').removeAttr('src');
    }
});

$('#contactSquare').on("click", circle);