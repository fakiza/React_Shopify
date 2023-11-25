import styled, { css } from 'styled-components';

export const Parallax = styled.div`
 background-image:url(${props => props.bgImg});
 height: 600px;
 background-attachment: fixed;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 @media (max-width: 768px) {
    height:400px;
 }

 @media (max-width: 664px) {
   height:300px;
 }
`;
