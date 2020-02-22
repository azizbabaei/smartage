import React from 'react';
//import Styels
import '../Styles/Main.css';
import Chart from './Chart';

function Main({ username }) {
	return (
		<main className="main">
			<div className="main-container">
				<section className="section">
					<div className="lastposts">
						<img
							className="col-sm-4 "
							src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/84462109_573482440047257_4987072762866779593_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=1&_nc_ohc=yrxqRUB3Pn0AX8brqa5&oh=cb554fa01ad276ba18aac61733015d1e&oe=5EC56E49"
						></img>
						<img
							className="col-sm-4 "
							src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e15/p150x150/83712940_181506986467985_7534887694312701232_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=1&_nc_ohc=vUYo40KBPOoAX_GqfEo&oh=4aaefaa335944322098d077f1384d089&oe=5E503E31"
						></img>
						<img
							className="col-sm-4 "
							src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e15/p150x150/84643342_613361182788607_2327353083517564511_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=1&_nc_ohc=sPLMBfNtywAAX9HcBBl&oh=3f76e29a50c8e85c92b897e9ae0259df&oe=5E505308"
						></img>
					</div>
				</section>
				<img
					className="userpicture"
					src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-19/s320x320/65555937_480624726037010_8041940728315641856_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&amp;_nc_ohc=DOY8S_ufqtQAX8RApSD&amp;oh=c1a1a7b73bd7642c92a84b9ff00b8d28&amp;oe=5EF882D5"
					alt=""
				></img>
				<div>
					<h2>{username}</h2>
					<span>@bbcnews</span>
				</div>

				<div className="col-sm-12 information-rate">
					<div className="col-sm-3" style={{ color: 'white', display: 'grid' }}>
						<span>Engagement rate</span>
						<strong>0.34 %</strong>
					</div>
					<div className="col-sm-3" style={{ color: 'white', display: 'grid' }}>
						<span>Quality rate</span>
						<strong>90/100</strong>
					</div>
				</div>
				<div className="container-text">
					<div className="container-text-section">
						<h3 className="container-text-section-h3">
							Tips to Improve Your Engagement Rate
						</h3>

						<div className="container-text-section-div">
							<span>Post at least three a week</span>
						</div>
						<div className="container-text-section-div">
							<span>Bio can be improved</span>
						</div>
						<div className="container-text-section-div">
							<span>Longer Captions</span>
						</div>
						<div className="container-text-section-div">
							<span>Regular stories (Use stickers to engage followers)</span>
						</div>
						<div className="container-text-section-div">
							<span>High quality pictures</span>
						</div>
						<div className="container-text-section-div">
							<span>Relevant hashtags (maximum 8 hashtags)</span>
						</div>
						<div className="container-text-section-div">
							<span>Tag relevant people in the posts</span>
						</div>
						<div className="container-text-section-div">
							<span>
								Check your insights to know which time is the best get the most
								engagement
							</span>
						</div>
						<div className="container-text-section-div">
							<span>
								Check your insights to know the content your audience love to
								see from you
							</span>
						</div>
						<a className="container-text-section-div" href="#">
							learn more
						</a>
					</div>
				</div>

				<div className="col-sm-12 information-flowers">
					<div className="col-sm-2 padding-r-2" style={{ display: 'grid' }}>
						<span>Followers</span>
						<strong>11205723</strong>
					</div>
					<div className="col-sm-2" style={{ display: 'grid' }}>
						<span>Following</span>
						<strong>66</strong>
					</div>
					<div className="col-sm-2" style={{ display: 'grid' }}>
						<span>Posts</span>
						<strong>95555425</strong>
					</div>
				</div>
				<div className="chart">
					<h2>Engagement rate</h2>
					<Chart />
				</div>
			</div>
		</main>
	);
}

export default Main;
