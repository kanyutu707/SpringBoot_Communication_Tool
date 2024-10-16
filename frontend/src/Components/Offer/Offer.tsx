import React from 'react'
import './Offer.css'
import holding from '../../assets/pexels-creationsbyfaik-1025469.jpg';
import holding1 from '../../assets/pexels-matheusnatan-3297593.jpg';

const Offer = () => {
  return (
    <div className='offerContainer'>
        <header>WHAT WE OFFER</header>
        <section>
            <span>
                <img src={holding} alt="" />
                <h3>FLEXIBILITY</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem iure quae temporibus accusantium aut, unde ab in itaque asperiores voluptate.</h4>
            </span>
            <span>
                <img src={holding1} alt="" />
                <h3>CUSTOMIZATION</h3>
                <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis fuga rem doloremque! Nisi repellat recusandae, cum dolor necessitatibus veniam qui.</h4>
            </span>
            <span>
                <img src={holding} alt="" />
                <h3>SECURITY</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat obcaecati enim dicta praesentium laboriosam quos magni facilis consequuntur reiciendis.</h4>
            </span>
            <span>
                <img src={holding1} alt="" />
                <h3>ONE TIME INSTALLATION</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt fugiat tenetur deleniti doloribus eum reiciendis, laborum tempora earum quibusdam!</h4>
            </span>
            <span>
                <img src={holding} alt="" />
                <h3>SUBSCRIPTION MODEL</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat obcaecati enim dicta praesentium laboriosam quos magni facilis consequuntur reiciendis.</h4>
            </span>
            <span>
                <img src={holding1} alt="" />
                <h3>Wide Variety</h3>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt fugiat tenetur deleniti doloribus eum reiciendis, laborum tempora earum quibusdam!</h4>
            </span>
        </section>
    </div>
  )
}

export default Offer