import React, { useState } from 'react';
import "./index.css";

export default function Exam() {
	const questions = [
		{
			questionText: ' In young’s double slit experiment, the width of the fringes obtained when light of wavelength 6000 Ȃ is 2. 0 mm. What will be the fringe width if the entire apparatus is immersed in a liquid of refractive index 1.33?',
			answerOptions: [
				{ answerText: '0.5', isCorrect: false },
				{ answerText: '1.0', isCorrect: false },
				{ answerText: '1.5', isCorrect: true },
				{ answerText: '2.0', isCorrect: false },
			],
		},
		{
			questionText: 'Consider interference between two waves from two sources of intensities I and 4I. What is the ratio of intensities at the point where the phase difference is π?',
			answerOptions: [
				{ answerText: '9 I', isCorrect: false },
				{ answerText: 'I', isCorrect: true },
				{ answerText: '7 I', isCorrect: false },
				{ answerText: '2 I', isCorrect: false },
			],
		},
		{
			questionText: 'The polarizing angle for a medium is 60o. The critical angle for this medium is',
			answerOptions: [
				{ answerText: 'sin-1 (0.577)', isCorrect: true },
				{ answerText: 'sin-1 (0.732)', isCorrect: false },
				{ answerText: 'sin-1 (0.932)', isCorrect: false },
				{ answerText: 'sin-1 (0.836)', isCorrect: false },
			],
		},
		{
			questionText: ' Suppose a boy is enjoying a ride on a marry-go-round which is moving with a constant speed of 10 m/s. It implies that the boy is:',
			answerOptions: [
				{ answerText: 'At rest', isCorrect: false },
				{ answerText: 'Moving with no acceleration', isCorrect: false },
				{ answerText: 'Moving with uniform velocity', isCorrect: false },
				{ answerText: ' In accelerated motion', isCorrect: true },
			],
		},
		{
			questionText: ' A monochromatic light of wavelength 6000 Ȃ is coming from a star. What is the limit of resolution of a telescope whose objective has a diameter of 100 inch?',
			answerOptions: [
				{ answerText: '1.1 × 10‒7 radian', isCorrect: false },
				{ answerText: '6.4 × 10‒7 radian', isCorrect: false },
				{ answerText: '4.1 × 10‒7 radian', isCorrect: false },
				{ answerText: ' 2.9 × 10‒7 radian', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
