import React from 'react'
import {motion} from "framer-motion";
import {styles} from "../style.js";
import {fadeIn,textVariant} from "../utils/motion.js";
import {SectionWrapper} from '../hoc'


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)}
      className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]">
        I'm skilled frontend developer with
        experience in TypeScript and
        JavaScript,and expertise in library
        like React,NextJS,Redux,RTK,Zustand,ReactQuery.
        I'm a quick learner and
        collaborate closely with team to
        create efficient,scalable,and
        user-friendly solutions that
        solve real-world problems.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About,"about")