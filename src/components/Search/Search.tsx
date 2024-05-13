import { Button } from 'components/Button';
import { ReactComponent as SerchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';
import { FormEvent, useId, useState } from 'react';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void
}
interface FormFields {
  username: HTMLInputElement
}
export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const [checkCyrillic, setCheckCyrillic] = useState('')
  const cyrillicPattern = /^[\u0400-\u04FF]+$/;
  const handleCyrillic = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCheckCyrillic(event.target.value)
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    if(text.trim()){
      onSubmit(text);
      event.currentTarget.reset();
    }
  }
  const inputId = useId();


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor={inputId} className={styles.label}>
          <SerchIcon />
        </label>
        <input
          id={inputId}
          type="text"
          className={styles.textField}
          name="username"
          placeholder="Serch GitHub username..."
          onChange={handleCyrillic}
        />
        {
          hasError
          &&
          (<div className={styles.error}>
            No Result
          </div>)
        }
        {
          cyrillicPattern.test(checkCyrillic)
          &&
          (<div className={styles.error}>
            Ви вводите кирилицю!
          </div>)
        }
        <Button>Search</Button>
      </div>
    </form>
  )
};