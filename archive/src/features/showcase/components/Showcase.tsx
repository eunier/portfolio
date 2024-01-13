import { styled } from '@linaria/react';
import classNames from 'classnames';
import { Divider } from '../../../shared/components';
import avatarIcon from '../../../assets/avatar.png'

const { VITE_ASSETS_URL } = import.meta.env as ImportMetaEnv & {
  VITE_ASSETS_URL: string;
};

const ShowcaseStyles = styled.section`
  height: 50rem;

  .showcase {
    &__avatar {
      height: 20rem;
    }

    &__name {
      font-size: 4rem;
      text-align: center;
    }

    &__description {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`;

export const Showcase = () => {
  return (
    <ShowcaseStyles className="test">
      <div
        className={classNames(
          'd-flex flex-column justify-content-center align-items-center',
          'h-100 bg-primary'
        )}
        id="home"
      >
        <div>
          <img
            className="showcase__avatar rounded"
            src={avatarIcon}
            alt="avatar"
          />
        </div>

        <h1 className="showcase__name fw-bold text-uppercase">
          Yunier Alvarez
        </h1>

        <Divider />

        <h3 className="showcase__description">
          Software developer graduated with a strong foundation in
          object-oriented and functional programming and great attention to
          detail, experienced in working with a team and alone.
        </h3>
      </div>
    </ShowcaseStyles>
  );
};
