import React, { useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
const Visual = () => {

    return (
        <div className='visualWrap'>
            <ul className='visualImg'>
                <li><img src="./images/main_slider_1.jpg" alt="" /></li>
                <li><img src="./images/main_slider_2.jpg" alt="" /></li>
                <li><img src="./images/main_slider_3.jpg" alt="" /></li>
            </ul>

            <div className="text">
                <h2>탐라는 전기차</h2>
                <p>전기차와 함께 제주 여행을 준비하는 당신에게<br />필요한 모든 정보와 꿀팁!</p>
            </div>
            <span className='arrow'></span>
            
            
            
        </div>
    );
};

export default Visual;