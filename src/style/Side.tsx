import styled from "styled-components";

// 기존 Sidebar 스타일
export const Sidebar = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 18rem;
    background-color: #ffff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); 
    @media (max-width: 1024px) {
        width: 15rem; 
    }

    @media (max-width: 768px) {
        width: 100%; 
        height: 4rem; 
        flex-direction: row; 
        position: fixed; 
        top: 0; 
        z-index: 100; 
    }
`;