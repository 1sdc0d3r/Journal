import React from "react";
import { connect } from "react-redux";
import "../style/nav-btns/NavBtns.css";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

function NavButtons({ state, back, next, entries }) {
  return (
    <div className="nav-btns">
      <p className="back">
        {state.page === 1 ? (
          <IoMdArrowBack color="grey" onClick={() => null} />
        ) : (
          <IoMdArrowBack color="red" onClick={back} />
        )}
      </p>
      <p>{state.page}</p>
      <p className="next">
        {entries.length / state.limit <= state.page ? (
          <IoMdArrowForward color="grey" onClick={() => null} />
        ) : (
          <IoMdArrowForward color="red" onClick={next} />
        )}
      </p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    entries: state.journalReducer.entries,
  };
};
export default connect(mapStateToProps, {})(NavButtons);
