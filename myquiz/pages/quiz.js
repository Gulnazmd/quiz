import React from 'react';
import Card from "../components/card";
import { data } from '../data';
import  { useState } from "react";


export default function Quiz () {

	const [ currentQuestion, setCurrentQuestion ] = useState(0);
	const [ myAnswer, setMyAnswer ] = useState("");
	const [ score, setScore ] = useState(0);
	const [ finish, setFinish ] = useState(false);
	const [ show, setShow ] = useState(false);


	const checkAnswer = (variant) => {
		setMyAnswer(variant);
	};

	const checkCorrectAnswer = () => {
		if (myAnswer === data[ currentQuestion ].answer) {
			setScore(score + 1);
		}
	};

	const reset = () => {
		setShow(false);
	};

	const finishHandler = () => {
		if (currentQuestion === data.length - 1) {
			setFinish(true);
		}
	};

	const startOver = () => {
		setCurrentQuestion(0);
		setFinish(false);
		setMyAnswer("");
		setScore(0);
	};


	if (finish) {
		return (
			<div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
				<div className="wrapper">
					<h3 className="text-grey text-2xl leading-tight font-medium mb-2">
						{`Welldone! Your Final Score is
			${score}/${data.length}
			points.`}
					</h3>
					<button
						className=" inline-block mt-8 px-6 py-2.5 bg-lightgreen text-grey font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkgreen hover:shadow-lg focus:bg-darkgreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkgreen active:shadow-lg transition duration-150 ease-in-out"
						onClick={() => startOver()}
					>
						Start Over
					</button>
				</div>
			</div>
		);
	} else {
		return (
			<Card>
				<h5 className="text-grey text-2xl leading-tight font-medium mb-2">{data[ currentQuestion ].question}</h5>
				<span className="m-2 border-2 border-black mx-auto px-2 bg-gray-600 	text-pink-400 rounded-lg text-center">
					{`${currentQuestion}/${data.length}`}
				</span>

				<div className="flex justify-center mt-5">
					<div className="form-check flex flex-col items-start">
						{data[ currentQuestion ].variants.map((variant) => (
							<div>
								<input
									key={variant.id}
									onClick={() => checkAnswer(variant)}
									className="form-check-input rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
								<label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
									{variant}
								</label>
							</div>
						))}
						{currentQuestion < data.length - 1 && (
							<button
							className=" inline-block mt-8 px-6 py-2.5 bg-lightgreen text-grey font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkgreen hover:shadow-lg focus:bg-darkgreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkgreen active:shadow-lg transition duration-150 ease-in-out"
								onClick={() => {
									setCurrentQuestion(currentQuestion + 1);
									checkCorrectAnswer();
									reset();
								}}
							>
								NEXT
							</button>
						)}
						{currentQuestion === data.length - 1 && (
							<button
								className=" inline-block mt-8 px-6 py-2.5 bg-lightgreen text-grey font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkgreen hover:shadow-lg focus:bg-darkgreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkgreen active:shadow-lg transition duration-150 ease-in-out"
								onClick={() => {
									finishHandler()
									checkCorrectAnswer();}
								}
							>
								FINISH
							</button>
						)}
					</div>
				</div>
			</Card>
		);
	}
}
