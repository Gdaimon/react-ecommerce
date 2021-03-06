import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});


const useAuth = props => {
    const { currentUser } = useSelector(mapState);

    useEffect(() => {
        if (!currentUser) {
            props.history.push('/login');
        }

    })

    return currentUser;
}

export default useAuth;