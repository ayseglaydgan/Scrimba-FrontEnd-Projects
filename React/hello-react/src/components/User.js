import React from 'react'
import ProbsTypes from 'prop-types';


function User({data}) {

    console.log();
  return (
    <div>
        <div>Name: {data.name}</div>
        <div>Age: {data.age}</div>
        <div>City: {data.city}</div>

        {/* /* "?" makes the friend array optional */

        /* {friends?.map((friend,i)  => (
                <div key={i}>{friend}</div>
            ))} */ }
    </div>
  );
}


// User.propTypes = {
//     name: ProbsTypes.string.isRequired,
//     city: ProbsTypes.string.isRequired,
//     age: ProbsTypes.number.isRequired
// };

User.propTypes = {
    data: ProbsTypes.exact({
        name: ProbsTypes.string.isRequired,
        city: ProbsTypes.string.isRequired,
        age: ProbsTypes.number.isRequired
    })
};
export default User;
