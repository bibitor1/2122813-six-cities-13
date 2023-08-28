import { getRatingStarsStyle, humanizeReleaseDate } from '../../utils/utils';
import { useAppSelector } from '../../hooks';
import { Review } from '../../types/review';
import { getComments } from '../../store/offers-data/selectors';

const sortReviews = (a: Review, b: Review) => new Date(b.date).getTime() - new Date(a.date).getTime();

export default function OfferReviews(): JSX.Element {
  const reviews = useAppSelector(getComments);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
      <ul className="reviews__list">
        { [...reviews].sort(sortReviews).slice(0, 10).map(({ rating, id, user, comment, date }) => (
          <li className="reviews__item" key={ id }>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={ user.avatarUrl } width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
                { user.name }
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={ {width: getRatingStarsStyle(rating)} }></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                { comment }
              </p>
              <time className="reviews__time" dateTime={ date }>{ humanizeReleaseDate(date) }</time>
            </div>
          </li>
        )) }
      </ul>
    </>
  );
}
