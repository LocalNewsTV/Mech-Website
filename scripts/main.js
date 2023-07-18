newE = (type) => document.createElement(type);
/******************************************************************************* 
 * @param {Object} team - Object containing the information for each project  
 * @return {Object} - returns card object to append to the Dom
 * @description - Creates team cards to be used on the dom
********************************************************************************/
const projectCardMaker = (project) => {
    const cardAnch = newE('a');
    cardAnch.href = project.href;
    
    const cardMain = newE('div');
    $(cardMain).addClass('projectCard');

    const card = newE('div');
    card.id = project.id;
    $(card).addClass('content');
    
    const imageContainer = newE('div');
    $(imageContainer).addClass('imgCont');
    const cardImage = newE('img');
    cardImage.src = project.sourceImage;
    cardImage.alt = project.description;
    $(imageContainer).append(cardImage);
    $(card).append(imageContainer);

    const cardBody = newE('div');
    $(cardBody).addClass('contentText');
    $(card).append(cardBody);

    const cardTitle = newE('h3');
    $(cardTitle).html(project.title);
    $(cardBody).append(cardTitle);

    const cardText = newE('p');
    $(cardText).html(project.description);
    $(cardBody).append(cardText);

    const button = newE('button');
    $(button).on('click', ()=>{window.location.href=`${project.href}`});
    $(button).html("Learn More");
    const buttonCont = newE('div');
    $(buttonCont).addClass('buttonCont');

    const gear = newE('img');
    gear.src = "images/gear.svg";
    $(gear).addClass('gear-item');
    $(buttonCont).append(button, gear);
    // $(cardBody).append(button);
    $(cardMain).append(card, buttonCont);
    $(cardMain).on('click', () => { window.location.href=project.href; } );
    return cardMain;
}

const sponsorCardMaker = (sponsor) => {
    const cardAnch = newE('a');
    cardAnch.href = sponsor.href;

    const cardMain = newE('div');
    $(cardMain).addClass('sponsorCard');

    const card = newE('div');
    card.id = sponsor.id;
    $(card).addClass('content');

    const imageContainer = newE('div');
    $(imageContainer).addClass('imgCont')
    const cardImage = newE('img');
    cardImage.src = sponsor.sourceImage;
    cardImage.alt = sponsor.title;
    $(imageContainer).append(cardImage);
    $(card).append(imageContainer);

    const cardBody = newE('div');
    $(cardBody).addClass('contentTextTitle');
    $(card).append(cardBody);

    const cardTitle = newE('h2');
    $(cardTitle).html(sponsor.title);
    $(cardBody).append(cardTitle);

    const button = newE('button');
    $(button).on('click', ()=>{window.location.href=`${sponsor.href}`});
    $(button).html("Learn More");
    const buttonCont = newE('div');
    $(buttonCont).addClass('buttonCont');
    $(buttonCont).append(button);
    $(cardMain).append(card, buttonCont);
    $(cardMain).on('click', () => { window.location.href=sponsor.href; } );
    return cardMain;
}

const financialSponsorCardMaker = (sponsor) => {
    const cardAnch = newE('a');
    cardAnch.href = sponsor.href;

    const cardMain = newE('div');
    $(cardMain).addClass('financialSponsorCard');
    $(cardMain).addClass(sponsor.tier);
    const card = newE('div');
    card.id = sponsor.id;
    $(card).addClass('content');

    const imageContainer = newE('div');
    $(imageContainer).addClass('imgCont')
    const cardImage = newE('img');
    cardImage.src = sponsor.sourceImage;
    cardImage.alt = sponsor.title;
    cardImage.title = sponsor.title;
    $(imageContainer).append(cardImage);
    $(card).append(imageContainer);

    const cardBody = newE('div');
    $(cardBody).addClass('contentTextTitle');
    $(card).append(cardBody);

    // const cardTitle = newE('h2');
    // $(cardTitle).html(sponsor.title);
    // $(cardBody).append(cardTitle);

    const button = newE('button');
    $(button).on('click', ()=>{window.location.href=`${sponsor.href}`});
    $(button).html("Learn More");
    const buttonCont = newE('div');
    $(buttonCont).addClass('buttonCont');
    $(buttonCont).append(button);
    $(cardMain).append(card, buttonCont);
    $(cardMain).on('click', () => { window.location.href=sponsor.href; } );
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

const loadSponsors = () => {
    sponsors.forEach((sponsor) => {
        $('#sponsorsBody').append(sponsorCardMaker(sponsor));
    });
    financialSponsors.forEach((sponsor) => {
        $('#financialSponsors').append(financialSponsorCardMaker(sponsor));
    });
}

/******************************************************************************* 
 * @description Document Ready function that calls everything needed to fill in the content and run API calls
********************************************************************************/
$(document).ready(()=>{
    //grabs url to choose which function to run
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

    if(sPage === "sponsors.html"){
        loadSponsors();
        loadFinancialSponsors();
    } else {
        loadProjects();
    }
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
