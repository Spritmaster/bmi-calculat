import React  from 'react'
import person from '../image/person.svg'
import food   from '../image/food.svg'
import sport  from '../image/sport.svg'
import night  from '../image/nigth.svg'
import gender from '../image/gender.svg'
import cake   from '../image/cake.svg'
import muscle from '../image/muscle.svg'
import baby   from '../image/baby.svg'
import race   from '../image/race.svg'


function Main() {


  return (
    <div>
      <div className="img-wrapper">
        <img src={person} alt="" />

        <div className="hero-info">
          <h2 className="hero-title">What your BMI result means</h2>
          <p className="hero-text">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
        </div>
      </div>
      <div className="daily-life">
        <div className="life-box">
           <img src={food} alt="" className="icons"/>
           <h3 className="life-title">Healthy eating</h3>
           <p className="life-text">Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
        </div>
        <div className="life-box">
          <img src={sport} alt="" className="icons" />
          <h3 className="life-title">Regular exercise</h3>
          <p className="life-text">Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
        </div>
        <div className="life-box">
          <img src={night} alt="" className="icons" />
          <h3 className="life-title">Adequate sleep</h3>
          <p className="life-text">Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
        </div>
      </div>
      <section className="limitation">
        <div className="limi-info">
        <div className="limitation-wrap">
        <h2 className="limitation-title">Limitations of BMI</h2>
        <p className="limitation-text">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
        </div>
        <div className="box-gender all-box">
          <div className="img-span">
            <img src={gender} alt="" />
            <p className="span-text">Gender</p>
          </div>
          <p className="gender-text">The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
        </div>
        </div>

        <div className="age-muscle ">
          <div className="age-box all-box ">
          <div className="img-span">
            <img src={cake} alt="" />
            <p className="span-text">Age</p>
          </div>
          <p className="gender-text">In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.</p>
          </div>
          <div className="muscle-box all-box ">
          <div className="img-span">
            <img src={muscle} alt="" />
            <p className="span-text">Muscle</p>
          </div>
          <p className="gender-text">BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.</p>
          </div>
        </div>
        <div className="race-wrap">
          <div className="pregrency-box all-box">
          <div className="img-span">
            <img src={baby} alt="" />
            <p className="span-text">Pregnancy</p>
          </div>
          <p className="gender-text">Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
          </div>

          <div className="race-box all-box">
          <div className="img-span">
            <img src={race} alt="" />
            <p className="span-text">Race</p>
          </div>
          <p className="gender-text">Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Main