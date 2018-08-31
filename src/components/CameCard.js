import React from 'react';

const CameCard = ({ game }) => {
   return (<div>
       <div className='ui card'>
         <img src={game.cover} alt='game.cover'/>
         <div className='content'>
           <div className='header'>{game.title}</div>
         </div>
       </div>
   </div>)
}

export default CameCard