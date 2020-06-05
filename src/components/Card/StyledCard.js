import styled from "styled-components";

const StyledCard = styled.div`
	box-shadow: 0px 1px 4px rgba(0,0,0,0.25);
    border-radius:5px;
    margin: 30px 20px;

    

.card-header {
    background-color: var(--color-gray-light);
    padding:20px;
    position:relative;
    
}
.card-content {
    padding: 20px;
}
.card-footer {
    padding:0 20px 20px 20px;
    margin:0 auto;
    text-align: center;
}

    h2 {
        color: var(--color-primary);
        margin:0;
        padding-top:45px;
    }
`;
export default StyledCard;

