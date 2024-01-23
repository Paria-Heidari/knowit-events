import {Header} from '../header/header'


export const Layout = (props:any ) =>{
  return(
    <>
    <Header/>
    <main>
      {props.children}
    </main>
    </>
  )
}