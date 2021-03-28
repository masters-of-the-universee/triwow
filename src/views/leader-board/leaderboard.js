import './leaderboard.scss'

const LeaderBoard = () => {
    return (

        <div class="container">
		<div class="leaderboard">
			<div class="head">
				<h1>LEADER BOARD</h1>
			</div>
			<div class="body">
				<ol>
					<li>
						<mark>Onur</mark>
						<small>948</small>
					</li>
					<li>
						<mark>Kaan</mark>
						<small>750</small>
					</li>
					<li>
						<mark>Sueda</mark>
						<small>684</small>
					</li>
					<li>
						<mark>Enes</mark>
						<small>335</small>
					</li>
					<li>
						<mark>Eray Malı</mark>
						<small>296</small>
					</li>
				</ol>
			</div>
		</div>
	</div>

    )
}

export default LeaderBoard;
