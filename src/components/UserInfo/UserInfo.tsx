import { LocalUser } from 'types';
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";
import { InfoItem } from "components/InfoItem";
import {InfoItemProps} from '../../types/infoProps'
import UpdateIcon from '@mui/icons-material/Update';
import {format} from 'date-fns';
import BugReportSharpIcon from '@mui/icons-material/BugReportSharp';

import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<LocalUser,
  "blog" | "company" | "location" | "twitter" | "updated" | 'repos_url'> { }

export const UserInfo = ({ blog, company, location, twitter, updated, repos_url }: UserInfoProps) => {
  const updatedDate = format(new Date(updated), 'PP');
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
      isLink: true
    },
    {
      icon: <CompanyIcon />,
      text: company
    },
    { 
      icon: <UpdateIcon/>,
      text: updatedDate
    },
    {
      icon: <BugReportSharpIcon/>,
      text: repos_url,
      isLink: true
    }
  ];
  return (
    <div className={styles.userInfo}>
      {
        items.map((item, index) => (
          <InfoItem {...item} key={index} />
        ))
      }
    </div>
  )
};