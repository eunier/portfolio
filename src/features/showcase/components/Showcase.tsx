import { styled } from '@linaria/react';
import classNames from 'classnames';
import avatar from '../../../assets/avatar.png';
import { Divider } from '../../../shared/components';

const ShowcaseStyles = styled.div`
  height: 50rem;

  .showcase {
    &__avatar {
      height: 20rem;
    }

    &__name {
      font-size: 4rem;
    }
  }
`;

export const Showcase = () => {
  return (
    <ShowcaseStyles>
      <div
        className={classNames(
          'd-flex flex-column justify-content-center align-items-center',
          'h-100 bg-primary'
        )}
        id="home"
      >
        <div>
          <img className="showcase__avatar rounded" src={avatar} alt="avatar" />
        </div>

        <h1 className="showcase__name fw-bold text-uppercase">
          Yunier Alvarez
        </h1>

        <Divider />

        <h3>Software Developer</h3>
      </div>
    </ShowcaseStyles>
  );
};
