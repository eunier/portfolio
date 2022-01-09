import { styled } from '@linaria/react';
import { Divider } from '../../../shared/components';

const Title = styled.h1`
  margin-top: 54px;
`;

export const About = (): JSX.Element => {
  return (
    <section className="container" id="about">
      <div className="row">
        <Title className="text-center text-uppercase">About</Title>
      </div>

      <div className="row d-flex justify-content-center">
        <Divider className="w-auto" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit ex cupiditate maiores quis doloremque aliquid rerum?
              Dicta corporis, neque, veniam quod deleniti ipsum exercitationem
              veritatis beatae dolore modi numquam recusandae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
