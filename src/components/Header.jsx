import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut
} from '../features/user/userSlice'
import { useDispatch, useSelector } from "react-redux"
import { signInWithPopup, signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)
  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
      }
    })
  }, [])

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      let user = result.user
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      navigate("/")
    })
  }

  const signedOut = () => {
    signOut(auth).then(() => {
      dispatch(setSignOut())
      navigate("/login")
    })
  }

  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      {!userName ?
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
        :
        <>
          <NavMenu>
            <Link to="/">
              <a>
                <img src="/images/home-icon.svg" alt="" />
                <span>HOME</span>
              </a>
            </Link>

            <a>
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>

            <a>
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>

            <a>
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>

            <a>
              <img src="/images/series-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>

            <a>
              <img src="/images/search-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>

          <UserImage onClick={signedOut} src={userPhoto} />
          {/* '/images/profile.svg' */}
          <HamBurger>
            <a href="#">
              <GiHamburgerMenu />
            </a>
          </HamBurger>
        </>}

    </Nav>
  )
}


const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  `
const Logo = styled.img`
  width: 80px;
  `
const NavMenu = styled.div`
  display: flex;
  align-item: center;
  flex: 1;
  margin-left: 25px;
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
        content:"";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover{
      span:after{
        transform: scaleX(1);
      }
    }
  }
  @media (max-width:880px) {
    display:none;
  }
`
const UserImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer; 
  @media (max-width:880px) {
    display:none;
  }
`
const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0,0,0,0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`
const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const HamBurger = styled.div`

display:flex;
flex:1;
justify-content:flex-end;
@media (min-width:880px) {
  display: none;
}
`