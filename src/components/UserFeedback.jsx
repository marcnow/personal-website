/* eslint-disable react/jsx-no-bind */
/* eslint-disable object-shorthand */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  getDoc, setDoc, doc,
} from 'firebase/firestore';
import { db } from '../firebase';

// retrieve data (amount of likes) from db
// update amount of likes when user interaction

export default function userFeedback(props) {
  const [likes, setLikes] = React.useState([]);
  const blogname = props.blogName;

  async function writeToDatabase() {
    try {
      const newLikes = likes + 1;
      setLikes(newLikes);
      await setDoc(doc(db, 'feedback', blogname), {
        like: newLikes,
      });
    } catch (ex) {
      setLikes(likes);
    }
  }

  async function fetchData() {
    const docSnap = await getDoc(doc(db, 'feedback', blogname));
    const likesFromDb = docSnap.data();
    setLikes(Object.values(likesFromDb)[0]);
  }

  React.useEffect(() => {
    // fetch data from database
    fetchData();
  }, []);
  // ff5277
  return (
    <div className="flex pt-8 mb:pt-0 items-center">
      <button onClick={writeToDatabase}>
        <FavoriteIcon sx={{ fontSize: 60, color: '#ff5277' }} />
      </button>
      <h3 className="ml-3 font-bold text-2xl mb:text-2xl">{likes}</h3>
    </div>
  );
}
