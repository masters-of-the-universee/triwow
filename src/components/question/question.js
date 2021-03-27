import React, { useRef, useEffect, useState } from "react";
import "./question.scss";
import ReactHtmlParser from "react-html-parser";

function shuffle(array) {
	let shuffledArray = array;
	shuffledArray.sort(() => Math.random() - 0.5);
	return shuffledArray;
}
const types = {
	MULTIPLE: "multiple",
	BOOLEAN: "boolean",
};

const Question = ({ question, handleAnswersStat }) => {
	const [answers, setAnswers] = useState([]);
	const [selectedAnswer, setSelectedAnswer] = useState(undefined);
	const [num, setNum] = useState(15);
	const [pause, setPause] = useState(false);
	let count = useRef(1);
	let intervalRef = useRef();

	useEffect(() => {
		setSelectedAnswer(undefined);
		setAnswers(
			shuffle([question.correct_answer, ...question.incorrect_answers])
		);
	}, [question]);

	useEffect(() => {
		setAnswers(
			shuffle([question.correct_answer, ...question.incorrect_answers])
		);
		if (selectedAnswer !== undefined) {
			if (selectedAnswer === question.correct_answer) {
				handleAnswersStat({ answer: true });
				return;
			}
			handleAnswersStat({ answer: false });
		}
	}, [selectedAnswer]);

	const decreaseNum = () => setNum((prev) => prev - 1);
	useEffect(() => {
		setPause(false);
		intervalRef.current = setInterval(decreaseNum, 1000);
		return () => clearInterval(intervalRef.current);
	}, []);

	if (question)
		return (
			<div className="question-card">
				<p>{ReactHtmlParser(question.question)}</p>
				<div className="question-card-answers">
					{question.type === types.BOOLEAN ? (
						<ul>
							<li>
								<button onClick={() => setSelectedAnswer(true)}>True</button>
							</li>
							<li>
								<button onClick={() => setSelectedAnswer(false)}>False</button>
							</li>
						</ul>
					) : (
						<ul>
							{answers.map((a, i) => (
								<li key={i}>
									<button
										onClick={() => {
											setSelectedAnswer(a);
										}}
									>
										{a}
									</button>
								</li>
							))}
						</ul>
					)}
				</div>
				<div className="timer">
					<p>{num}</p>
				</div>
			</div>
		);
	return <div>Question undefined</div>;
};

export default Question;
