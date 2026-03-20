import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className='hero-title'>
                <h1>Contentful CMS</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus tempore commodi iste vero nam mollitia dolores incidunt eligendi harum aut, error voluptas culpa qui quidem facilis, id quod nostrum nisi!
                </p>
            </div>
            <div className='img-container'>
                <img src={heroImg} alt='woman'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
