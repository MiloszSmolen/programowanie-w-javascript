const slides = document.querySelector('.slides');
const PauseBtn = document.querySelector('.Pause');
const PanelBtn = document.querySelector('.Panel');
const NextBtn = document.querySelector('.Next');
const PreviousBtn = document.querySelector('.Previous');
const Actual = document.querySelector('#Actual');

let currentSlide = 1;
let Pause = false;
let ref;

function UpdateS (prevSlide, currentSlide){
	slides.classList.remove(`slide${prevSlide}`);
	slides.classList.add(`slide${currentSlide}`);
	Actual.textContent = currentSlide;}

function NextS(){
	const prevSlide = currentSlide;
	currentSlide++;
	if (currentSlide > 5){
		currentSlide = 1;}
	UpdateS (prevSlide, currentSlide);}

function PreviousS(){
	const prevSlide = currentSlide;
	currentSlide--;
	if (currentSlide === 0){
		currentSlide = 5;}
	UpdateS (prevSlide, currentSlide);}

function Slide(){
	ref = setInterval(NextS, 2000);}

function PauseS(){
	clearInterval(ref);
	stopped = true;
	PauseBtn.textContent = 'Play';}
	Slide();

PauseBtn.addEventListener('click', () => {
	if (!stopped){
		PauseS();
	return;}
	Slide();
	PauseBtn.textContent = 'Pause';});

[...PanelBtn.children].forEach((control, index) => {
	control.addEventListener('click', () => {
		for (let i = 0; i < 5; i++) {
			slides.classList.remove(`slide${i}`);}
		UpdateS (0, index + 1);
		PauseS();});});

	NextBtn.addEventListener('click', () => {
		PauseS();
		NextS();});

	PreviousBtn.addEventListener('click', () => {
		PauseS();
		PreviousS();});

slides.addEventListener('click', () => {
	PauseS();});
