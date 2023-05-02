import styled from 'styled-components';

export const NavDiv = styled.div<{ isSelected?: boolean ,isLastLinkInSection?: boolean }>`
    height: 40px;
    padding-left: 50px;
    border-bottom: ${props=>props.isLastLinkInSection ? '1px solid #394B61' : 'none' };
    border-right: ${props=>props.isSelected ? '3px solid #00E0FF' : 'none' }
`;

export const ParentDiv = styled.div`
   padding-top: 13px;
`;

export const IconCont = styled.img`
    padding-top: 12px;
`; 

export const NameSpan = styled.span<{ isSelected?: boolean}>`
    padding-left: 10px;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: left;
    vertical-align: top;
    color: ${props=>props.isSelected ? '#00E0FF':'#D4D7DD' };
`; 