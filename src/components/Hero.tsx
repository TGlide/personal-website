export function Hero() {
	return (
		<div className="hero h-screen relative flex flex-col justify-end container">
			<img className="w-[16rem] absolute right-[350px] bottom-[300px]" src="face.png" alt="Thomas's beautiful face. He's smiling at you." />
			<div className="w-[14rem] absolute right-[120px] bottom-[300px] ">
				<img src="hand.png" alt="A hand. It's waving at you, hi!" className="motion-safe:animate-wave" />
			</div>
			<h1 className="text-[15rem] font-bold">Hi!</h1>
			<h2 className="text-[13rem] font-bold">I'm Thomas.</h2>
			{/* <p>and I really want to work with you</p> */}
		</div>

	)
}
