import { RepoProps } from '../../types/repo';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';

import classes from './Repo.module.scss';

const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  return (
    <div className={classes.repo}>
      <h3>{name}</h3>
      <p className={classes.language}>
        <BsCodeSlash />
        <span> {language}</span>
      </p>
      <div className={classes.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a className={classes.repo_btn} href={html_url} target="_blank">
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
