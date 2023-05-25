newE = (type) => document.createElement(type);
/******************************************************************************* 
 * @param {Object} team - Object containing the information for each project  
 * @return {Object} - returns card object to append to the Dom
 * @description - Creates team cards to be used on the dom
********************************************************************************/
const projectCardMaker = (team) => {
    const cardMain = newE('div');
    $(cardMain).addClass('projectCard');

    // const card = newE('div');
    // card.id = team.id;
    // $(card).addClass('content');

    // const cardBody = newE('div');
    // $(cardBody).addClass('contentText');
    // $(card).append(cardBody);

    // const cardText = newE('p');
    // $(cardText).html('');
    // $(cardBody).append(cardText);

    const button = newE('button');
    $(button).html("More");
    const buttonCont = newE('div');
    $(buttonCont).addClass('buttonCont');
    
    
    const cardTitle = newE('h2');
    $(cardTitle).html(team.title);
    $(buttonCont).append(cardTitle);
    
    $(buttonCont).append(button);

    // $(cardBody).append(button);
    $(cardMain).append(buttonCont);
    return cardMain;
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