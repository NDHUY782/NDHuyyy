// MenuBarBtn.addEventListener('click', function () {
//     document.querySelector('.header_top ul').classList.toggle('active')
// })
TableBtn.addEventListener('click', function () {
    TableSearch.classList.toggle('active')
    ImgContainer.classList.toggle('active')
})

// window.addEventListener('scroll',function() {
//     const x = this.pageYOffset;
//     console.log(x)
//     if (x > 690) {
//         ELEMENT_HEADER_TOP.classList.add('active')
//     } else {
//         ELEMENT_HEADER_TOP.classList.remove('active')
//     }
// })

// const renderDataTopView    = async (url) => {

//     // fet api data show TopView
//     try {
//         let response      = await fetch(url)
//         let arrData       = await response.json()
//             arrData       =  arrData.results
//             console.log(response)
//     } catch {
//         console.log('err')
//     }

// }
// renderDataTopView('https://api.themoviedb.org/3/movie/616037/images?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos')
// console.log(renderDataTopView())
    // function showData() { 
    //     let url = 'https://api.instantwebtools.net/v1/airlines';
    //     let res = fetch(url);
    //     let data= res.json();
    //     console.log(res)
        
    //  }

    // showData()
    
