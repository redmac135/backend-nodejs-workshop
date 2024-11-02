import styled from 'styled-components';

export const TaskItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 0 0.5rem 0 2rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

export const TaskItemDeleteButton = styled.a`
  width: 32px;
  height: 32px;
  opacity: 0.3;
  position: relative;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    left: 15px;
    top: 5px;
    content: ' ';
    width: 2px;
    height: 25px;
    background-color: white;
    content: "";
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`
