import { FormEvent, useRef } from 'react';
import { Button } from '../ui/button/button';
import styles from './eventSearc.module.css';

interface EventSearchProps {
  buttonText:string;
  years: number[];
  months: { value: number; label: string }[];
  onSearch: (arg1: string| undefined, arg2: string| undefined )=> void;
}

export const EventSearch = (props: EventSearchProps) => {
 
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);
  

  const submitHandler = (event: FormEvent) =>{
    event.preventDefault();
    let selectedYear: string | undefined;
    let selectedMonth : string | undefined;

    if(yearInputRef.current){
    selectedYear = yearInputRef.current.value;
    }
    if(monthInputRef.current){
      selectedMonth = monthInputRef.current.value;
    }

    props.onSearch(selectedYear, selectedMonth )
  }
  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='year'>Year</label>
            <select id='year' ref={yearInputRef}>
              {props.years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.control}>
            <label htmlFor='month'>Month</label>
            <select id='month' ref={monthInputRef}>
              {props.months.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button >{props.buttonText}</Button>
      </form>
    </>
  );
};
