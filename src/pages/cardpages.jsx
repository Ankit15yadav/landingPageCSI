import React from 'react'
import AniCard from '../components/common/AniCard'
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"

const Cardpages = () => {

    const info = [
        {
            id: 1,
            title: "A Financial Expert in Your Corner Whenever You Need Them",
            desc: "Financial account integration allows our AI to manage routine categorization & reconciliation work while your dedicated accounting expert focuses on financial planning & problem solving.",
            img: pro1,
        },
        {
            id: 2,
            title: "Instant, Superior Bookkeeping with Leading-Edge AI Technology",
            img: pro2,
            desc: "Our platform integrates seamlessly with your accounts, ensuring rapid and industry-leading precision. Leave the tedious tasks to us and experience accounting at the speed of thought.",
        },
        {
            id: 3,
            img: pro3,
            title: "Real-Time, Year-Round Reporting Removes the Financial Guesswork",
            desc: "Uplinq delivers clean, actionable financial insights in real-time. Whether you're managing multiple entities, filing taxes, or seeking a loan, our detailed reports make it easy.",
        }
    ]

    return (
        <div className=' flex '>
            <AniCard info={info} />
        </div>
    )
}

export default Cardpages
