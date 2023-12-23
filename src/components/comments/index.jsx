import React from "react";
import StarRating from "../starRating";
import ReactPaginate from "react-paginate";
import SubCategory from "../subCategory";
import "./style.css"
export const Comments = () => {
  return (
    <><section className="comments">
      <div className="header">
        <p>التقييمات </p>
        <span className="rating">4.3 <span className="star">&#9733;</span></span>
        <span>160 (تقييم)</span>
      </div>

      <div className="container">

      <div className="comment-author">
        <p>علي محمد </p>
        <StarRating />
      </div>
      <form action="">
        <textarea name="" id="" width="100%" placeholder="اكتب تعليقك ..." />
        <button>اضف تعليق</button>
      </form>
      <div
        className="post"
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid lightgray",
          borderBottom: "1px solid lightgray"
        }}
      >

        <div className="post-author">
          <p>محمود علي </p>
          <div className="rating" >4.3 <span className="star">&#9733;</span></div>
        </div>
        <div>منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة</div>
      </div>

      <div
        className="post"
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid lightgray",
          borderBottom: "1px solid lightgray"
        }}
      >

        <div style={{ display: "flex" }}>
          <p>4.3 &#9733;</p>
          <p>محمود علي </p>
        </div>
        <div>منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة</div>
      </div>

      <div
        className="post"
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
        }}
      >

        <div style={{ display: "flex" }}>
          <p>4.3 &#9733;</p>
          <p>محمود علي </p>
        </div>
        <div>منتج مناسب سعره للوقت الحالي وجه كويس جدا ومعاه دراع زيادة</div>

      </div>
      </div>

      <ReactPaginate
        nextLabel="next >"
        pageRangeDisplayed={7}
        marginPagesDisplayed={2}
        pageCount={22}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null} />
    </section><SubCategory buttonName={""} categoryName={"منتجات قد تعجبك"} isCard /></>

  );
};

export default Comments;
