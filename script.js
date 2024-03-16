function adjustMargins() {
    const leftColumn = document.querySelector(".left-column");
    const rightColumn = document.querySelector(".right-column");

    if (leftColumn) {
        leftColumn.style.opacity = '0';
        rightColumn.style.opacity = '0';
    }

    const profilePic = document.querySelector('.profile-pic');        
    if (profilePic){
        profilePic.src = 'images/neurips-modified.png';
        profilePic.style.opacity = '1';
    }

    // Get the width of the left column
    if (window.innerWidth >= 600) {
        if (leftColumn) {
            const leftColumnWidth = leftColumn.offsetWidth;
            const viewportFivePercent = window.innerWidth * 0.05;
    
            // Set the left margin of the right column
            const totalMargin = leftColumnWidth + viewportFivePercent; 
            rightColumn.style.marginLeft = `${totalMargin}px`;
            rightColumn.style.width = '60%';
            rightColumn.style.padding = '20px';
            rightColumn.style.marginTop = '0';

            const element = document.querySelector('.right-column'); 
            const overflowedHeight = element.scrollHeight - element.clientHeight;
            const hrMarginTop = overflowedHeight + 100;    
            const hr = document.getElementsByTagName('hr')[0];
            hr.style.marginTop = `${hrMarginTop}px`;

            const publicationPageContainer = document.querySelector('.publication-page-container');
            if (publicationPageContainer) {
                publicationPageContainer.style.marginRight = '5%';
            }

            const socialIconSvg = document.querySelectorAll('.social-icon-svg');
            if (socialIconSvg) {
                for (const icon of socialIconSvg) {
                    // Do something with the element
                    icon.style.width = '30px';
                    icon.style.height = '30px';
                }
            }
            const emailAdress = document.querySelector('.email-address');
            if (emailAdress) {
                emailAdress.style.fontSize = '20px';
            }

            const email = document.querySelector('.email');
            if (email) {
                email.style.marginTop = '5px';
                email.style.marginBottom = '5px';
            }
        }
        const menu = document.querySelector('.menu');
        menu.classList.remove('active');
        leftColumn.classList.remove('activated');

    }
    else {
        // Clear the inline style, letting CSS handle the margin
        if (rightColumn){
            rightColumn.style.marginLeft = '5%';
            rightColumn.style.marginRight = '5%'; 
            rightColumn.style.width = '90%';
            rightColumn.style.padding = '0';
            rightColumn.style.margin = '0';
            rightColumn.style.marginTop = '20px';
            const overflowedHeight = rightColumn.scrollHeight - rightColumn.clientHeight;
            const leftColumnHeight = leftColumn.offsetHeight;
            const hrMarginTop = overflowedHeight + 100 + leftColumnHeight;
            const hr = document.getElementsByTagName('hr')[0];
            hr.style.marginTop = `${hrMarginTop}px`;
        }

        const publicationPageContainer = document.querySelector('.publication-page-container');
        if (publicationPageContainer) {
            publicationPageContainer.style.marginRight = '5%';
        }
        const socialIconSvg = document.querySelectorAll('.social-icon-svg');
        if (socialIconSvg) {
            for (const icon of socialIconSvg) {
                // Do something with the element
                icon.style.width = '40px';
                icon.style.height = '40px';
            }
        }
        const email = document.querySelector('.email');
        if (email) {
            email.style.marginTop = '10px';
            email.style.marginBottom = '10px';
        }

        const emailAdress = document.querySelector('.email-address');
        if (emailAdress) {
            emailAdress.style.fontSize = '20px';
        }

    }
    if (rightColumn){
        rightColumn.style.opacity = '1';
        leftColumn.style.opacity = '1';
    }
}

window.onload = function() {
    adjustMargins();
}

window.addEventListener("resize", adjustMargins);

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const leftColumn = document.querySelector(".left-column");

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
        leftColumn.classList.toggle('activated');
    });
});

