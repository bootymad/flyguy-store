export default function Layout({ children }) {
	return (
		<div className="site-container">
			<div className="site-child-container">
				<header>
					<h1 className="site-logo">FLYGUY Hair</h1>
					<p className="site-slogan">
						Celebrate what makes you human.
					</p>
				</header>
				<nav className="site-navigation"></nav>
				{children}
				<footer className="footer">
					<p>Copyright 2022, FLYGUY Hair LLC</p>
				</footer>
			</div>
		</div>
	);
}
