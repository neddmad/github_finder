import { LocalUser } from 'types';
import styles from './UserStat.module.scss';

interface UserStatProps extends Pick<LocalUser,
  "repos" | "followers" | "following" | 'id' | 'repos_url'> {
}

interface Stat {
  title: string,
  data: string | number,
  repos_url?:string
}



const functionOnClick = async(repos_url:string) => {
  return await fetch(repos_url).then(a=>a.json()).then(data=>data.map((elem: { name: string })=>(console.log(elem.name))))
}

const Stat = ({ title, data, repos_url}:Stat ) => (
  <div className={styles.info}>
    {title === 'Repos' ? 
    <a  target="_blank" onClick={()=>functionOnClick(repos_url?repos_url:'')} className={styles.link}><div className={styles.infoTitle}>{title}</div></a> 
    : 
    <div className={styles.infoTitle}>{title}</div>}
    <div className={styles.infoNumber}>{data}</div>
  </div>
)

export const UserStat = ({ repos, followers, following, id, repos_url }: UserStatProps) => {
  return (
    <div className={styles.userStat}>
      <Stat title="Repos" data={repos} repos_url={repos_url}/>
      <Stat title="Followers" data={followers} />
      <Stat title="Following" data={following} />
      <Stat title="Id" data={id} />
    </div>
  )
};