import { title } from "process";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchMoviesDetails } from "../../app/reducers/movies.reducer";
import styles from "./MovieDetailsPage.module.scss";

interface MovieDetailsPageProps {}

const MovieDetailsPage: FC<MovieDetailsPageProps> = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state: any) => state.movies.currentMovie);
  const imageUrlBase = process.env.REACT_APP_BASE_IMAGE_URL;

  useEffect(() => {
    console.log(id);
    dispatch(fetchMoviesDetails(id));
  }, []);

  return (
    <div className={styles.MovieDetailsPage}>
      <h1>{details?.title}</h1>
      <h3>{details?.tagLine}</h3>
      <img
        src={`${imageUrlBase}${details?.poster_path}`}
        alt={details?.title}
      ></img>
    </div>
  );
};

export default MovieDetailsPage;
