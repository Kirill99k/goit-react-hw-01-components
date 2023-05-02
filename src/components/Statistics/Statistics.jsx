import PropTypes from "prop-types";
import { Card, Section, StatsList, Title } from "./StatisticsStyled";
import { Items } from "./Items";


export const Statistics = (({ title, stats }) => {
    return (
        <Section>
            <Card>
                {title && <Title>{title}</Title>}
                <StatsList>
                    <Items data={stats} />
                </StatsList>
            </Card>
        </Section>
    );
});

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};