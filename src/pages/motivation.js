import styles from '../styles/Home.module.css';
import Affirmations from '../components/Affirmations';

export default function Motivation() {
    return (
        <>
            <div className='container-fluid d-flex flex-column text-center'>
                <h4 className='display-4' >Todays words of encouragement:</h4>
                <br/>
                <br/>
                <h6 className='display-6 mb-3'>
                    ✨ <Affirmations /> ✨
            </h6>
            </div>
        </>
    );
};