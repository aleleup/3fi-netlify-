import { ourPeopleDisplayhtml, aboutUsContentRenderHtml, displayContactBox } from './model.js'
import * as vlws from './controller.js'

// contact box

displayContactBox()

// our people buttons change display
vlws.peopleNav.innerHTML = ourPeopleDisplayhtml(vlws.sebas)

vlws.ourPeopleBtnBox.addEventListener('click', function (e) {
    const target = e.target

    if (target.textContent === 'CFO') {
        vlws.peopleNav.innerHTML = ourPeopleDisplayhtml(vlws.guille)
    }

    if (target.textContent === 'COO') {
        vlws.peopleNav.innerHTML = ourPeopleDisplayhtml(vlws.roli)
    }

    if (target.textContent === 'CEO') {
        vlws.peopleNav.innerHTML = ourPeopleDisplayhtml(vlws.sebas)
    }
});


// about us next-prev buttons change display


vlws.aboutUsContent.innerHTML = aboutUsContentRenderHtml(vlws.text1, vlws.img1)

let counter = 0;

vlws.nextPrevBtns.addEventListener('click', function (e) {
    if (e.target.textContent === 'next') {
        counter++

    }

    if (e.target.textContent === 'previous') {
        counter--

    }


    if (counter === 1) {
        // on 1 both buttons are displayed;  
        vlws.prev.classList.remove('hidden');
        vlws.next.classList.remove('hidden');

        // dot2 == 'active';
        vlws.dot1.classList.remove('dot--active');
        vlws.dot3.classList.remove('dot--active');
        vlws.dot2.classList.add('dot--active');

        // display text2, img2
        vlws.aboutUsContent.innerHTML = aboutUsContentRenderHtml(vlws.text2, vlws.img2)

    }

    if (counter === 2) {
        // on 2 next button gets hidden; 
        vlws.next.classList.add('hidden');

        // dot3 == 'acive';
        vlws.dot2.classList.remove('dot--active');
        vlws.dot3.classList.add('dot--active');

        // display text3
        vlws.aboutUsContent.innerHTML = aboutUsContentRenderHtml(vlws.text3)

    }

    if (counter === 0) {
        // on 0 prev button gets hidden; 
        vlws.prev.classList.add('hidden');

        // dot1 == 'active'
        vlws.dot2.classList.remove('dot--active');
        vlws.dot1.classList.add('dot--active');

        // display text1, img1

        vlws.aboutUsContent.innerHTML = aboutUsContentRenderHtml(vlws.text1, vlws.img1)


    }

})




