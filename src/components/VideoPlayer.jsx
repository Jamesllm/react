/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'


const VideoPlayer = () => {
    let listVideo = document.querySelectorAll('.video-list .vid');
    let mainVideo = document.querySelector('.main-video iframe');
    let title = document.querySelector('.main-video .title');

    listVideo.forEach( iframe =>{
        iframe.onclick = () =>{
            listVideo.forEach(vid => vid.classList.remove('active'));
            iframe.classList.add('active');
            if(iframe.classList.contains('active')){
                let src = iframe.children[0].getAttribute('href');
                mainVideo.src = src;
                let text = iframe.children[1].innerHTML;
                title.innerHTML = text;
            };
        }
    })
    return (
        <div className="conteiner">
        <div className="main-video">
            <div className="video">
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/EYhWTsndKt4?modestbranding=0" title='name' allowfullscreen></iframe>
                </div>
                <h3 className="title">01 video</h3>
            </div>
        </div>

        <div className="video-list">
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
              The current link item
            </a>
            <div className="vid active">
                <a href="https://pelistop.co/embed-dkyhfdn9uhj0.html" frameborder="0"></a>
                <h3 className="title">02 video</h3>
            </div>
            <div className="vid">
                <a href="https://www.youtube.com/embed/rZ95aZmQu_8" frameborder="0"></a>
                <h3 className="title">03 video</h3>
            </div>
            <div className="vid">
                <a href="https://www.youtube.com/embed/MxMNAo8d17E" frameborder="0"></a>
                <h3 className="title">04 video</h3>
            </div>
            <div className="vid">
                <a href="https://www.youtube.com/embed/rZ95aZmQu_8" frameborder="0"></a>
                <h3 className="title">05 video</h3>
            </div>
            <div className="vid">
                <a href="https://www.youtube.com/embed/MxMNAo8d17E" frameborder="0"></a>
                <h3 className="title">06 video</h3>
            </div>
            <div className="vid">
                <a href="https://www.youtube.com/embed/rZ95aZmQu_8" frameborder="0"></a>
                <h3 className="title">07 video</h3>
            </div>
          </div>
        </div>
    )
}

export default VideoPlayer
