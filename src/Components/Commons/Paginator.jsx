import s from './Paginator.module.css';
import {useState} from 'react';

export const Paginator = ({totalCount, count, eventClick, page, paginatorSize = 10}) => {
  const pagesNumber = [];
  const pagesCount = Math.ceil(totalCount / count);
  for (let p = 1; p <= pagesCount; p++) {
    pagesNumber.push(p);
  }
  let totalPaginatorCount = Math.ceil(pagesCount / paginatorSize);
  let [paginatorCount, setPaginatorCount] = useState(1);
  let leftLimitPaginator = paginatorCount * paginatorSize - paginatorSize + 1;
  let rightLimitPaginator = paginatorCount * paginatorSize;
  return (
    <div className={s.paginator}>
      {leftLimitPaginator > 1 && (
        <button
          onClick={() => {
            setPaginatorCount(paginatorCount - 1);
          }}
        >
          PERV
        </button>
      )}
      {pagesNumber &&
        pagesNumber
          .filter(pageNum => pageNum >= leftLimitPaginator && pageNum <= rightLimitPaginator)
          .map(pageNum => {
            return (
              <span
                key={pageNum}
                onClick={() => {
                  eventClick(pageNum);
                }}
                className={page === pageNum ? s.selectedPageNum : s.PageNum}
              >
                {pageNum}
              </span>
            );
          })}
      {paginatorCount < totalPaginatorCount && (
        <button
          onClick={() => {
            setPaginatorCount(paginatorCount + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};
