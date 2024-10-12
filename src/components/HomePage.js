import { Container, Skeleton } from "@mui/material";
import { ethers } from "ethers";
import GuideBanner from "./GuideBanner";

export default function HomePage({
	totalSupply,
	staked,
	earlyRemoved,
	connected,
	holders,
	address,
	totalDusty,
	stakedCnt,
	unstakedCnt,
	loading,
	totalReward,
	ownerDusty,
	homeLoading,
	...props
}) {
	return (
		<div className="full-page">
			<div className="homebanner">
				<h1>
					<i>Dusty Vaults</i>
				</h1>
				<p>
					Safely deposit your NFT&apos;s in our secure vault for the next 12 months and earn up to 50% per
					annum in $Dusty. It&apos;s time for your NFT&apos;s to pay you back!
				</p>
				<img src="./safe.png" data-nsfw-filter-status alt="Safe" />
			</div>

			<GuideBanner />

			<Container>
				<div className="homepage">
					{connected && (
						<div className="home-row">
							<div
								className="dashboard-item user-box"
								style={{ background: "linear-gradient(135deg, #8a00ff, #450a8f" }}
							>
								<h2>Your Total NFTs ({address.slice(0, 4) + "..." + address.slice(39, 42)})</h2>
								<p>
									{connected ? (
										!loading ? (
											stakedCnt + unstakedCnt
										) : (
											<Skeleton width={80} height={45} sx={{ bgcolor: "#ffffff20" }} />
										)
									) : (
										<span>N/A</span>
									)}
								</p>
								<div className="sub-box">
									<div className="sub-box-item">
										<h4>STAKED</h4>
										<p>
											{!loading ? (
												stakedCnt
											) : (
												<Skeleton width={60} height={33} sx={{ bgcolor: "#ffffff20" }} />
											)}
										</p>
									</div>
									<div className="sub-box-item">
										<h4>UNSTAKED</h4>
										<p>
											{!loading ? (
												unstakedCnt
											) : (
												<Skeleton width={60} height={33} sx={{ bgcolor: "#ffffff20" }} />
											)}
										</p>
									</div>
								</div>
							</div>

							<div
								className="dashboard-item user-box display-center"
								style={{ background: "linear-gradient(135deg, #4f00ff, #450a8f" }}
							>
								<h2>Total Reward ($Dusty)</h2>
								<p>
									{!loading ? (
										parseFloat(totalReward).toFixed(2)
									) : (
										<Skeleton width={120} height={45} sx={{ bgcolor: "#ffffff20" }} />
									)}
								</p>
							</div>
						</div>
					)}

					<div className="home-row">
						<div className="dashboard-item">
							<h2>
								How many wallets hold <span>$Dusty</span>
							</h2>
							<p>
								{connected ? (
									!homeLoading ? (
										new Intl.NumberFormat().format(holders)
									) : (
										<Skeleton width={120} height={50} sx={{ bgcolor: "#ffffff20" }} />
									)
								) : (
									<span>N/A</span>
								)}
							</p>
						</div>

						<div className="dashboard-item">
							<h2>Total number of NFT&apos;s in the vault</h2>
							<p>
								{connected ? (
									!homeLoading ? (
										staked
									) : (
										<Skeleton width={120} height={50} sx={{ bgcolor: "#ffffff20" }} />
									)
								) : (
									<span>N/A</span>
								)}
							</p>
						</div>
					</div>

					<div className="home-row">
						<div className="dashboard-item">
							<h2>How many NFT&apos;s have been removed from vault early</h2>
							<p>
								{connected ? (
									!homeLoading ? (
										earlyRemoved
									) : (
										<Skeleton width={120} height={50} sx={{ bgcolor: "#ffffff20" }} />
									)
								) : (
									<span>N/A</span>
								)}
							</p>
						</div>

						<div className="dashboard-item">
							<h2>How much $Dusty is currently in the bonus/charity pool</h2>
							<p>
								{connected ? (
									!homeLoading ? (
										new Intl.NumberFormat().format(ethers.utils.formatEther(ownerDusty.toString()))
									) : (
										<Skeleton width={120} height={50} sx={{ bgcolor: "#ffffff20" }} />
									)
								) : (
									<span>N/A</span>
								)}
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
