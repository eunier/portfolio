import { css } from '@linaria/core';
import classNames from 'classnames';
import { range } from 'ramda';

export type DividerProps = {
  className?: string;
};

const styles = {
  line: css`
    height: 0.17rem;
    width: 8rem;
  `,
  icon: css`
    font-size: 2.5rem;
  `,
};

export const Divider = (props: DividerProps): JSX.Element => {
  return (
    <div className={classNames(props.className, 'd-flex gap-3')}>
      {range(0, 3).map(i =>
        i === 1 ? (
          <i
            className={classNames(styles.icon, 'bi bi-code-slash')}
            key={i}
          ></i>
        ) : (
          <div className="d-flex align-items-center" key={i}>
            <div className={classNames(styles.line, 'rounded bg-dark')}></div>
          </div>
        )
      )}
    </div>
  );
};
