import React, { useState } from 'react';

const footerData = [
    {
        title: 'In demand careers',
        items: [
            'Data Scientist',
            'Full Stack Web Developer',
            'Cloud Engineer',
            'Project Manager',
            'Game Developer',
            'See all Career Accelerators',
        ],
    },
    {
        title: 'Web Development',
        items: ['Web Development', 'Javascript', 'React Js', 'Angular', 'Java'],
    },
    {
        title: 'IT Certifications',
        items: [
            'Amazon AWS',
            'AWS Certified Cloud Practitioner',
            'AZ-900: Microsoft Azure Fundamentals',
            'AWS Certified Solutions Architect - Associate',
            'Kubernetes',
        ],
    },
    {
        title: 'Leadership',
        items: [
            'Leadership',
            'Management Skills',
            'Project Management',
            'Personal Productivity',
            'Emotional Intelligence',
        ],
    },
    {
        title: 'Certification by Skills',
        items: [
            'CyberSecurity Certification',
            'Project Management Certification',
            'Cloud Certification',
            'Data Analytics Certification',
            'HR Management Certification',
        ],
    },
    {
        title: 'Data Science',
        items: [
            'Data Science',
            'Python',
            'Machine learning',
            'Chatgpt',
            'Deep Learning',
        ],
    },
    {
        title: 'Communication',
        items: [
            'Communication Skills',
            'Presentation Skills',
            'Public Speaking',
            'Writing',
            'Powerpoint',
        ],
    },
    {
        title: 'Business Analytics and Intelligence',
        items: [
            'Microsoft Excel',
            'SQL',
            'Microsoft Power BI',
            'Data Analysis',
            'Business Analysis',
        ],
    },
];

const Footer = () => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleAccordion = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className='font-serif cursor-pointer '>
            <div className='bg-blue-900 text-white px-6 py-6'>
                <p className='text-2xl font-semibold mb-4'>Explore top skills and certifications</p>
                <div className='hidden md:grid grid-cols-4 gap-4 text-md'>
                    {footerData.map((section, index) => (
                        <ul key={index}>
                            <p className='font-semibold mb-2 text-lg'>{section.title}</p>
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    ))}
                </div>

                {/* Accordion layout for small screens */}
                <div className='md:hidden space-y-4'>
                    {footerData.map((section, index) => (
                        <div key={index} className="border-b border-white">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left font-semibold text-lg py-2 flex justify-between items-center"
                            >
                                {section.title}
                                <span className="text-white text-xl">
                                    {openIndexes.includes(index) ? '-' : '+'}
                                </span>
                            </button>
                            {openIndexes.includes(index) && (
                                <ul className='pl-4 pb-2'>
                                    {section.items.map((item, i) => (
                                        <li key={i} className='py-1'>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-blue-950 text-white px-6 py-6 font-serif'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-md'>
                    <ul>
                        <p className='font-semibold mb-2 text-lg'>About</p>
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                        <li>Investors</li>
                    </ul>

                    <ul>
                        <p className='font-semibold mb-2 text-lg'>Discover LMS</p>
                        <li>Plans & Pricing</li>
                        <li>Teach on LMS</li>
                        <li>Help and Support</li>
                    </ul>

                    <ul>
                        <p className='font-semibold mb-2 text-lg'>LMS Business</p>
                        <li>LMS Business</li>
                    </ul>

                    <ul>
                        <p className='font-semibold mb-2 text-lg'>Legal & Accessibility</p>
                        <li>Accessibility Statement</li>
                        <li>Privacy Policy</li>
                        <li>Sitemap</li>
                        <li>Terms</li>
                    </ul>
                </div>

                <div className='flex flex-col md:flex-row items-start md:items-center mt-6 px-2 bg-blue-950 text-white'>
                    <div className="text-3xl font-bold mt-2 md:mt-0 md:px-4">LMS</div>
                    <span className="ml-0 md:ml-2 mt-1 md:mt-0 text-sm">&copy; 2025 LMS, Inc.</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
