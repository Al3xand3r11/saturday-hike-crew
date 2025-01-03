import events from '../data/dummy.json'
import { Map } from '../data/map'
import { Link} from 'react-router'

export default function Events() {

    const data = {name: 'test'}

    const listhikes = events.hikes.map(item =>
    { return item.rsvpOpen == "True" ?
        <div className='flex flex-row mb-8 rounded-xl bg-lightbrown w-3/5 drop-shadow-2xl'>
            <div className='ml-4 drop-shadow-lg'>
            <Map/>
            </div>
            
            <div className='ml-4'>
            <p className='font-semibold text-3xl'>{item.location}</p>
            <p>{item.date}</p>
            <p>{item.difficulty}</p>
            <div  className='rounded-3xl border-2 border-darkbrown drop-shadow-2xl text-center w-1/2'>
                <Link to='/rsvp' state={data} >RSVP</Link>
            </div>
            
            </div>
            
        </div>
        :
        <div className='flex flex-row mb-8 rounded-xl bg-white bg-opacity-30 w-3/5 drop-shadow-2xl'>
            <div className='ml-4 drop-shadow-lg'>
            <Map/>
            </div>
            
            <div className='ml-4'>
            <p className='font-semibold text-3xl'>{item.location}</p>
            <p>{item.date}</p>
            <p>{item.difficulty}</p>
            <p className='rounded-3xl border-2 border-darkbrown drop-shadow-2xl text-center w-1/2'>Recap</p>
            </div>
            
        </div>
    }
    )

    return(
        <div className='bg-darkbrown'>
            <div className='h-screen content-center place-items-center'>
                <div className='font-extrabold text-7xl mb-8'>
                    Events  
                </div>
                {listhikes}
            </div>
        </div>
    )
}