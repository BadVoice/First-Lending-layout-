const modalH = document.querySelectorAll('.modal__inner')
const modalItemHeader = document.querySelector('.modal-questions__item-header')
const modalQuestion = document.querySelector('.modal-questions__item')
const modalItemContent = document.querySelector('.modal-questions__item-content')
const modalInnerCont = document.querySelector('.modal__inner__container')

modalH.forEach((elem) => {
    const modalItemHeader = elem.querySelector('.modal-questions__item-header')
    const modalQuestion = elem.querySelector('.modal-questions__item')
    const modalItemContent = elem.querySelector('.modal-questions__item-content')
    const modalInnerCont = document.querySelector('.modal__inner__container')


    console.log(elem)





    // modalItemHeader.addEventListener('click', () => {
    //     modalInnerCont.forEach((element) => {
    //         // const lineDescrAll = element.querySelectorAll('.program-line__descr');
    //         const modalItemContent = element.querySelectorAll('.modal__inner__container')
    //         console.log(element === modalItemContent)
    //         if (element === modalItemContent) {
    //             // element.classList.toggle('active'), () => {
    //             modalItemContent.classList.add('active')
    //                 // }
    //         } else {
    //             modalItemContent.classList.remove('active'), () => {}

    //         }
    //         // else {
    //         //     lineDescr.classList.remove('active')
    //         console.log(element)
    //             // }
    //     })

    // })



    //     modalItemHeader.addEventListener('click', () => {

    //         modalQuestion.classList.add('active')


    //         modalItemContent.style.cssText = `
    //         height: 133px;
    // `

    //         // console.log(modalItemContent)

    //         const modalPar = document.getElementById('modalPar')
    //         modalPar.style.cssText = `
    //         display: block;
    // `


    //         console.dir(modalPar)


    //     });

})

// modalH.forEach((elem, index) => {
//     const modalH = document.querySelector('.modal__inner')
//     const modalItemHeader = document.querySelector('.modal-questions__item-header')
//     const modalQuestion = document.querySelector('.modal-questions__item')
//     const modalItemContent = document.querySelector('.modal-questions__item-content')


//     modalItemHeader.addEventListener('click', () => {
//         modalQuestion.forEach((element) => {
//             // const lineDescrAll = element.querySelectorAll('.program-line__descr');
//             console.log(element === modalQuestion)
//             if (element === lineDescr) {
//                 // element.classList.toggle('active'), () => {
//                 modalQuestion.classList.add('active')
//                     // }
//             } else {
//                 modalQuestion.classList.remove('active'), () => {}

//             }
//             // else {
//             //     lineDescr.classList.remove('active')

//             // }
//         })


//         // console.dir(lineDescr);


//         // if (lineDescr != 'active') {
//         //     lineDescr.classList.add("non")

//         // } else if (lineDescr == 'non') {
//         //     lineDescr.classList.removed('active')
//         // }

//     })

// })