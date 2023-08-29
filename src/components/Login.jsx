import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
            Enjoy the latest shows & movies, when it airs along with live cricket streaming only on Disney+ Hotstar. A premium Hotstar plan enables you to enjoy all the premium content offered by the platform. Get your Subscription now!
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content:"";
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`
const CTALogoOne = styled.img`
`
const SignUp = styled.a`
    cursor: pointer;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    transition: all 250ms;

    &:hover {
      background: #0483ee;
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
`