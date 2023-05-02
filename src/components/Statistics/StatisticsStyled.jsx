import { block, widthHeight, flex, font } from "helpers/mixins";
import { generateDarkColorHex } from "helpers/randomColor";
import styled from "styled-components";

export const Section = styled.section`
    padding: ${(props) => props.theme.spacing(10)} 0;
`;

export const Card = styled.div`
    ${widthHeight(500)};
    ${block};
    text-align: center;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: ${(props) => props.theme.spacing(1)};
    box-shadow: ${(props) => props.theme.colors.boxShadow};
    overflow: hidden;
`;


export const Title = styled.h2`
    ${font({ fs: 24, fw: 600, lh: 28 })};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primaryText};
    padding: ${(props) => props.theme.spacing(6)} 0;
`;

export const StatsList = styled.ul`
    ${flex({ js: 'space-between' })};
    ${widthHeight()};
`


export const StatsItem = styled.li`
    ${flex};
    flex-direction: column;
    width: calc(100% / 5);
    padding: ${(props) => props.theme.spacing(5)};
    background-color: ${generateDarkColorHex};
`;

export const Label = styled.span`
    ${font({ fs: 16, fw: 400, lh: 18 })};
    color: ${(props) => props.theme.colors.white};
    margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const Value = styled.span`
    ${font({ fs: 24, fw: 500, lh: 28 })};
    color: ${(props) => props.theme.colors.white};
`;