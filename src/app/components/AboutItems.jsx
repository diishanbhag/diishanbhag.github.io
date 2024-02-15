import React from 'react'
import AboutItem from './AboutItem'
import Kaggle from '../../../public/kaggle.svg'
import Leetcode from '../../../public/leetcode.svg'
import GithubIcon from '../../../public/github-icon.svg'


const AboutItems = () => {
    return (
            <div className="grid grid-cols-3 ">
                <div className="flex justify-center items-center">
                    <AboutItem
                        icon={GithubIcon}
                        title={"Open Source"}
                        href="https://github.com/KumarSampurn"

                    />
                </div>
                <div className="flex justify-center items-center">
                    <AboutItem
                        icon={Leetcode}
                        title={"Problem Solving"}
                        href="https://leetcode.com/_Epsilon/"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <AboutItem
                        icon={Kaggle}
                        title={"Kaggle Notebooks"}
                        href="https://www.kaggle.com/kumarsampurn"
                    />
                </div>
            </div>
        
    )
}

export default AboutItems