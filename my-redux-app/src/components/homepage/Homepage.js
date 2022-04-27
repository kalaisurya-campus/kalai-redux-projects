import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { apidata } from "../api/Getapi";
import {
  DECREMENTS,
  GET_USERDATA,
  INCREMENTS,
  POPDATA,
  PUSHDATA,
  SET_USERDATA,
} from "../redux/actions/Actions";
import store from "../redux/store/store";
const Homepage = (props) => {
  useEffect(() => {
    // apidata
    //   .get("/")
    //   .then((res) => {
    //     console.log(res.data);
    //     props.setuserdatanames(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("no data found", err);
    //   });
    props.setdatasaga();
  }, []);
  const incs = () => {
    props.increments();
  };
  const decre = () => {
    props.decrement();
  };
  const pushrandom = () => {
    props.push();
  };
  const poprandom = () => {
    props.pop();
  };
  return (
    <div>
      <h1>home</h1>
      <button onClick={incs}>ince</button>
      <button onClick={decre}>decrement</button>
      <button onClick={pushrandom}>push</button>
      <button onClick={poprandom}>pop</button>
      {props.users ? (
        <div>
          {props.users.map((items, index) => {
            return (
              <div key={index}>
                <p>{items.name}</p>
                <h1>username:{items.username}</h1>
              </div>
            );
          })}
        </div>
      ) : (
        <div>thansk</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
    users: state.setusers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increments: () => {
      dispatch({ type: INCREMENTS });
      console.log(store.getState().count);
    },
    decrement: () => {
      dispatch({ type: DECREMENTS });
      console.log(store.getState().count);
    },
    push: () => {
      dispatch({ type: PUSHDATA, value: Math.random() });
      console.log(store.getState());
    },
    pop: () => {
      dispatch({ type: POPDATA });
      console.log(store.getState());
    },
    // setuserdatanames: (users) => {
    //   dispatch({ type: SET_USERDATA, value: users });
    // },

    setdatasaga: () => {
      // console.log("api called");
      dispatch({ type: GET_USERDATA });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Homepage));
