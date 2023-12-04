import * as vlws from './controller.js'


const ourPeopleDisplayhtml = function (worker) {
    vlws.peopleNav.innerHTML = ''
    const html = `
    <div class="people-content">
    <img class="workerImage" src="${worker.img}" alt="Person">
    <p class="tiny-font">${worker.worker} (${worker.func})
    </p>
    <ul class="people-content--info">
        <li><span style="font-weight: bold">Actually working in: </span>${worker.workingIn}</li><br>
        <li><span style="font-weight: bold">Graduated in:</span> ${worker.graduationInfo}</li><br>
        <li><span style="font-weight: bold">Previous expierences:</span> ${worker.experiences}</li><br>
    </ul>
</div>
    `;

    return html
}




const aboutUsContentRenderHtml = function (text, image) {
    let html
    vlws.aboutUsContent.innerHTML = '';

    if (image) {
        html = `
    
                <div class="about-text">
                    <p>${text}</p>
                </div>
                

                <div class="about-images">
                    <img src="${image}" alt="Image 1">

                </div>`
    }
    else {
        html = `
                <div class="about-text">
                    <p>${text} </p>
                </div>
        `

    }
    return html
}
const displayContactBox = function () {

    vlws.navContainer.addEventListener('click', function (e) {
        e.preventDefault;

        if (e.target.textContent === 'Contact') {
            vlws.contactBox.classList.toggle('hidden')
        }
    })

    vlws.closeContactButton.addEventListener('click', function (e) {
        e.preventDefault;
        vlws.contactBox.classList.add('hidden')
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') vlws.contactBox.classList.add('hidden')
    });


}
export { ourPeopleDisplayhtml, aboutUsContentRenderHtml, displayContactBox }