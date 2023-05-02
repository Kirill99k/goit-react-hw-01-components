import PropTypes from "prop-types";
import { Label, StatsItem, Value } from "./StatisticsStyled";

export const Items = ({ data }) => {
	return data.map((item) => (
		<StatsItem key={item.id}>
			<Label>{item.label}</Label>
			<Value>{item.percentage}%</Value>
		</StatsItem>
	));
};

Items.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}