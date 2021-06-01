import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { selectHeader } from '../features/header/headerSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../features/header/headerSlice';

const Header = () => {
  const login = useSelector(selectHeader);
  const history = useHistory();
  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(setIsLogin(true));
    history.push('/home');
  };

  const signOut = () => {
    history.push('/');
  };

  console.log(login);

  return (
    <Nav>
      <Link to='/home'>
        <Logo src='/images/logo.svg' />
      </Link>
      {login ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to='/home'>
              <a>
                <img src='/images/home-icon.svg' alt='' />
                <span>HOME</span>
              </a>
            </Link>
            <a>
              <img src='/images/search-icon.svg' alt='' />
              <span>SEARCH</span>
            </a>
            <a>
              <img src='/images/watchlist-icon.svg' alt='' />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src='/images/original-icon.svg' alt='' />
              <span>ORIGINAL</span>
            </a>
            <a>
              <img src='/images/movie-icon.svg' alt='' />
              <span>MOVIES</span>
            </a>
            <a>
              <img src='/images/series-icon.svg' alt='' />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <LoginContainer>
            <Login onClick={signOut}>Logout</Login>
          </LoginContainer>
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1; //Expand NavMenu as much possible
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2 ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
