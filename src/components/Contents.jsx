import React from 'react'
import HomeSkillsSection from './HomeSkillsSection'
import TrainingNotice from './TrainingNotice'
import HomeAddSection from './HomeAddSection'
import BlogSection from './BlogSection'
import FAQ from './Faq'

const Contents = () => {
  return (
    <div className='font-serif bg-white text-black dark:bg-backgroundDark dark:text-white'>
        <HomeSkillsSection/>
        <TrainingNotice/>
        <HomeAddSection/>
        <BlogSection/>
        <FAQ/>
    </div>
  )
}

export default Contents;