import React from 'react'
import { Faq as FaqComponent } from 'components/'

const Faq = () => {
    const items = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis consequat a, lobortis non est?',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis conseq a, lobortis non est. Vivamus tempus euismod erat, vel accumsan erat malesuada eget. Olor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis consequat a, lobortis non est. Vivamus tempus euismod erat, vel accumsan erat malesuada eget',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis consequat a, lobortis non est?',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis conseq a, lobortis non est. Vivamus tempus euismod erat, vel accumsan erat malesuada eget. Olor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis consequat a, lobortis non est. Vivamus tempus euismod erat, vel accumsan erat malesuada eget',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis consequat a, lobortis non est?',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis conseq a, lobortis non est. Vivamus tempus euismod erat, vel accumsan erat malesuada eget. Olor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis consequat a, lobortis non est. Vivamus tempus euismod erat, vel accumsan erat malesuada eget',
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis consequat a, lobortis non est?',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis conseq a, lobortis non est. Vivamus tempus euismod erat, vel accumsan erat malesuada eget. Olor sit amet, consectetur adipiscing elit. Quisque ante tellus, malesuada mollis consequat a, lobortis non est. Vivamus tempus euismod erat, vel accumsan erat malesuada eget',
        },
    ]
    return <FaqComponent items={items} />
}

export default Faq
