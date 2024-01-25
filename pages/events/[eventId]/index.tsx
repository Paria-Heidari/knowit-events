import fs from 'fs/promises';
import path from 'path';
import { useRouter } from 'next/router';


function EventDetail() {
  const router = useRouter();

  return <>Event Details page</>;
}

const getData = async() =>{
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const events = JSON.parse(jsonData);
  return events
}
//Server Side Rendering - Pre rendering
export const getStaticPaths = async () => {
// if we need to pre generated for all the dynamic paths from the data source
const events = await getData();
const paths = events.data.map((event: { id: any; })=>(
  {
    params:{eventId: event.id}
  }
))
  return{
    paths,
    fallback:false
  };
}


export const getStaticProps = async (context: { params: any; }) =>{

  const {params} = context;
  const eventId = params.eventId;
  const data = await getData();
  const event = data.data.find((event: { id: any; }) => event.id === eventId)

  return{
    props:{
      event: event
    }
  }

}

export default EventDetail;