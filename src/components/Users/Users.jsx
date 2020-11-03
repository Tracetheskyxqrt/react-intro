import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "../User/User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (<div>
        <Paginator currenPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSiz={pageSize}/>
        <div> {users.map(u => <User user={u}
                                    followingInProgress={props.followingInProgress}
                                    key={u.id}
                                    follow={props.follow}
                                    unfollow={props.unfollow}
        />)}
        </div>
    </div>)
}

export default Users;