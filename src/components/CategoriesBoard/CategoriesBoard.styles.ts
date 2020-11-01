// .categoriesitem-title {
  // margin: 0 16px;
  // padding: 0;
  // font-size: 36px;
  // font-weight: 700;
  // text-align: center;
// }

// .categoriesitem-description {
  // margin: 32px 16px 0 16px;
  // padding: 0;
  // font-size: 26px;
  // font-weight: 600;
  // text-align: center;
// }

// .categoriesitem-contents {
  // margin-top: 32px;
  // display: flex;
  // justify-content: space-evenly;
  // flex-wrap: wrap;
// }

// .categoriesitem-contents-empty {
  // margin: 0 16px;
  // height: 0;
  // width: 350px;
// }

// @media only screen and (max-width: 576px) {
//   .categoriesitem-title {
//     font-size: 32px;
//   }

//   .categoriesitem-description {
//     font-size: 22px;
//   }
// }

import styled from 'styled-components';

const CategoriesBoardTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 0 16px;
  padding: 0;
  color: ${(props) => props.theme.textColor};

  ${(props) => props.theme.breakpoints.small} {
    font-size: 32px;
  }
`;

const CategoriesBoardDescription = styled.h3`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 32px 16px 0 16px;
  padding: 0;
  color: ${(props) => props.theme.textColor};

  ${(props) => props.theme.breakpoints.small} {
    font-size: 22px;
  }
`;

const CategoriesBoardContents = styled.section`
  margin-top: 32px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const CategoriesBoardEmpty = styled.div`
  margin: 0 16px;
  height: 0;
  width: 350px;
`;

export {
  CategoriesBoardTitle,
  CategoriesBoardDescription,
  CategoriesBoardContents,
  CategoriesBoardEmpty
};