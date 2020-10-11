import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://sun9-8.userapi.com/impf/c604529/v604529184/3a1cf/k5SSYiNlqwY.jpg?size=50x0&quality=88&crop=170,88,787,787&sign=5d2fcf66ed423b0d7d410e0e3a674dde&ava=1',
                followed: false,
                fullName: 'Dmitriy',
                status: 'No pain no gain',
                location: {city: 'Saint-Petersburg', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://sun9-8.userapi.com/impf/c604529/v604529184/3a1cf/k5SSYiNlqwY.jpg?size=50x0&quality=88&crop=170,88,787,787&sign=5d2fcf66ed423b0d7d410e0e3a674dde&ava=1',
                followed: true,
                fullName: 'Alexander',
                status: 'Я всё успею, либо моё место обочина',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://sun9-8.userapi.com/impf/c604529/v604529184/3a1cf/k5SSYiNlqwY.jpg?size=50x0&quality=88&crop=170,88,787,787&sign=5d2fcf66ed423b0d7d410e0e3a674dde&ava=1',
                followed: false,
                fullName: 'Mike',
                status: 'Real big drip, Watch out dont sleep',
                location: {city: 'Atlanta', country: 'USA'}
            },
            {
                id: 4,
                photoUrl: 'https://sun9-8.userapi.com/impf/c604529/v604529184/3a1cf/k5SSYiNlqwY.jpg?size=50x0&quality=88&crop=170,88,787,787&sign=5d2fcf66ed423b0d7d410e0e3a674dde&ava=1',
                followed: true,
                fullName: 'Jeffery',
                status: 'Again...',
                location: {city: 'Atlanta', country: 'USA'}
            },

        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>

                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>
            )
        }
    </div>
}

export default Users;