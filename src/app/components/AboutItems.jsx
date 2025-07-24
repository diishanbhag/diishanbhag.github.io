import React from 'react'
import AboutItem from './AboutItem'
import Kaggle from '../../../public/kaggle.svg'
import Leetcode from '../../../public/leetcode.svg'
import GithubIcon from '../../../public/github-icon.svg'
import Linkdin from '../../../public/linkedin-icon.svg'

const AboutItems = () => {
    return (
            <div className="grid grid-cols-3 ">
                <div className="flex justify-center items-center">
                    <AboutItem
                        icon={GithubIcon}
                        title={"Open Source"}
                        href="https://github.com/diishanbhag"

                    />
                </div>
                <div className="flex justify-center items-center">
                    <AboutItem
                        icon={Linkdin}
                        title={"Linkedin"}
                        href="https://www.linkedin.com/in/disha-shanbhag-10663126a/"
                    />
                </div>
            </div>
        
    )
}

export default AboutItems