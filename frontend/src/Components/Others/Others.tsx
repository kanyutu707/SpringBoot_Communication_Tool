import React from 'react'
import './Others.css';
import holder from '../../assets/pexels-creationsbyfaik-1025469.jpg';
import holder1 from '../../assets/pexels-matheusnatan-3297593.jpg';

const Others = () => {
  return (
    <div className='othersContainer'>
        <section>
            <header>TESTIMONIALS</header>
            <div>
                <span>
                    <header>
                        <img src={holder} alt="" />
                        <h3>JOHN DOE</h3>
                    </header>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a ex eum voluptas! Architecto eveniet fuga et, magnam iste inventore quisquam nulla tempore quo dolorem laboriosam provident, perferendis tenetur blanditiis.</h4>
                </span>
                <span>
                    <header>
                        <img src={holder1} alt="" />
                        <h3>JOHN DOE</h3>
                    </header>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a ex eum voluptas! Architecto eveniet fuga et, magnam iste inventore quisquam nulla tempore quo dolorem laboriosam provident, perferendis tenetur blanditiis.</h4>
                </span>
                <span>
                    <header>
                        <img src={holder} alt="" />
                        <h3>JOHN DOE</h3>
                    </header>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a ex eum voluptas! Architecto eveniet fuga et, magnam iste inventore quisquam nulla tempore quo dolorem laboriosam provident, perferendis tenetur blanditiis.</h4>
                </span>
                <span>
                    <header>
                        <img src={holder1} alt="" />
                        <h3>JOHN DOE</h3>
                    </header>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a ex eum voluptas! Architecto eveniet fuga et, magnam iste inventore quisquam nulla tempore quo dolorem laboriosam provident, perferendis tenetur blanditiis.</h4>
                </span>
            </div>
        </section>
        <div>
            <header>CONTACT US</header>
      
            <form action="">
                <span className="input_group">
                    <label htmlFor="">SUBJECT</label>
                    <input type="text"  placeholder='SUBJECT'/>
                </span>
                <span className="input_group">
                    <label htmlFor="">DESCRIPTION</label>
                    <textarea name="" id="" placeholder='DESCRIPTION'></textarea>
                </span>
                <button>SUBMIT</button>
            </form>
           </div>
        </div>
    
  )
}

export default Others