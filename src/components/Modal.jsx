import React, { useState } from 'react';
import '../css/Modal.css';
import closeButton from '../img/header/GTA6_Trailer/close-button.svg';
import playButton from '../img/header/GTA6_Trailer/play-button.svg';

const Modal = () => {
   const [isModalOpen, setModalOpen] = useState(false);
   const [isVideoOpen, setVideoOpen] = useState(false);

   const openModal = () => {
      setModalOpen(true);
   };

   const closeModal = () => {
      // Добавляем класс closing перед закрытием
      document.body.style.overflow = 'auto'; // Разрешаем скролл перед закрытием
      document.getElementById('modal-overlay').classList.add('closing');
      document.getElementById('modal-content').classList.add('closing');
      // setVideoOpen(false);
      // setModalOpen(false);

  
      // Ждем завершения анимации и затем закрываем модальное окно
      setTimeout(() => {
         setVideoOpen(false);
         setModalOpen(false);
      }, 300);
    };

   const openVideo = async () => {
      // Плавно исчезает кнопка play
      document.querySelector('.play-button__image').style.opacity = 0;

      // Ждем некоторое время перед изменением фона
      await delay(500);

      // Меняем фон
      document.querySelector('.overlay').style.opacity = 1;

      // Ждем некоторое время перед появлением видео
      await delay(1800);

      // Показываем видео
      setVideoOpen(true);
      // document.getElementById('modal-content').classList.add('visible');
   };

   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

   return (
      <div>
         <button className='trailer' onClick={openModal}>
            <p className='trailer__text'>WATCH GRAND THEFT AUTO VI TRAILER 1 NOW</p>
         </button>
         

         {isModalOpen && (
         <div id="modal-overlay" className="modal-overlay">
            <div id="modal-content" className="modal-content">
               
               <div className="overlay"></div>

               <div className="close-button" onClick={closeModal}>
                  <img className="close-button__image" src={closeButton} alt='alt'></img>
               </div>
               <div className="background-image" />
               <div className="play-button" onClick={openVideo}>
                  <img className="play-button__image" src={playButton} alt='play'></img>
               </div>

               {/* Если видео открыто, показываем iframe */}
               {isVideoOpen && (
                  <iframe 
                     className='trailerWindow'
                     width="1550"
                     height="871"
                     src="https://www.youtube.com/embed/QdBZY2fkU-0?si=kP694OjyYDDqWmHq&autoplay=1"
                     title="YouTube video player"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowfullscreen> 
                  </iframe>
               )}
            </div>
         </div>
         )}
      </div>
   );
};

export default Modal;