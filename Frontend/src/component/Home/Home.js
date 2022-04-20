import React from "react"
import "./Home.css"
import hero from "../pic/kazuha.jpg"
import skill1 from "../pic/logos_python.png"
import skill2 from "../pic/c++.png"
import skill3 from "../pic/logos_php.png"
import fb from "../pic/fb.png"
import ig from "../pic/ig.png"
import tw from "../pic/logos_twitter.png"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>Selamat Datang di Portofolio Saya</h3>
            <h1>
              Halo, saya <span>Rian Andri Waskito. </span>
            </h1>
            <h2>
              Saya adalah mahasiswa prodi teknik informatika itera
            </h2>

            <p>Lorem Ipsum Lorem Ipsum.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>Sosial Media</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <img src={fb} alt=''/>
                  </button>
                  <button className='btn_shadow'>
                    <img src={ig} alt='https://www.instagram.com/rian.andri12/' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={tw} alt='' /> 
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>Skill Terbaik</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home