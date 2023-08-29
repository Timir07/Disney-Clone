import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {db} from '../firebase'
import { doc, getDoc } from 'firebase/firestore'


function Detail() {
  const {id} = useParams()
  const [movie,setMovie] = useState({})

  useEffect(()=>{
    const fetchMovie = async () => {
      try {
        const movieDocRef = doc(db, 'doc', id);
        const movieDocSnap = await getDoc(movieDocRef);
        
        if (movieDocSnap.exists()) {
          setMovie(movieDocSnap.data());
          // Update  state with movieData
        } else {
          // Handle case when document doesn't exist
        }
      } catch (error) {
        // Handle errors 
      }
    };

    fetchMovie();
  },[id]) 


  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} alt="" />
      </Background>

      <ImageTitle>
        <img src={movie.titleImg} alt="" />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>
        {movie.subTitle}
      </SubTitle>

      <Description>
        {movie.description}
      </Description>

    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.6;

  img {
    width:100%;
    height:100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items:center;
  margin-left: 3.5vw;
`
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px; 
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249,249,249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198,198,198);
  }
`
const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  color: rgb(249,249,249);
  border: 1px solid rgb(249,249,249);
`
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background: rgba(0,0,0,0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`
const GroupWatchButton = styled(AddButton)`
  background: black;
`

const SubTitle = styled.div`
  margin-left: 3.5vw;
  color: rgb(249,249,249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div`
  margin-left: 3.5vw;
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249,249,249);

`