import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
  return (
 <> 
  <section className='card-cta'>
    <div className='flex flex-col gap-6 max-w-lg'>
      <h2>Get Interview-Ready with AI-powered Practice and Feedback</h2>
      <p className='text-lg'> Practice on real Interview questions and get instant Feedback</p>
      <Button asChild className='btn-primary max-sm:w-full'><Link href={"/interview"}>Start Now!</Link></Button>
    </div>
    <Image src ="/robot.png" alt='robot image' width={400} height={400} className='max-sm:hidden' ></Image>
  </section>
  <section className='flex flex-col gap-6 mt-8'>
<h2>Your Interviews</h2>


<div className='interviews-section'>
 {dummyInterviews.map((interview) => (
  <InterviewCard {...interview} key ={interview.id}/>
 ))}
 {/* <p>You have not taken any interviews yet!</p> */}
</div>
  </section>
  <section className='flex flex-col gap-6 mt-8'>
    <h2>Take an Interview</h2>
    <div className='interviews-section'>
      {dummyInterviews.map((interview) => (
  <InterviewCard {...interview}key= {interview.id}/>
 ))}
    </div>
  </section>
  </>
  )
}

export default page