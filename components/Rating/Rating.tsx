import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import StarIcon from './star.svg';

import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';

export const Rating: FC<IRatingProps> = (props) => {
  const {
    isEditable = false,
    rating: initialRating,
    setRating,
    ...otherProps
  } = props;

  const [viewRatings, setViewRatings] = useState<Array<React.ReactNode>>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    generateViewRating(initialRating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialRating]);

  const changeRatingView = (count: number) => {
    if (isEditable) {
      generateViewRating(count);
    }
  };

  const generateViewRating = (currentRating: number) => {
    const updatedViewRatings = viewRatings.map((_viewRating, index) => {
      const rating = index + 1;

      return (
        <span
          key={index}
          className={clsx(styles.star, {
            [styles.filled]: rating <= currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeRatingView(rating)}
          onMouseLeave={() => changeRatingView(initialRating)}
          onClick={() => handleRatingChange(rating)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(event) => handleKeyDown(event, rating)}
          />
        </span>
      );
    });
    setViewRatings(updatedViewRatings);
  };

  const handleRatingChange = (rating: number) => {
    if (isEditable && setRating) {
      setRating(rating);
    } 
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<SVGAElement>,
    rating: number
  ) => {
    if (isEditable && setRating) {
      if (event.code === 'Space') {
        setRating(rating);
      }
    }
  };

  return (
    <div {...otherProps}>
      {viewRatings.map((rating, index) => (
        <span key={index}>{rating}</span>
      ))}
    </div>
  );
};
