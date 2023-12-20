import { useState } from 'react';
import ss from "../../../public/assets/react.svg";
import ReactPaginate from 'react-paginate';
import "./style.css"
import SubCategory from '../../components/subCategory';
// Example items, to simulate fetching from another resources.
const items = [...Array(33).keys()];

// eslint-disable-next-line react/prop-types
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        // eslint-disable-next-line react/prop-types
        currentItems.map((item,index) => (
          <div key={index}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Allcategoriespage({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>

    <SubCategory categoryName="كل التصنيفات"/>
    <div className="grid-container">
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
      <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    <img src={ss} style={{ width: "50px", height: "50px" }} />
    </div>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
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
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Allcategoriespage;