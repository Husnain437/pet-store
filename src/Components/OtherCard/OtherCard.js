import React from 'react'
import Card from '../Card/Card'
import '../../main.css'
import dog2 from '../../Assets/demo2.77677a056565ea3b63ea.png'
import epheart from '../../Assets//heart1.png'

const OtherCard = () => {
  return (
    <div className='container'>
        <div className='pup-title'>
            <h2>Our Other Puppies</h2>
        </div>
        <div className='all-cards'>
            <Card className='dogCard' image={dog2} heart={epheart} />
            <Card className='dogCard' image={dog2}  heart={epheart}/>
            <Card className='dogCard' image={dog2}  heart={epheart}/>
            <Card className='dogCard' image={dog2}  heart={epheart}/>
            <Card className='dogCard' image={dog2}  heart={epheart}/>
            <Card className='dogCard' image={dog2}  heart={epheart}/>
            <Card className='dogCard' image={dog2}  heart={epheart}/>
            
        </div>
        

    </div>
  )
}

export default OtherCard