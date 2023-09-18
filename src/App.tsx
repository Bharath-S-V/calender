import  React,{ useState } from 'react';
import Calender from './calender/Calender';
import { format } from 'date-fns';

const App = () => {

const Today=()=>setCurrentDate(new Date())

  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div className="mt-16 flex flex-col items-center gap-8">
      <div className='flex flex-col items-center gap-2'>
        <p>Selected Dates:{format(currentDate, 'dd/MM/yyyy')}</p>
<button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 active:bg-blue-700' onClick={Today} >Today</button>
      </div>
      <Calender value={currentDate} onChange={setCurrentDate} />
    </div>
  );
};

export default App;
