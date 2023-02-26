import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import history from '../Utilities/history';
import Login from './Login';
import Register from './Register';
import { useSelector } from 'react-redux';


const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [page, setPage] = useState('login');

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/chat');
        }else{
            
        }
    }, [isLoggedIn]);

    const handleClick = location => {
        setPage(location);
    };

    let Content;

    if (page === 'login') {
        Content = <Login handleClick={handleClick} />;
    } else {
        Content = <Register handleClick={handleClick} />;
    }

    return (
        <Container component="main" maxWidth="xs">
            {Content}
        </Container>
    );
};

export default Home;
