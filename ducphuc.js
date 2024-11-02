

function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');


    bgVideoList.forEach(video=>{
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }

    }

    );

    models.forEach(model=>{
        model.classList.remove('active');
        if(model.classList.contains(name)){
            model.classList.add('active');
        }

    }

    );

    trailers.forEach(video=>{
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }

    }

    );





    
}


 