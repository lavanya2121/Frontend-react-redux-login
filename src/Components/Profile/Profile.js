import React from 'react';
import { connect } from 'react-redux'
import { mockData } from '../../mock-data';


function Profile(props) {
    return (

        <div>
            <h1>USER's INFORMATION</h1>
            <hr />

            {/* Table to display all the user info */}
            <table border="1" className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>PhoneNo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mockData.user.map(function (post, i) {
                            return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.name}</td>
                                    <td>{post.age}</td>
                                    <td>{post.gender}</td>
                                    <td>{post.email}</td>
                                    <td> {post.phoneNo}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {/* Logout */}
            <button onClick={
                () => {
                    sessionStorage.removeItem("access-token");
                    window.location.href = '/';
                }
            }>LOGOUT</button>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        user: state.usersData.user

    }
}

export default connect(mapStateToProps)(Profile)
