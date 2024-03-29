import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DropDownPosition from './dropdownPosition'
import DropDownLevel from './dropdownLevel'
import axios from 'axios';
import Img from "../logofinal.png"
import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import Quiz from './quiz'
import { Link } from 'react-router-dom'
import DropDownType from './dropdownPositionType'
import { ProgressB } from './progressB'




const JSONFormat = [
    {
        question: 'question1',
        options: {
            option1: "option1",
            option2: "option2",
            option3: "option3",
        },
        asnwer: 'option2',
    },

]

export default function Hero() {
    const YearsOfExp = localStorage.getItem("Years")
    const prompt = `genrate a 10 MCQ questions for front end developer with experince of ${YearsOfExp}  
    the response should be in JSON fomat and same like this ${JSONFormat}
    `;
    const [response, setResponse] = useState();
    const [questions, setQuestions] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuestions(response)

        axios.post('http://localhost:8000/buddy', { prompt })
            .then((res) => {
                setResponse(res.data)
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='container mx-auto max-w-3xl  py-12 sm:py-48  '>
                <ProgressB />
            <div className="mx-auto max-w-3xl  paddingTop ">
                
                <form onSubmit={handleSubmit}>

                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-left text-gray-700 sm:text-xl">
                            You will solve this assessment which is only take (20 Mins)

                            We suggest being here because we time it , just press start when you are ready.

                            Make sure that your internet connection is stable
                        </h1>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            {/* <div className="  px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"> */}

                            <DropDownPosition />
                            <DropDownLevel />
                            <DropDownType />

                            <button
                                type="submit" value="Submit"
                                className="rounded-md bg-indigo-600 px-3.5  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <Link
                                    to="form"
                                >

                                    Start
                                </Link>
                            </button>
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            <html>
                                {response}
                            </html>

                        </p>

                    </div>
                </form>
            </div >

            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

        </div>
    )
}