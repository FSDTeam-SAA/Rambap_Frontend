import AboutHero from '@/components/aboutHero'
import React from 'react'
import AboutContent from './_components/aboutContent'
import OureCoreValue from './_components/ourCoreValue'

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutContent />
      <OureCoreValue/>
    </div>
  )
}

export default page