import { css } from '@linaria/core';
import classNames from 'classnames';
import avatar from '../../../assets/avatar.png';
import { Divider } from '../../../shared/components';

const styles = {
  wrapper: css`
    height: 50rem;
  `,
  avatar: css`
    height: 20rem;
  `,
  name: css`
    font-size: 4rem;
  `,
};

export const Showcase = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(
          'd-flex flex-column justify-content-center align-items-center',
          'h-100 bg-primary'
        )}
      >
        <div>
          <img
            className={classNames(styles.avatar, 'rounded')}
            src={avatar}
            alt="avatar"
          />
        </div>

        <h1 className={classNames(styles.name, 'fw-bold text-uppercase')}>
          Yunier Alvarez
        </h1>

        <Divider />

        <h3>Software Developer</h3>
      </div>
    </div>
  );
};
