import PropTypes from 'prop-types';
import { Label, StatsItem, Value } from './StatisticsStyled';

export const Items = ({ data }) => {
  return data.map(({ id, label, percentage }) => (
    <StatsItem key={id}>
      <Label>{label}</Label>
      <Value>{percentage}%</Value>
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
  ),
};
