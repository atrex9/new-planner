import styled from "styled-components";

export const SearchCont = styled.div`
    height: 20vh;
    width: 100%;
    background-color: #273244;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .MuiInputBase-input{
      color: #D4D7DD;
    }
    .MuiIconButton-label{
      color: #D4D7DD;
    }
`;

export const SearchImagesSpan = styled.span`
   display: flex;
   padding: 10px;
   width: 10vh;
   justify-content: space-between;
`;

export const searchStyles = {
    root: {
      backgroundColor: '#1A2536',
      width: '60%',
      borderRadius: 8,
      margin: '0 40px'
    }
  };