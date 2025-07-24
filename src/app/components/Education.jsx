"use client";
import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';
import ExperienceDesctriptionItem from './ExperienceDesctriptionItem';

const Education = () => {


    const EducationList = [
        {
            course: 'B.Tech C.S.E',
            school: 'PES University, Bangalore',
            timeDuration: '2022 - 2026',
            grade: 'CGPA: 8.8',

            achievements: [
                'MRD Scholarship for being in top 20% in I Semester', 
                'MRD Scholarship for being in top 20% in II Semester',
                'MRD Scholarship for being in top 20% in III Semester', 
                'MRD Scholarship for being in top 20% in V Semester', 
            
            ],

        },
        {
            course: '11th and 12th Grade',
            school: 'Presidency School Bangalore South',
            timeDuration: '2020 - 2022',
            grade: 'CBSE  Percentage: 93%',

            achievements: []

        },
        {
            course: '9th and 10th Grade',
            school: 'Mitra Academy',
            timeDuration: '2018-2020',
            grade: 'ICSE  Percentage: 97%',

            achievements: ['Best Outgoing Student',
                        'ARA memorial Awars',
                         'Sports Championship Award',
                        'Manekshaw Parade Ground Winners- Marchpast']

        },
        
        
    ]



    const [selectedItem, setSelectedItem] = useState(EducationList[0]);

    const handleItemClick = (index) => {
        setSelectedItem(EducationList[index])

    };

    return (
        <div className='text-center mb-24 '
            
        >

            <div className='grid lg:grid-cols-2 gap-20 grid-cols-1' >
                <div className='grid grid-rows-3 gap-10 lg:m-10 rounded-3xl '>


                    {EducationList.map((experience, index) => (
                        <div
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleItemClick(index)

                            }}
                        >
                            <ExperienceItem
                                company={experience.course}
                                companyDescription={experience.school}
                                timeDuration={experience.timeDuration}
                                location={experience.grade}
                            />
                        </div>
                    ))}

                </div>
                <div className='hidden lg:block'>
                    {selectedItem ? (
                        <ExperienceDesctriptionItem
                        company={selectedItem.course}
                        companyDescription={selectedItem.school}
                            timeDuration={selectedItem.timeDuration}
                            location={selectedItem.grade}
                            description={selectedItem.achievements}
                            
                        />
                    ) : (<></>)}
                </div>
            </div>
        </div>
    );
};

export default Education;
