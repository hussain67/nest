import React from "react";
import { Link } from "react-router-dom";
import "./cards.scss";

import { formatNumber } from "../../utils/helpers/helper.ad";
import AdFooter from "./AdFooter";

const AdCard = ({ ad }) => {
	//console.log(ad);
	return (
		<div className="card">
			<Link to={`/ad/${ad.slug}`}>
				<img
					src={ad.photos[0]?.Location}
					alt={ad?.price}
				/>
				<div className="card-body">
					<h3>£ {formatNumber(ad.price)}</h3>
					<p className="address">{ad.address}</p>
					{<AdFooter ad={ad} />}
				</div>
			</Link>
		</div>
	);
};

export default AdCard;
